import { useState, useEffect } from 'react';
import Axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// import { GetServerSideProps } from 'next';

// types
import { Post } from '../types';

dayjs.extend(relativeTime);

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    Axios.get('/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pt-12">
      <Head>
        <title>Readit: home to the net</title>
      </Head>
      <div className="container flex flex-col items-center pt-4">
        <h1>Recent Posts</h1>
        {/* POST FEED  */}
        <div className="w-160">
          {posts.map((post) => (
            <div key={post.identifier} className="flex mb-4 bg-white rounded">
              {/* Vote section  */}
              <div className="w-10 text-center bg-gray-200 rounded-l">
                <p>V</p>
              </div>
              {/* Post data section  */}
              <div className="w-full p-2">
                <div className="flex items-center">
                  <Link href={`/r/${post.subName}`}>
                    <>
                      <img
                        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                        className="w-6 h-6 mr-1 rounded-full cursor-pointer"
                      />
                      <a className="text-xs font-bold cursor-pointer hover:underline">
                        /r/{post.subName}
                      </a>
                    </>
                  </Link>
                  <p className="text-xs text-gray-500">
                    <span className="mx-1">•</span>
                    Posted by
                    <Link href={`/u/${post.username}`}>
                      <a className="mx-1 hover:underline">/u/{post.username}</a>
                    </Link>
                    <Link href={post.url}>
                      <a className="mx-1 hover:underline">
                        {dayjs(post.createdAt).fromNow()}
                      </a>
                    </Link>
                  </p>
                </div>
                <Link href={post.url}>
                  <a className="my-1 text-lg font-medium">{post.title}</a>
                </Link>
                {post.body && <p className="my-1 text-sm">{post.body}</p>}

                <div className="flex">
                  <Link href={post.url}>
                    <a>
                      <div className="px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200">
                        <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                        <span className="font-bold">20 comments</span>
                      </div>
                    </a>
                  </Link>
                  <a>
                    <div className="px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200">
                      <i className="mr-1 fas fa-share fa-xs"></i>
                      <span className="font-bold">share</span>
                    </div>
                  </a>
                  <a>
                    <div className="px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200">
                      <i className="mr-1 fas fa-bookmark fa-xs"></i>
                      <span className="font-bold">save</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* SIDEBAR */}
      </div>
    </div>
  );
}

////////////////////////////////////////////
// To implement either of the bellow versions of getServerSideProps
// remove the useState and useEffect form the above component
// and add {data} as the argument

/* next.js default getServerSideProps */
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

/* or getServerSideProps using axios */
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const res = await Axios.get('/posts');

//     return { props: { posts: res.data } };
//   } catch (error) {
//     return { props: { error: 'Something went wrong' } };
//   }
// };
