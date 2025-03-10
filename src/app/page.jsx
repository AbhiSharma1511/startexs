'use client'
import React, { useState } from 'react'
import "./globals.css"
import Link from 'next/link';
import BusinessSection from '@/components/BusinessSolution';
import StorySuccessSection from '@/components/StorySuccessSection';
import WorkSection from '@/components/WorkSection';
import BookServiceNowSection from '@/components/BookServiceNowSection';
import { motion } from 'framer-motion';
import { HiArrowDown } from "react-icons/hi";
import Testimonial from '@/components/Testimonial';
import Image from 'next/image';




const Home = () => {

  return (
    <div className='mt-10 md:px-16 md:mt-20 flex items-center justify-center flex-col'>
      <div className='text-black dark:text-white flex items-center justify-center flex-col gap-y-4 md:gap-y-8 max-w-screen-lg overflow-hidden pb-2'>
        {/* <div className='w-fit bg-[#6db444] rounded-full px-4 py-1.5 text-center flex items-center'>
          <h3 className='text-white'>
            ✅  Your growth, our mission
          </h3>
        </div> */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-center text-xl sm:text-3xl md:text-6xl font-bold overflow-hidden leading-loose pb-2"
        >
          Bring Your
          <span className="text-[#DDD500]"> Vision </span>
          Online With Custom
          <span className="bg-[#9873FF] rounded-full px-4 mx-1 inline-flex items-center text-white">
            Websites and Apps
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="my-1 ml-2 rounded-full"
            >
              <Image src="/text-icon.svg" alt="icon" height={50} width={50} />
            </motion.span>
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className='text-md md:text-lg text-center text-gray-700 dark:text-gray-300 leading-tight md:leading-relaxed'>
          From sleek websites to powerful mobile apps, we design tools that help
          your business <br /> grow and thrive in the digital age</motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className='mt-2 w-fit bg-white dark:bg-[#120520] rounded-full px-4 py-2 font-semibold text-center flex items-center border-2 border-black dark:border-white gap-2 hover:scale-110 transition-transform duration-500 ease-out hover:bg-blue-500 hover:text-white'>
          <Link href={"/contact-us"}>Get Started</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y:0, opacity:0.25 }}
          animate={{ opacity: 1, y:20, opacity:1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat:Infinity }}
          className='mb-2'>
          <HiArrowDown className='h-6 w-6' />
        </motion.div>
      </div>
      <BusinessSection />
      <Testimonial />
      <StorySuccessSection />
      <WorkSection />
      <BookServiceNowSection />
    </div>
  )
}

export default Home;