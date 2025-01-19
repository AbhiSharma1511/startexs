import Link from 'next/link'
import React from 'react'

const BookServiceNowSection = () => {
  return (
    <div className='w-full mt-28 flex flex-col items-center bg-ed-400 mb-10
    '>
      <div className='mb-5 text-center'>
        <h2 className='mb-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold font-serif'>Your Next Big Move Start Here</h2>
        <p className='text-[#C7C7C7] break-words w-xl md:max-w-max text-md sm:text-lg md:text-xl lg:text-2xl'>Success is just a step away. Don't let your ideas sit idle—let us help you bring them to life with custom websites and apps that deliver results.</p>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <Link href={"/contact-us"} className='flex'>
        <img className='w-36 md:w-auto h-auto' src='/book_service.svg' alt=""/>
        </Link>
      </div>
    </div>
  )
}

export default BookServiceNowSection