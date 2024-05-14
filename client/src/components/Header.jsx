/* eslint-disable no-unused-vars */
import React from 'react'
import {FaSearch} from 'react-icons/fa'
import{Link} from 'react-router-dom'
import { useSelector } from 'react-redux';








export default function Header() {
  const {currentUser} = useSelector(state =>state.user)
  return (
    <header className='bg-slate-300 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>

      <Link to='/'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
         <span className='text-slate-1000'>Ember</span>
         <span className='text-slate-500'>Edge</span>
      </h1>
      </Link>
      
      <form className='bg-slate-200 p-3 rounded-lg flex items-center' >
        <input type='text' placeholder='Search...' className='9bg-transparent outline-none w-24 sm:w-64'></input>
        <FaSearch className='text-slate-700'></FaSearch>
      </form>

      <ul className='flex gap-4'>
      <Link to='/'>
      <li className='hidden sm:inline text-slate-900 hover:underline'>Home</li>
      </Link>
      <Link to='/about'>
      <li  className='hidden sm:inline text-slate-900 hover:underline'>About</li>
      </Link>
        
      <Link to='/profile'>

      {currentUser ? (
        <img  className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='Profile'/>)
        : (
          <li  className='hidden sm:inline text-slate-900 hover:underline'>Sign in</li>
          )}
      
      </Link>

      </ul>

      </div>

    </header>
  )
}
