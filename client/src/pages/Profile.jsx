/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux';
 function Profile() {
  const {currentUser}= useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'></h1>

      <form className='flex flex-col gap-4 '>
           <img src={currentUser.avatar} alt='profile' className='rounded-full h-24 w-24 object-cover self-center mt-2'/>
           <input type='text' placeholder='username'  id='username'  className='border p-3 rounded-lg'></input>
           <input type='text' placeholder='email' id='email' className='border p-3 rounded-lg'></input>
           <input type='text' placeholder='password' id='password' className='border p-3 rounded-lg'></input>
           <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:80'>update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <button className='text-white cursor-pointer bg-red-600 p-1 my-3 rounded-md font-semibold hover:opacity-80 disabled:80'>Delete Account</button>
        <button className='text-white cursor-pointer bg-blue-600	 p-1 my-3 rounded-md font-semibold hover:opacity-80 disabled:70'>Sign Out</button>
      </div>
    </div>
  )
}
export default Profile
