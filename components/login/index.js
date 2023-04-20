import Link from 'next/link'
import { useState, useCallback } from 'react'
import { API_URL } from '../../lib/constants'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Logo from '@/data/logo'

export default function Login() {
  const dispatch = useDispatch()
  const LoginHandler = async (mail, password, router, setStatus) => {
    const body = {
      mail: mail,
      password: password,
    }

    const endpoint = API_URL + '/auth/login'

    const options = {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
    const response = await fetch(endpoint, options).then((response) => response.json())
    const token = response.token
    const user = response.data

    if (token) {
      setCookie('GradPanelJWT', token)
      router.push(`/projects`)
      dispatch({ type: 'SET_USER', payload: user })
      setStatus('Success!')
    } else {
      setStatus('Unknown Error!')
    }
  }
  const router = useRouter()

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const [status, setStatus] = useState('')
  return (
    <section className="">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-40">
          <Logo />
        </div>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                value={mail}
                type="mail"
                name="mail"
                id="mail"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="name@itu.edu.tr"
                required=""
                onChange={(event) => {
                  setMail(event.target.value)
                }}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                required=""
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span>{status}</span>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              onClick={() => {
                LoginHandler(mail, password, router, setStatus)
              }}
              className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              data-testid="submit"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{' '}
              <Link
                href="/register"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
