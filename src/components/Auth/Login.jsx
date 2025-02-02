import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("email is",email)
        console.log("password is",password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className= 'flex h-screen w-screen items-center justify-center'>
      <div className=' rounded-xl border-2 border-emerald-600 p-20'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} 
         className='flex flex-col items-center justify-center'>
            <input
            value={email }
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
             required className='border-2 outline-none bg-transparent placeholder:text-gray-400 border-emerald-600 text-xl py-3 px-5 rounded-full' type="email" placeholder="enter your email"/>
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             required className='border-2 outline-none bg-transparent placeholder:text-gray-400 mt-3 border-emerald-600 text-xl py-3 px-5 rounded-full' type="password" placeholder="enter your password" />
            <button className='mt-5 border-none text-white outline-none placeholder:text-white bg-emerald-600 text-xl py-3 px-5 rounded-full'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
