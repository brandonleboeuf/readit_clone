import { FormEvent, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Axios from 'axios';

import InputGroup from '../components/InputGroup';
import { useAuthState } from '../context/auth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const { authenticated } = useAuthState();

  const router = useRouter();
  if (authenticated) router.push('/');

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    // If the "agree to email" box is not checked, blocks user from registering
    if (!agreement) {
      setErrors({
        ...errors,
        agreement: 'You must agree to receiving our email!!!!',
      });

      return;
    }

    try {
      await Axios.post('/auth/register', {
        email,
        password,
        username,
      });

      router.push('/login');
    } catch (err) {
      console.log(err);
      setErrors(err.response.data);
    }
  };

  return (
    <div className="flex bg-white">
      <Head>
        <title>Register</title>
      </Head>
      <div
        className="h-screen bg-center bg-cover w-36"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/images/karsten-winegeart.jpg')` }}
      ></div>
      <div className="flex flex-col justify-center pl-6">
        <div className="w-72">
          <h1 className="mb-2 text-lg font-medium">Sign Up</h1>
          <p className="mb-10 text-xs">
            By continuing, you agree to our User Agreement and Privacy Policy.
          </p>
          <form onSubmit={submitForm}>
            <div className="mb-6">
              <input
                type="checkbox"
                className="mr-1 cursor-pointer"
                id="agreement"
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
              />
              <label htmlFor="agreement" className="text-xs cursor-pointer">
                I agree to get emails about cool stuff on Readit
              </label>
              <small className="block font-medium text-red-600">
                {errors.agreement}
              </small>
            </div>
            <InputGroup
              className="mb-2"
              type="email"
              placeholder="Email"
              value={email}
              error={errors.email}
              setValue={setEmail}
            />
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
            <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded hover:bg-blue-400">
              Sign Up
            </button>
          </form>
          <small>
            Already a Readiter?
            <Link href="/login">
              <a className="ml-1 font-medium text-blue-500 uppercase hover:text-blue-400">
                Log In
              </a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
