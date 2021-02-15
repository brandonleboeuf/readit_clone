import { Request, Response, Router } from 'express'
import multer, { FileFilterCallback } from 'multer'
import path from 'path'
import fs from 'fs'

// import { User } from '../../client/src/types'

import Comment from '../entities/Comment'
import Post from '../entities/Post'
import User from '../entities/User'
import auth from '../middleware/auth'

import user from '../middleware/user'
import { makeId } from '../util/helpers'

const getUserSubmissions = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneOrFail({
      where: { username: req.params.username },
      select: ['username', 'createdAt', 'profileImageUrn'],
    })

    const posts = await Post.find({
      where: { user },
      relations: ['comments', 'votes', 'sub'],
    })

    const comments = await Comment.find({
      where: { user },
      relations: ['post'],
    })

    if (res.locals.user) {
      posts.forEach((p) => p.setUserVote(res.locals.user))
      comments.forEach((p) => p.setUserVote(res.locals.user))
    }

    let submissions: any[] = []
    posts.forEach((p) => submissions.push({ type: 'Post', ...p.toJSON() }))
    comments.forEach((p) =>
      submissions.push({ type: 'Comment', ...p.toJSON() })
    )

    submissions.sort((a, b) => {
      if (b.createdAt > a.createdAt) return 1
      if (b.createdAt < a.createdAt) return -1
      return 0
    })

    return res.json({ user, submissions })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

const upload = multer({
  storage: multer.diskStorage({
    destination: 'public/images',
    filename: (_, file, callback) => {
      const name = makeId(15)
      callback(null, name + path.extname(file.originalname))
    },
  }),
  fileFilter: (_, file: any, callback: FileFilterCallback) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
      callback(null, true)
    } else {
      callback(new Error('Not an image'))
    }
  },
})

const uploadProfileImage = async (req: Request, res: Response) => {
  const user = await User.findOne({
    where: { username: req.params.username },
  })

  try {
    let oldImageUrn: string = ''
    oldImageUrn = user.profileImageUrn || ''
    user.profileImageUrn = req.file.filename

    await user.save()

    // deletes old image
    if (oldImageUrn !== '') {
      fs.unlinkSync(`public/images/${oldImageUrn}`)
    }

    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

const router = Router()

router.get('/:username', user, getUserSubmissions)
router.post(
  '/:username/image',
  user,
  auth,
  upload.single('file'),
  uploadProfileImage
)

export default router
