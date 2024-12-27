import React from 'react'

const StartexsLogo = () => {
  return (
    <div className="relative group w-48 h-48 md:w-64 md:h-64 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1 hover:shadow-2xl hover:scale-110 transform transition duration-500 ease-out">
    {/* Rotating Glow Effect */}
    <div className="absolute inset-0 animate-spin-slow rounded-full border-[6px] border-transparent border-t-black border-b-black"></div>
    {/* Inner Container with Logo */}
    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
      <img
        className="w-36 h-36 group-hover:scale-130 transition-transform duration-500 ease-in-out"
        src="/startexs_logo.svg"
        alt="Startexs Logo"
      />
    </div>
  </div>
  )
}

export default StartexsLogo;