import axios from 'axios'
import React, { useState } from 'react'

export const SignUp = () => {
  const [data, setData] = useState({})
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: ''
  })

  const handleInputChange = (field, event) => {
    setUser((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSignUp = async (event) => {
    event.preventDefault()
    try {
      if (!user.userName || !user.email || !user.password) return setData({ message: 'All fields are required' })

      const config = {
        method: 'post',
        url: `http://localhost:3001/user/register`,
        data: {
          userName: user.userName,
          email: user.email,
          password: user.password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await axios(config)
      console.log(response)
      if (response) {
        setData(response?.data)
      }

    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div>
      <form className='flex items-center justify-start flex-col'>
        <h1 className='text-2xl mb-5 font-semibold text-gray-900'>Sign Up for an account</h1>
        <div className="grid gap-6 mb-2 grid-cols-2">
          <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900">User name</label>
            <input
              type="text"
              id="first_name"
              onChange={(e) => handleInputChange('userName', e)}
              value={user.userName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ring-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="User Name" />
          </div>
          <div >
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => handleInputChange('email', e)}
              value={user.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ring-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="johnDoe@gmail.com"
            />
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
          onClick={(e) => handleSignUp(e)}
          className="text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-0 active:scale-90 font-medium rounded-lg text-base w-full sm:w-auto px-7 py-2 text-center"
        >
          Submit
        </button>
      </form>

      <div className='font-medium text-lg flex flex-col justify-between gap-3'>
        <div >
          Response Message:
          <p className='border min-h-10 rounded-md border-orange-600 p-2 font-normal '>{data.message}</p></div>
      </div>

    </div >
  )
}