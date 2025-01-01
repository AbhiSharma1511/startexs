// import React from 'react'
// // import "../../../../public/backvideo.mp4"
// import "../app/globals.css"
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <div className='bg-[#1E2A47] bg-opacity-50 rounded-t-lg'>
//       <div className='flex flex-col sm:flex-row bg-opacity-50 md:px-32 py-20 items-center sm:justify-around'>

//         <div className='flex gap-4 md:gap-20 item-center flex-col md:flex-row items-center'>
//           {/* Footer logo start here */}
//           <div className="relative group w-48 h-48 md:w-52 md:h-52 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1 hover:shadow-2xl hover:scale-110 transform transition duration-500 ease-out">
//             {/* Rotating Glow Effect */}
//             <div className="absolute inset-0 animate-spin-slow rounded-full border-[6px] border-transparent border-t-white border-b-white"></div>

//             {/* Inner Container with Logo */}
//             <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
//               <img
//                 className="w-20 h-20 group-hover:scale-110 transition-transform duration-500 ease-in-out"
//                 src="/startexs_logo.svg"
//                 alt="Startexs Logo"
//               />
//             </div>
//           </div>
//           {/* Footer logo ends here */}

//           <div className='leading-normal md:mt-5 lg:mt-0 flex flex-col gap-2'>
//             <h2 className='font-semibold text-2xl md:text-3xl uppercase text-center md:text-start'>Subscribe to <br /> our letter</h2>
//             <div className='px-2 md:px-5 rounded-lg bg-white py-1 md:py-2 flex justify-between items-center gap-2'>
//               {/* <h2 className='md:hidden text-black text-sm sm:text-md'>Let's Go...</h2> */}
//               <h2 className='text-black text-sm sm:text-md'>Your Best Email Address</h2>
//               <img className='bg-[#1E2A47] px-1 py-2 rounded-lg' src='arrow.svg' alt='logo' />
//             </div>
//           </div>
//         </div>
//         {/* Logo for footer */}

//         <div className='flex flex-row gap-10 md:gap-28 mt-10'>
//           <div className='flex flex-col gap-2 max-w-max items-center text-lg sm:text-xl leading-tight'>
//             <Link href={"#"}>Home</Link>
//             <Link href={"#"}>About Us</Link>
//             <Link href={"#"}>Contact Us</Link>
//             <Link href={"#"}>Service</Link>
//             <Link href={"#"}>Work</Link>
//           </div>
//           <div className='flex flex-col gap-2 text-lg leading-tight'>
//             <h2>Linkdin</h2>
//             <h2>X</h2>
//             <h2>Instagram</h2>
//           </div>
//         </div>

//       </div>
//       <hr className='bg-white mb-2' />
//       <div className='text-white text-center flex justify-evenly pb-2'>
//         <h2>Privacy Policy</h2>
//         <h2>Terms of Service</h2>
//         <h2>@copyright startexs 2024</h2>
//       </div>
//     </div>

//   )
// }

// export default Footer;
import React from "react";
import "../app/globals.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gradient-to-tr from-[#1E2A47] via-[#23395B] to-[#1E2A47] text-white rounded-t-lg">
      <div className="flex flex-col sm:flex-row px-8 md:px-20 lg:px-32 py-10 items-center sm:justify-evenly md:gap-20 gap-5">
        {/* Logo and Subscription Section */}
        <div className="flex gap-8 lg:gap-16 flex-col md:flex-row items-center">
          {/* Footer Logo */}
          <div className="relative group w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1 hover:shadow-2xl hover:scale-110 transform transition duration-500 ease-out">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-[6px] border-transparent border-t-white border-b-white"></div>
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <img
                className="w-16 h-16 md:w-20 md:h-20 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                src="/startexs_logo.svg"
                alt="Startexs Logo"
              />
            </div>
          </div>
          {/* Subscription Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="font-bold text-xl md:text-2xl uppercase text-center md:text-start">
              Subscribe to Our Newsletter
            </h2>
            <div className="w-full flex items-center bg-white text-black px-4 py-2 rounded-lg shadow-md focus-within:ring-2 focus-within:ring-blue-500">
              <input
                type="email"
                placeholder="Your Best Email Address"
                className="w-full bg-transparent outline-none text-sm md:text-base"
                required
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="mt-10 sm:mt-0 flex flex-row gap-8 sm:gap-16">
          {/* Page Links */}
          <div className="flex flex-col items-center sm:items-start gap-2 text-lg md:text-xl">
            <Link href="#" className="hover:underline">
              Home
            </Link>
            <Link href="#" className="hover:underline">
              About Us
            </Link>
            <Link href="#" className="hover:underline">
              Contact Us
            </Link>
            <Link href="#" className="hover:underline">
              Services
            </Link>
            <Link href="#" className="hover:underline">
              Work
            </Link>
          </div>
          {/* Social Links */}
          <div className="flex flex-col items-center sm:items-start gap-2 text-lg md:text-xl">
            <Link href="#" className="hover:underline">
              LinkedIn
            </Link>
            <Link href="#" className="hover:underline">
              X
            </Link>
            <Link href="#" className="hover:underline">
              Instagram
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-600 mb-4" />
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 md:px-20 lg:px-32 pb-4 text-sm md:text-base">
        <div className="flex flex-wrap gap-4">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
        </div>
        <p className="mt-4 sm:mt-0 text-center">© Startexs 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
