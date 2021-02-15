import Link from 'next/link'
import dayjs from 'dayjs'
import classNames from 'classnames'
import relativeTime from 'dayjs/plugin/relativeTime'
import Axios from 'axios'

import { Post } from '../types'
import ActionButton from './ActionButton'

dayjs.extend(relativeTime)
interface PostCardProps {
  post: Post
}

export default function PostCard({
  post: {
    identifier,
    slug,
    title,
    body,
    subName,
    createdAt,
    voteScore,
    userVote,
    commentCount,
    url,
    username,
    sub,
  },
}: PostCardProps) {
  const vote = async (value: number) => {
    try {
      const res = await Axios.post('/misc/vote', {
        identifier,
        slug,
        value,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div key={identifier} className="flex mb-4 bg-white rounded">
      {/* Vote section  */}
      <div className="w-10 py-3 text-center bg-gray-200 rounded-l">
        {/* Upvote */}
        <div
          className="w-6 mx-auto text-gray-400 rounded curser-pointer hover:bg-gray-300 hover:text-red-500"
          onClick={() => vote(1)}
        >
          <i
            className={classNames('icon-arrow-up', {
              'text-red-500': userVote === 1,
            })}
          ></i>
        </div>
        <p className="text-xs font-bold">{voteScore}</p>
        {/* Downvote */}
        <div
          className="w-6 mx-auto text-gray-400 rounded curser-pointer hover:bg-gray-300 hover:text-blue-600"
          onClick={() => vote(-1)}
        >
          <i
            className={classNames('icon-arrow-down', {
              'text-blue-600': userVote === -1,
            })}
          ></i>
        </div>
      </div>
      {/* Post data section  */}
      <div className="w-full p-2">
        <div className="flex items-center">
          {sub ? (
            <Link href={`/r/${subName}`}>
              <img
                src={sub.imageUrl}
                // src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                className="w-6 h-6 mr-1 rounded-full cursor-pointer"
              />
            </Link>
          ) : null}
          <Link href={`/r/${subName}`}>
            <a className="text-xs font-bold cursor-pointer hover:underline">
              /r/{subName}
            </a>
          </Link>
          <p className="text-xs text-gray-500">
            <span className="mx-1">•</span>
            Posted by
            <Link href={`/u/${username}`}>
              <a className="mx-1 hover:underline">/u/{username}</a>
            </Link>
            <Link href={url}>
              <a className="mx-1 hover:underline">
                {dayjs(createdAt).fromNow()}
              </a>
            </Link>
          </p>
        </div>
        <Link href={url}>
          <a className="my-1 text-lg font-medium">{title}</a>
        </Link>
        {body && (
          <p
            className="my-1 overflow-hidden text-sm"
            style={{ maxHeight: '90px' }}
          >
            {body}
          </p>
        )}

        <div className="flex">
          <Link href={url}>
            <a>
              <ActionButton>
                <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                <span className="font-bold">{commentCount} comments</span>
              </ActionButton>
            </a>
          </Link>
          <ActionButton>
            <i className="mr-1 fas fa-share fa-xs"></i>
            <span className="font-bold">share</span>
          </ActionButton>
          <ActionButton>
            <i className="mr-1 fas fa-bookmark fa-xs"></i>
            <span className="font-bold">save</span>
          </ActionButton>
        </div>
      </div>
    </div>
  )
}
