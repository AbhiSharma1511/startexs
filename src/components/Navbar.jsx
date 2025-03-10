'use client'
import React from 'react'
import "../app/globals.css"
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-around items-center bg-black py-4'>
        {/* <img className='text-white' alt="Logo"></img> */}
        <div
          className="p-1 bg-gradient-to-r from-red-500 via-green-700 to-blue-600 animate-rotate-border bg-[length:200%_200%] rounded-md">
          {/* Inner text container */}
          <div className="bg-black text-center rounded-md px-1">
            <Link href={'/'} className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-blue-600">
              <img className='w-full' src='/startexs_logo.svg' alt='logo' />
            </Link>
          </div>
        </div>
        <div className='flex px-3 py-1 text-white'>
          <Link href={"/"} className='mx-5'>Home</Link>
          <Link href='/about-us' className='mx-5'>About Us</Link>
          <Link href="/#work" className='mx-5'>Work</Link>
          <Link href='/#service' className='mx-5'>Service</Link>
        </div>
        <div>
          <ThemeToggle/>
          <div className='bg-blue-600 rounded-lg'>
            <h3 className='px-3 py-1 text-white'><Link href='/contact-us'>Contact Us</Link></h3>
          </div>
        </div>
      </div>
      <hr className='w-full' />
    </div>

  )
}

export default Navbar;