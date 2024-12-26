import React from 'react'
// import "../../../../public/backvideo.mp4"
import "../app/globals.css"
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row bg-[#1E2A47] bg-opacity-80 md:px-32 py-20 items-center sm:justify-around'>
        <div className='leading-normal'>
            <h2 className='font-semibold text-5xl md:text-6xl uppercase'>Subscribe to <br/> our letter</h2>
            <div className='px-5 rounded-lg bg-white py-2 flex justify-between items-center'>
              <h2 className='text-black  text-md sm:text-xl'>Your Best Email Address</h2>
              <img className='bg-[#1E2A47] px-1 py-2 rounded-lg' src='arrow.svg' alt='logo'/>
            </div>
        </div>
        
        <div className='flex flex-col gap-5 max-w-max items-center text-lg sm:text-2xl'>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Service</Link>
            <Link href={"#"}>Work</Link>
        </div>
      </div>
      <div className='text-white text-center flex justi'>
        <hr className='bg-slate-500'/>
        <h2>Privacy Policy      Terms of Service</h2>
        <h2>@copyright startexs 2024</h2>
      </div>
    </div>
    
  )
}

export default Footer;