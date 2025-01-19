'use client'
import React, { useState } from 'react'
import "./globals.css"
import Link from 'next/link';
import BusinessSection from '@/components/BusinessSolution';
import StorySuccessSection from '@/components/StorySuccessSection';
import WorkSection from '@/components/WorkSection';
import BookServiceNowSection from '@/components/BookServiceNowSection';
import { motion } from 'framer-motion';

const Home = () => {

  return (
    <div className='mt-10 md:px-16 md:mt-20 flex items-center justify-center flex-col'>
      <div className='text-white flex items-center justify-center flex-col gap-y-4 md:gap-y-8 max-w-screen-lg overflow-hidden'>
        <div className='w-fit bg-[#4e8d29] rounded-full px-4 py-1.5 text-center flex items-center'>
          <h3 className=''>
            ✅  Your growth, our mission
          </h3>
        </div>
        <motion.h2
          initial={{ opacity: 0, x:-100 }}
          animate={{ opacity: 1, x:0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className='text-center text-xl sm:text-3xl md:text-5xl font-bold overflow-hidden'>Bring Your
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.25 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }} className='text-[#447B23]'> Vision </motion.span>
          Online With Custom Websites and Apps</motion.h2>
        <motion.p 
        initial={{ opacity: 0, x:100 }}
        animate={{ opacity: 1, x:0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className='text-md md:text-lg text-center text-gray-300'>From sleek websites to powerful mobile apps, we design tools that help your business grow and thrive in the digital age</motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 2, ease: "easeInOut" }}
         className='mt-2 w-fit bg-[#120520] rounded-full px-4 py-2 font-semibold text-center flex items-center border-2 border-white gap-2 hover:scale-110 transition-transform duration-500 ease-out hover:bg-blue-500 hover:text-white'>
          <img src='/virtual-meeting_logo.svg' alt='meeting_logo' />
          <Link href={"/contact-us"}>Schedule Meeting</Link>
        </motion.div>
      </div>
      <BusinessSection />
      <StorySuccessSection />
      <WorkSection />
      <BookServiceNowSection />
    </div>
  )
}

export default Home;