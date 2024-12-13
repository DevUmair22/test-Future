import axios from 'axios'
import React, { useState } from 'react'

export const SignIn = () => {
  const [data, setData] = useState({})
  const [user, setUser] = useState({
    email: '',
    password: ''
  })


  const handleInputChange = (field, event) => {
    setUser((prev) => ({ ...prev, [field]: event.target.value }))
  }


  const handleSignIn = async (event) => {
    event.preventDefault()
    try {
      if (!user.email || !user.password) return setData({ message: 'All fields are required' })
      const config = {
        method: 'post',
        url: `http://localhost:3001/user/login`,
        data: {
          email: user.email,
          password: user.password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await axios(config)
      if (response) {
        setData(response?.data)
      }
    } catch (error) {
      console.error(error)
    }

  }


  return (
    <div className='flex flex-wrap flex-col w-full'>
      <form className='flex items-center justify-start flex-col w-full'>
        <h1 className='text-2xl mb-5 font-semibold text-gray-900'>Sign in to your account</h1>
        <div className="grid gap-6 mb-2 grid-cols-2">
          <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
            <input
              type="text"
              id="email"
              onChange={(e) => handleInputChange('email', e)}
              value={user.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ring-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="johnDoe@gmail.com" />
          </div>

          <div className="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => handleInputChange('password', e)}
              value={user.password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ring-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••••••"
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={(e) => handleSignIn(e)}
          className="text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-0 active:scale-90 font-medium rounded-lg text-base w-full sm:w-auto px-7 py-2 text-center"
        >
          Submit
        </button>
      </form>

      <div className='font-medium text-lg flex flex-col justify-between gap-3 flex-wrap w-full'>
        <div className='flex flex-col'>
          Response Message:
          <p className='border min-h-10 rounded-md border-orange-600 p-2 font-normal w-full max-w-lg'>{data?.message}</p>
        </div>
        <div className='flex flex-col'>
          Token:
          <p className="border min-h-24 h-full rounded-md border-orange-600 p-2 font-normal break-words w-full max-w-lg">
            {data?.accessToken}
          </p>
        </div>
      </div>
    </div >
  )
}

