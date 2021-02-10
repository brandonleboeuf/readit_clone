import { useState, useEffect } from 'react';
import Axios from 'axios';
import Head from 'next/head';
import useSWR from 'swr';
// import { GetServerSideProps } from 'next';

// types
import { Post } from '../types';

import PostCard from '../components/PostCard';

export default function Home() {
  const { data: posts } = useSWR('/posts');
  // WITHOUT USING SWR
  // const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   Axios.get('/posts')
  //     .then((res) => setPosts(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Head>
        <title>Readit: home to the net</title>
      </Head>
      <div className="container flex flex-col items-center pt-4">
        {/* POST FEED  */}
        <div className="w-160">
          {posts?.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
        {/* SIDEBAR */}
      </div>
    </>
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
