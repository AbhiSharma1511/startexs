'use client'
import { motion } from 'framer-motion';
import BookServiceNowSection from '@/components/BookServiceNowSection';
import TextLogoSection from '@/components/TextLogoSection';
import Image from 'next/image';
import AbhinavPhoto from '../../../public/AbhinavPhoto.png'
import AmitPhoto from '../../../public/AmitPhoto.png'
import DevangPhoto from '../../../public/DevangPhoto.png'
import { useState } from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import Testimonial from '@/components/Testimonial';



const AboutUs = () => {

  const headText = "Meet the Visioneries Behind...🙎‍♂️"
  const text = `
    At <span class='font-bold text-blue-500'>Startexs</span>, we are a passionate team of 
    <span class='font-serif text-lg text-teal-400'>innovators, creators, and problem-solvers</span> dedicated to transforming ideas into reality.
    With a commitment to excellence, we craft unique and tailored solutions that empower businesses and individuals to reach their full potential.
    <br/>
    <span class='text-xl'>Our</span> approach blends cutting-edge technology with a deep understanding of our clients' needs, allowing us to deliver results that are not only effective but also meaningful.
    From the first spark of an idea to the final product, we're with you every step of the way, ensuring that your vision is brought to life with precision and care.
    <br/>
    <p class="hidden sm:block"> Whether you're a startup or an established enterprise, Startexs is your trusted partner in navigating the complexities of today's digital world.
    We take pride in our ability to think outside the box, deliver results on time, and exceed expectations.
    <a href='/contact-us' class='font-bold text-blue-500'>Join Us</a> on this journey of innovation and growth - together, we can make your vision a reality.</p>
  `;

  const [isHover1, setIsHover1] = useState(false)
  const [isHover2, setIsHover2] = useState(false)
  const [isHover3, setIsHover3] = useState(false)

  return (
    <div className='text-white text- md:mx-16 mt-20'>
      <TextLogoSection headText={headText} text={text} />
      <h2 className='text-4xl font-serif mt-16 text-center md:text-start'>Brains🤯 Behind Startexs...</h2>
      <div className=' flex flex-col md:flex-row items-center gap-5 justify-evenly mt-16 text-center '>
        <div
          className='relative border-2 md:border-0 border-gray-400 rounded-lg m-2 overflow-hidden flex justify-center items-center'
          onMouseEnter={() => setIsHover1(true)}
          onMouseLeave={() => setIsHover1(false)}
        >
          <motion.div
            animate={isHover1 ? { opacity: 0.7, y: 0 } : { opacity: 0.8, y: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='absolute inset-0 flex flex-col items-start justify-center bg-gray-600 opacity-80 w-full mx-auto rounded-xl p-4 backdrop-blur-2xl'
          >
            <h2 className='text-start text-2xl font-semibold text-white'>Abhinav Sharma</h2>
            <p className={`${isHover1 ? 'bg-transparent' : 'bg-blue-700 px-3'} text-white rounded-full opacity-100 text-sm  py-2`}>
              Application Developer
            </p>
            <p className='mt-auto text-start text-white'>
              Application Developer at Startexs leading to deliver high-quality applications.
            </p>

            <a target='_blank' href="https://www.linkedin.com/in/abhinav-sharma-686415224/" className='align-bottom mt-2'><AiFillLinkedin className='w-10 h-10 bg-blue-500  hover:bg-blue-800 rounded-md hover:scale-125 transition-all delay-75 ease-in-out' /></a>
          </motion.div>
          <Image alt="profile-pic" height="300" width="300" className='object-cover rounded-xl' src={AbhinavPhoto} />
        </div>
        <div
          className='relative border-2 md:border-0 border-gray-400 rounded-lg m-2 overflow-hidden flex justify-center items-center'
          onMouseEnter={() => setIsHover2(true)}
          onMouseLeave={() => setIsHover2(false)}
        >
          <motion.div
            animate={isHover2 ? { opacity: 0.7, y: 0 } : { opacity: 0.8, y: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='absolute inset-0 flex flex-col items-start justify-center bg-gray-600 opacity-80 w-full mx-auto rounded-xl p-4 backdrop-blur-2xl'
          >
            <h2 className='text-start text-2xl font-semibold text-white'>Amit Gupta</h2>
            <p className={`${isHover2 ? 'bg-transparent' : 'bg-blue-700 px-3'} text-white rounded-full opacity-100 text-sm  py-2`}>
              Frontend Developer
            </p>
            <p className='mt-auto text-start text-white'>
              Application Developer at Startexs leading to deliver high-quality applications.
            </p>

            <a target='_blank' href="https://www.linkedin.com/in/amit-gupta027/"
              className='align-bottom mt-2'><AiFillLinkedin className='w-10 h-10 bg-blue-500  hover:bg-blue-800 rounded-md hover:scale-125 transition-all delay-75 ease-in-out' /></a>
          </motion.div>
          <Image alt="profile-pic" height="300" width="300" className='object-cover rounded-xl' src={AmitPhoto} />
        </div>
        <div
          className='relative border-2 md:border-0 border-gray-400 rounded-lg m-2 overflow-hidden flex justify-center items-center'
          onMouseEnter={() => setIsHover3(true)}
          onMouseLeave={() => setIsHover3(false)}
        >
          <motion.div
            animate={isHover3 ? { opacity: 0.7, y: 0 } : { opacity: 0.8, y: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='absolute inset-0 flex flex-col items-start justify-center bg-gray-600 opacity-80 w-full mx-auto rounded-xl p-4 backdrop-blur-2xl'
          >
            <h2 className='text-start text-2xl font-semibold text-white'>Dewang Singh</h2>
            <p className={`${isHover3 ? 'bg-transparent' : 'bg-blue-700 px-3'} text-white rounded-full opacity-100 text-sm  py-2`}>
              UX/UI Designer
            </p>
            <p className='mt-auto text-start text-white'>
              Application Developer at Startexs leading to deliver high-quality applications.
            </p>

            <a target='_blank' href="https://www.linkedin.com/in/singhdewang/" className='align-bottom mt-2'><AiFillLinkedin className='w-10 h-10 bg-blue-500  hover:bg-blue-800 rounded-md hover:scale-125 transition-all delay-75 ease-in-out' /></a>
          </motion.div>
          <Image alt="profile-pic" height="500" width="300" className='object-cover rounded-xl' src={DevangPhoto} />
        </div>
      </div>
      <div className='mt-20 w-full text-center mb-10 '>
        <h2 className=' text-3xl md:text-5xl font-semibold'>Trusted by Many, Proven by Results</h2>
        <p className='text-lg'>Don't just take our word for it - see what actual users of our service have to say about their experience.</p>
      </div>
      <div className='grid  grid-col-1 md:grid-cols-3  gap-10 md:gap-20 px-8 justify-around'>
        <div className='w-[300] h-[300] lg:p-10 bg-gradient-to-br from-[#FFE090] to-[#FFCF4D] rounded-xl flex flex-col items-center p-20'>
          <div className="h-[200px] w-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/7d51/7a53/f79fdd8757dd56be0742819613653d8c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gwAInavl8XPDefprKJXRkpo2T-YsVs5tg7L678d5VAeU8DaS6p25UeiP7dRTzH~XeucYdgzr0me61nT1lhomEiwnNd1KcG3fN7nL-HcRqtakj1RPfjzcUj8LjkjLx5nnbmnTA4-UIQ21tsJamAM4fuevMiOGJMP7tL4PqFHYGlRyDkvmuToC-h5dfBVGbOMlJLbL6eFn6s9HOmvJnNloJ8S3rKYgrPghhAqd6mgql-VKXh4nYIgm5EsXf-bqefhQZiMJ9xzSO7oBli4HAyJmvjseJpMbbF5ecRFGwSKZasUd3TnYUKPMlG2f~BRWaSfIGDATT9lEZPP2i6Bg-xzD2A__')" }}></div>

          <div className='text-center text-black mt-16'>
            <h1 className='text-5xl font-bold'>500+</h1>
            <h2 className='text-3xl'>Projects Delivered <br/> Successfully</h2>
          </div>

        </div>
        <div className='w-[300] h-[300] p-20 bg-gradient-to-br from-[#FFD78A] to-[#FF665D] rounded-xl flex flex-col items-center'>
          <div className="h-[200px] w-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/658a/0e7d/a93a4e9226ce269856063616d093d7a7?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TphotN6hRHzdDsEIFmeQ-nor9viNT2hSFd4l3MP9iI9GE68aMmaR-rw1VH5Fath9uMoR6rkWvEzlQp6dfO-vRQJvY~ssu4eJgvmDPFFtH2TV8uUWLVEKyYBFWiv58qFlfDs2Y6Pe97i0pYqjc6Vv5QBq-nAgGKsPxu5td~TL6b0-H4Gc6tjbUb1mG3QmAvHOIKiss-Zi-dX4F9GoXvcls66bfpJcDL~9aX0ib1xl~3Lr~OmTAQoiGO8KXev4uLIzleTEJNJ93FSlV7MeEHvxO6UdYnSVuYel2grBTUwK~JeGt10~Jfb5TPtVOfk09xQluJ7SiVHmss3N1a8pV-UpPA__')" }}></div>
          <div className='text-center text-black mt-16'>
            <h1 className='text-5xl font-bold'>300+</h1>
            <h2 className='text-3xl'>Satisfied Clients</h2>
          </div>
        </div>
        <div className='w-[300] h-[300] p-20 bg-gradient-to-br from-[#D9E9FF] to-[#C6DDFF] rounded-xl flex flex-col items-center'>
          <div className="h-[200px] w-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/93c5/fbe8/d4196c02e3c8e6578f3620920f1d5a8f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hxh~AKafC7Pw50uB8TIAsd2c2x9-scpuMA7Mz9g9mY4ZeO2rUDUMeieVW-rWAENWgrNCxVQn-BNTIy0BB3qH39EtwU3v7fwfkhvEQeqYw0iP34S~~-nZJIIIpkzFdlwNYif2d3EiDKHLBH-4cREVpt10NpPWhPV8VE1X3gK1LCXWvkZpiZT~e1891U~TJDeYiAPI~cLq5HodaA5PArmfFTnilYceydm4n6u8GfL3McjbccuAEpL-CvogZbnQuvI4pUvrKsNbeZwzdWuSCtPatH7IIr7TbXolF~gUbbr4zRm2WaYyLnuhEulBMg051QJvpdyLukaG4excpy5S-AugXw__')" }}></div>
          <div className='text-center text-black mt-16'>
            <h1 className='text-5xl font-bold'>85%</h1>
            <h2 className='text-3xl'>Repeat Clients</h2>
          </div>
        </div>
      </div>
      <Testimonial/>
      <BookServiceNowSection />
    </div>
  )
}

export default AboutUs