import { ChangeEvent, createRef, useState, useEffect } from 'react'
import dayjs from 'dayjs'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Axios from 'axios'
import classNames from 'classnames'

import PostCard from '../../components/PostCard'
import { Post, Comment } from '../../types'

import { useAuthState } from '../../context/auth'

export default function user() {
  const router = useRouter()
  const username = router.query.username

  const [ownSub, setOwnSub] = useState(false)

  const { authenticated, user } = useAuthState()
  const fileInputRef = createRef<HTMLInputElement>()

  const { data, error, revalidate } = useSWR<any>(
    username ? `/users/${username}` : null
  )
  if (error) router.push('/')

  useEffect(() => {
    if (!data) return
    setOwnSub(
      authenticated &&
        (user.username === data.user.username || user.username === 'brandon')
    )
  }, [data])

  const openFileInput = () => {
    if (!ownSub) return
    fileInputRef.current.name = 'profileImageUrl'
    fileInputRef.current.click()
  }

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0]

    const formData = new FormData()
    formData.append('file', file)
    formData.append('type', fileInputRef.current.name)
    console.log(formData)

    try {
      await Axios.post(`/users/${data.user.username}/image`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      revalidate()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Head>
        <title>{data?.user.username}</title>
      </Head>
      {data && (
        <>
          <input
            type="file"
            hidden={true}
            ref={fileInputRef}
            onChange={uploadImage}
          />
          <div className="container flex pt-5">
            <div className="w-160">
              {data.submissions.map((submission: any) => {
                if (submission.type === 'Post') {
                  const post: Post = submission
                  return <PostCard key={post.identifier} post={post} />
                } else {
                  const comment: Comment = submission
                  return (
                    <div
                      key={comment.identifier}
                      className="flex my-4 bg-white rounded"
                    >
                      <div className="flex-shrink-0 w-10 py-4 text-center bg-gray-200 rounded-l">
                        <i className="text-gray-500 fas fa-comment-alt fa-xs"></i>
                      </div>
                      <div className="w-full p-2">
                        <p className="mb-2 text-xs text-gray-500">
                          {comment.username}
                          <span> commented on </span>
                          <Link href={comment.post.url}>
                            <a className="font-semibold curser-pointer hover:underline">
                              {comment.post.title}
                            </a>
                          </Link>
                          <span className="mx-1">•</span>
                          <Link href={`/r/${comment.post.subName}`}>
                            <a className="text-black curser-pointer hover:underline">
                              /r/{comment.post.subName}
                            </a>
                          </Link>
                        </p>
                        <hr />
                        <p>{comment.body}</p>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
            <div className="ml-6 w-80">
              <div className="bg-white rounded">
                <div className="items-center p-3 rounded-t">
                  <img
                    src={data.user.profileImageUrl}
                    alt="user profile"
                    className={classNames('mx-auto rounded', {
                      'cursor-pointer': ownSub,
                    })}
                    onClick={() => openFileInput()}
                  />
                </div>
                <div className="p-3 text-center">
                  <h1 className="mb-3 text-xl">{data.user.username}</h1>
                  <hr />
                  <p className="mt-3">
                    Joined {dayjs(data.user.createdAt).format('MMM YYYY')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
