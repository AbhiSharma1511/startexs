import Link from 'next/link'
import React from 'react'

const StorySuccessSection = () => {
    return (
        <div className='w-full mt-28 flex flex-col items-center'>
          <div className='mb-10'>
            <h2 className='text-3xl font-semibold font-serif'>Our Story, Your Success</h2>
          </div>
          <div className='flex flex-col sm:flex-row justify-around mt-10'>
            <div className='w-[50%]' >
              <p className='pt-2 text-xl'>Every great brand begins with a vision, and StartExs is no different. As a young, ambitious team, we're committed to helping businesses stand out with beautifully crafted websites and mobile apps. Our goal? To deliver more than just services—we'asre here to create meaningful experiences for your customers.</p>
            </div>
            <div className='items-center text-center border-gray-400 border-2 h-min rounded-full p-10 bg-gray-400 bg-opacity-10' >
              <img className='w-36 h-36' src='/startexs_logo.svg' alt='StartExs'/>
            </div>
          </div>
          <div>
            <Link href={"/aboutus"}>Read More</Link>
          </div>
        </div>
      )
}

export default StorySuccessSection