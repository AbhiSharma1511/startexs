import { motion } from 'framer-motion'
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
          <p className='text-center md:text-start text-sm md:text-lg'>At <span className='font-bold text-blue-500'>Startexs</span>, our story is built on a foundation of <span className='font-serif text-lg text-teal-400'>passion, innovation, and an unwavering commitment to your success.</span> What began as a small team of dreamers has grown into a dynamic force dedicated to crafting exceptional digital solutions. Each project we undertake is driven by a shared purpose: to empower businesses like yours to thrive in an ever-changing digital landscape.
          </p>
          <p className='text-center md:text-start text-sm md:text-lg'>
            <span className='text-xl text-blue-500'>We</span> believe that every partnership is a shared journey. By blending your vision with our expertise, we create solutions that go beyond functionality—solutions that inspire, engage, and deliver real results. Whether it&apos;s a sleek website, a feature-rich mobile app, or a groundbreaking digital strategy, your success is the driving force behind everything we do.
          </p>
          <p className='hidden lg:block text-lg'>
            Whether you&apos;re a startup or an established enterprise, Startexs is your trusted partner in navigating the complexities of today&apos;s digital world. We take pride in our ability to think outside the box, deliver results on time, and exceed expectations.
            <Link href='/contact-us' className='font-bold text-blue-500'>Join Us</Link> on this journey of innovation and growth-together, we can make your vision a reality.</p>
          <div className='flex justify-center sm:justify-start'>
            <div className='flex border-2 border-gray-400 px-4 py-1 rounded-xl gap-2 max-w-max mt-4 bg-blue-400 bg-opacity-55'>
              <Link href={"/"} className=''>Read More</Link>
              <img className='w-5 ' src='arrow.svg' alt='' />
            </div>
          </div>

        </div>
        <div className='items-center text-center border-gray-400 border-2 rounded-full p-8 bg-gray-400 bg-opacity-10 mt-10 md:m-20' >
          <motion.img
            src='/startexs_logo.svg'
            alt='StartExs'
            className='w-24 h-24 md:w-64 md:h-64'
            animate={{
              rotate: [0, 360],
            }}
            whileHover={{
              scale: 1.25,
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "circIn",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default StorySuccessSection