import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Axios from 'axios'

import { useAuthState, useAuthDispatch } from '../context/auth'

import { Sub } from '../types'

import RedditLogo from '../images/reddit.svg'

const Navbar = () => {
  const [name, setName] = useState('')
  const [subs, setSubs] = useState<Sub[]>([])
  const [timer, setTimer] = useState(null)

  const { authenticated, loading, user } = useAuthState()
  const dispatch = useAuthDispatch()

  const router = useRouter()

  const logout = () => {
    Axios.get('/auth/logout')
      .then(() => {
        dispatch('LOGOUT')
        window.location.reload()
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (name.trim() === '') {
      setSubs([])
      return
    }

    searchSubs()
  }, [name])

  const searchSubs = async () => {
    clearTimeout(timer)
    setTimer(
      setTimeout(async () => {
        try {
          const { data } = await Axios.get(`/subs/search/${name}`)
          setSubs(data)
        } catch (err) {
          console.log(err)
        }
      }, 250)
    )
  }

  const goToSub = (subName: string) => {
    router.push(`/r/${subName}`)
    setName('')
  }

  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 px-5 bg-white">
      {/* Logo and title */}
      <div className="flex items-center">
        <Link href="/">
          <a>
            <RedditLogo className="w-8 h-8 mr-2" />
          </a>
        </Link>
        <span className="text-2xl font-semibold">
          <Link href="/">readit</Link>
        </span>
      </div>
      {/* Search Input  */}
      <div className="relative flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white">
        <i className="pl-4 pr-3 text-gray-500 fas fa-search"></i>
        <input
          type="text"
          className="py-1 pr-3 bg-transparent rounded w-160 focus:outline-none"
          placeholder="Search"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTimeout(() => setName(''), 250)}
        />
        {name && (
          <div
            className="absolute left-0 right-0 bg-white"
            style={{ top: '100%' }}
          >
            {subs?.map((sub) => (
              <div
                className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-200"
                key={sub.bannerUrl}
                onClick={() => goToSub(sub.name)}
              >
                <Image
                  src={sub.imageUrl}
                  alt="Sub"
                  className="rounded-full"
                  height={(8 * 16) / 4}
                  width={(8 * 16) / 4}
                />

                <div className="ml-4 text-sm">
                  <p className="font-medium">{sub.name}</p>
                  <p className="text-gray-600">{sub.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Auth buttons  */}
      <div className="flex">
        {!loading &&
          (authenticated ? (
            // Show logout button
            <>
              <p className="pt-2 pr-2 text-xs font-semibold">{user.username}</p>
              <button
                className="w-32 py-1 mr-5 leading-5 hollow blue button"
                onClick={logout}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <a className="w-32 py-1 mr-5 leading-5 hollow blue button">
                  log in
                </a>
              </Link>
              <Link href="/register">
                <a className="w-32 py-1 leading-5 blue button">register</a>
              </Link>
            </>
          ))}
      </div>
    </div>
  )
}

export default Navbar
