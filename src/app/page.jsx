'use client'
import React, { useState } from 'react'
import "./globals.css"
import Link from 'next/link';
import BusinessSection from '@/components/BusinessSolution';
import StorySuccessSection from '@/components/StorySuccessSection';
import WorkSection from '@/components/WorkSection';
import BookServiceNowSection from '@/components/BookServiceNowSection';
// import Service from '@/components/Service';
// import LatestWork from '@/components/LatestWork';
//import HeroText from '@/components/HeroText';
// import HeroText from '@/components/HeroText2';
const Home = () => {

  const [isAnimating, setIsAnimating] = useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 5000); // Change duration based on your preference
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='m-4 mt-10 md:mx-16 md:mt-20 flex items-center justify-center flex-col'>
      <div className='text-white flex items-center justify-center flex-col gap-y-4 md:gap-y-8 max-w-screen-lg'>
        <div className='w-fit bg-[#447B23] rounded-full px-4 py-1.5 text-center flex items-center'>
          <h3 className=''>
            ✅  Your growth, our mission
          </h3>
        </div>
        <h2 className='text-center text-xl sm:text-3xl md:text-5xl font-bold'>Bring Your <span className='text-[#447B23]'>Vision</span> Online With Custom Websites and Apps</h2>
        <p className='text-md md:text-lg text-center text-gray-300	'>From sleek websites to powerful mobile apps, we design tools that help your business grow and thrive in the digital age</p>

        <div className='mt-2 w-fit bg-[#120520] rounded-full px-4 py-2 font-semibold text-center flex items-center border-2 border-white gap-2'>
          <img src='/virtual-meeting_logo.svg' alt='meeting_logo'/>
          <Link href={"/"}>Schedule Meeting</Link>
        </div>
      </div>
      <BusinessSection/>
      <StorySuccessSection/>
      <WorkSection name="work"/>
      <BookServiceNowSection/>
    </div>
  )
}

export default Home;