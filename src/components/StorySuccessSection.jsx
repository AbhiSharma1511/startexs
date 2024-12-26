import Link from 'next/link'
import React from 'react'

const StorySuccessSection = () => {
  return (
    <div className='w-full mt-16 md:mt-28 flex flex-col items-center bg-ed-400
    '>
      <div className='mb-2 md:mb-5'>
        <h2 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold font-serif'>Our Story, Your Success ✌️</h2>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <div className=' mx-2 md:mx-10 md:w-[50%] gap-2 flex flex-col' >
          <p className='mt-10 text-center md:text-start text-sm md:text-lg'>At <span className='font-bold text-blue-500'>Startexs</span>, we are a passionate team of <span className='font-serif text-lg text-teal-400'>innovators, creators, and problem-solvers</span> dedicated to transforming ideas into reality. With a commitment to excellence, we craft unique and tailored solutions that empower businesses and individuals to reach their full potential.
          </p>
          <p className='text-center md:text-start text-sm md:text-lg'>
            <span className='text-xl text-blue-500'>Our</span> approach blends cutting-edge technology with a deep understanding of our clients&apos;s needs, allowing us to deliver results that are not only effective but also meaningful. From the first spark of an idea to the final product, we&apos;re with you every step of the way, ensuring that your vision is brought to life with precision and care.
          </p>
          <p className='hidden md:block'>
            Whether you&apos;re a startup or an established enterprise, Startexs is your trusted partner in navigating the complexities of today&apos;s digital world. We take pride in our ability to think outside the box, deliver results on time, and exceed expectations.
            <Link href='/contact-us' className='font-bold text-blue-500'>Join Us</Link> on this journey of innovation and growth-together, we can make your vision a reality.</p>
          <div className='flex justify-center sm:justify-start'>
            <div className='flex border-2 border-gray-400 px-4 py-1 rounded-xl gap-2 max-w-max mt-4 bg-blue-400 bg-opacity-55'>
              <Link href={"/"} className=''>Read More</Link>
              <img className='w-5' src='arrow.svg' alt='' />
            </div>
          </div>

        </div>
        <div className='items-center text-center border-gray-400 border-2 rounded-full p-8 bg-gray-400 bg-opacity-10 mt-10 md:m-20' >
          <img className='w-24 h-24 md:w-64 md:h-64' src='/startexs_logo.svg' alt='StartExs' />
        </div>
      </div>
    </div>
  )
}

export default StorySuccessSection