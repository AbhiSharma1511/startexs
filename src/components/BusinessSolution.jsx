import React from 'react'

const BusinessSection = () => {
  return (
    <div className='w-full mt-28 flex flex-col items-center'>
      <div className='mb-10'>
        <h2 className='text-3xl font-semibold font-serif'>Solution Build For Your Business 🫡</h2>
      </div>
      <div className='flex flex-col w-[70%] md:w-full md:flex-row gap-4 md:gap-1  justify-center md:justify-around'>
        <div className='flex flex-col items-center text-center border-gray-400 border-2 h-min rounded-xl p-3 bg-gray-400' >
          <img className='h-48 w-64 rounded-lg' src='/ui_ux_photo.jfif' alt='UI/IX'/>
          <h2 className='pt-2'>UI/UX Design</h2>
        </div>
        <div className='flex flex-col items-center text-center border-gray-400 border-2 h-min rounded-xl p-3 bg-gray-400' >
          <img className='h-48 w-64 rounded-lg' src='/web_photo.jfif' alt='UI/IX'/>
          <h2 className='pt-2'>Website design and development</h2>
        </div>
        <div className='flex flex-col items-center text-center border-gray-400 border-2 h-min rounded-xl p-3 bg-gray-400' >
          <img className='h-48 w-64 rounded-lg' src='/android_photo.webp' alt='UI/IX'/>
          <h2 className='pt-2'>Mobile App design and development</h2>
        </div>
      </div>
    </div>
  )
}

export default BusinessSection;