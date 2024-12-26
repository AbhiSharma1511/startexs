import React from 'react'
// import "../../../../public/backvideo.mp4"
import "../app/globals.css"
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-[#1E2A47] bg-opacity-50 rounded-t-lg'>
      <div className='flex flex-col sm:flex-row bg-opacity-50 md:px-32 py-20 items-center sm:justify-around'>

        <div className='flex gap-4 md:gap-20 item-center flex-col md:flex-row items-center'>
          {/* Footer logo start here */}
          <div className="relative group w-48 h-48 md:w-52 md:h-52 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1 hover:shadow-2xl hover:scale-110 transform transition duration-500 ease-out">
            {/* Rotating Glow Effect */}
            <div className="absolute inset-0 animate-spin-slow rounded-full border-[6px] border-transparent border-t-white border-b-white"></div>

            {/* Inner Container with Logo */}
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <img
                className="w-20 h-20 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                src="/startexs_logo.svg"
                alt="Startexs Logo"
              />
            </div>
          </div>
          {/* Footer logo ends here */}

          <div className='leading-normal md:mt-5 lg:mt-0 flex flex-col gap-2'>
            <h2 className='font-semibold text-2xl md:text-3xl uppercase text-center md:text-start'>Subscribe to <br /> our letter</h2>
            <div className='px-2 md:px-5 rounded-lg bg-white py-1 md:py-2 flex justify-between items-center gap-2'>
              {/* <h2 className='md:hidden text-black text-sm sm:text-md'>Let's Go...</h2> */}
              <h2 className='text-black text-sm sm:text-md'>Your Best Email Address</h2>
              <img className='bg-[#1E2A47] px-1 py-2 rounded-lg' src='arrow.svg' alt='logo' />
            </div>
          </div>
        </div>
        {/* Logo for footer */}

        <div className='flex flex-row gap-10 md:gap-28 mt-10'>
          <div className='flex flex-col gap-2 max-w-max items-center text-lg sm:text-xl leading-tight'>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Service</Link>
            <Link href={"#"}>Work</Link>
          </div>
          <div className='flex flex-col gap-2 text-lg leading-tight'>
            <h2>Linkdin</h2>
            <h2>X</h2>
            <h2>Instagram</h2>
          </div>
        </div>

      </div>
      <hr className='bg-white mb-2' />
      <div className='text-white text-center flex justify-evenly pb-2'>
        <h2>Privacy Policy</h2>
        <h2>Terms of Service</h2>
        <h2>@copyright startexs 2024</h2>
      </div>
    </div>

  )
}

export default Footer;