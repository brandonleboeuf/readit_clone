import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Axios from 'axios'

import { useAuthDispatch, useAuthState } from '../context/auth'

import InputGroup from '../components/InputGroup'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<any>({})

  const dispatch = useAuthDispatch()
  const { authenticated } = useAuthState()

  const router = useRouter()
  if (authenticated) router.push('/')

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const res = await Axios.post('/auth/login', {
        username,
        password,
      })

      dispatch('LOGIN', res.data)

      // to go to home page
      // router.push('/');

      // to go back to previous page
      router.back()
    } catch (err) {
      console.log(err)
      setErrors(err.response.data)
    }
  }

  return (
    <div className="flex bg-white">
      <Head>
        <title>Login</title>
      </Head>
      <div
        className="h-screen bg-center bg-cover w-36"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/images/karsten-winegeart.jpg')` }}
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
            <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded hover:bg-blue-400">
              Log In
            </button>
          </form>
          <small>
            New to Readit?
            <Link href="/register">
              <a className="ml-1 font-medium text-blue-500 uppercase hover:text-blue-400">
                Sign Up
              </a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  )
}
