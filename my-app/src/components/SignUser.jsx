import React, { useState } from 'react'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import Modal from 'react-modal';

export const SignUser = () => {
  const [modal, setModal] = useState(false)
  const [active, setActive] = useState('')

  const RenderModal = () => {
    if (active === 'signIn') {
      return (
        <Modal
          isOpen={modal}
          onRequestClose={() => setModal(false)}
          className='flex flex-wrap justify-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 absolute bg-white p-10 rounded-xl border border-orange-600 min-h-[50vh] max-w-xl overflow-hidden'
          contentLabel={"Sign in to your account"}
        >
          <SignIn />
        </Modal>
      )
    }
    return (
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        contentLabel="Sign Up for a new account"
        className='flex flex-wrap justify-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 absolute bg-white p-10 rounded-xl border border-orange-600 min-h-[50vh] '
      >
        <SignUp />
      </Modal>
    )
  }


  const handleAction = (action) => {
    setActive(action)
    setModal(true)
  }


  return (
    <div className='flex flex-col gap-20 justify-center items-center h-screen w-full bg-orange-100'>
      <RenderModal />
      <h1 className='text-4xl font-semibold text-gray-900 underline decoration-orange-600 decoration-dashed underline-offset-4'>FutureNostics Assessment </h1>
      <div className='flex py-20 gap-10 text-lg h-1/2 bg-orange-200 w-1/2 items-end justify-center rounded-xl border border-orange-600'>
        <div className='flex flex-col justify-between h-full pt-4'>
          <h1 className='text-2xl max-w-[16rem]  font-semibold text-orange-600'>Sign in to existing account</h1>
          <button onClick={() => handleAction('signIn')} className='py-2 px-4 border rounded-lg bg-gray-50 font-medium hover:bg-orange-600 hover:text-white active:scale-90 shadow-lg '>Sign in</button>
        </div>
        <div className='w-[2px] bg-orange-500 h-full ' />
        <div className='flex flex-col justify-between h-full pt-4'>
          <h1 className='text-2xl max-w-[16rem]  font-semibold text-orange-600'>Sign up for a new account</h1>
          <button onClick={() => handleAction('signUp')} className='py-2 px-4 border rounded-lg bg-gray-50 font-medium hover:bg-orange-600 hover:text-white active:scale-90 shadow-lg '>Sign up</button>
        </div>
      </div>
    </div>
  )
}
