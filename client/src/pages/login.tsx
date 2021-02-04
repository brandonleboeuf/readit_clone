import { FormEvent, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Axios from 'axios';

import InputGroup from '../components/InputGroup';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const router = useRouter();

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await Axios.post(
        '/auth/login',
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      router.push('/');
    } catch (err) {
      console.log(err);
      setErrors(err.response.data);
    }
  };

  return (
    <div className="flex">
      <Head>
        <title>Login</title>
      </Head>
      <div
        className="h-screen bg-center bg-cover w-36"
        style={{ backgroundImage: "url('/images/karsten-winegeart.jpg')" }}
      ></div>
      <div className="flex flex-col justify-center pl-6">
        <div className="w-72">
          <h1 className="mb-2 text-lg font-medium">Log In</h1>
          <p className="mb-10 text-xs">
            By continuing, you agree to our User Agreement and Privacy Policy.
          </p>
          <form onSubmit={submitForm}>
            <InputGroup
              className="mb-2"
              type="text"
              placeholder="Username"
              value={username}
              error={errors.username}
              setValue={setUsername}
            />
            <InputGroup
              className="mb-4"
              type="password"
              placeholder="password"
              value={password}
              error={errors.password}
              setValue={setPassword}
            />
            <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded">
              Log In
            </button>
          </form>
          <small>
            New to Readit?
            <Link href="/register">
              <a
                href="Sign Up!"
                className="ml-1 font-medium text-blue-500 uppercase"
              >
                Log In
              </a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
