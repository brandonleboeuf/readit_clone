import Head from 'next/head'
import useSWR from 'swr'
import Image from 'next/image'
// import { GetServerSideProps } from 'next';

// types
import { Sub } from '../types'

import PostCard from '../components/PostCard'
import Link from 'next/link'

export default function Home() {
  // WITHOUT USING SWR
  // const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   Axios.get('/posts')
  //     .then((res) => setPosts(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  const { data: posts } = useSWR('/posts')
  const { data: topSubs } = useSWR('misc/top-subs')

  return (
    <>
      <Head>
        <title>Readit: home to the net</title>
      </Head>
      <div className="container flex pt-4">
        {/* POST FEED  */}
        <div className="w-160">
          {posts?.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
        {/* SIDEBAR */}
        <div className="ml-6 w-80">
          <div className="bg-white rounded">
            <div className="p-4 border-b-2">
              <p className="text-lg font-semibold text-center">
                Top Communities
              </p>
            </div>
            <div>
              {topSubs?.map((sub: Sub) => (
                <div
                  key={sub.name}
                  className="flex items-center px-4 py-2 text-xs border-b"
                >
                  <Link href={`/r/${sub.name}`}>
                    <a>
                      <Image
                        src={sub.imageUrl}
                        alt="Sub"
                        className="rounded-full cursor-pointer"
                        width={(6 * 16) / 4}
                        height={(6 * 16) / 4}
                      />
                    </a>
                  </Link>
                  <Link href={`/r/${sub.name}`}>
                    <a className="ml-2 font-bold hover:curser-pointer">
                      /r/{sub.name}
                    </a>
                  </Link>
                  <p className="ml-auto font-med">{sub.postCount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
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
