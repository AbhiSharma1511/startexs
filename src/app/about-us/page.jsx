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
        <div className='w-[300] h-[300] lg:p-10 bg-gradient-to-br from-[#E0DBC4] to-[#FFCF4D] rounded-xl flex flex-col items-center p-20'>
          <div className="h-[200px] w-[200px] bg-cover bg-center rounded-full mt-2 sm:mt-4 md:mt-10">
          <Image src={"/gif/giphy.gif"} height={100} width={100} className='w-full h-full object-fit rounded-full' alt=''></Image></div>
          <div className='text-center text-black mt-16'>
            <h1 className='text-5xl font-bold'>100+</h1>
            <h2 className='text-3xl'>Projects Delivered <br/> Successfully</h2>
          </div>

        </div>
        <div className='w-[300] h-[300] p-20 bg-gradient-to-br from-[#FFD78A] to-[#FF665D] rounded-xl flex flex-col items-center'>
          <div className="h-[200px] w-[200px] bg-cover bg-center rounded-full">
          <Image src={"/gif/giphy2.gif"} height={100} width={100} className='w-full h-full object-fit rounded-full' alt=''></Image></div>
          <div className='text-center text-black mt-16'>
            <h1 className='text-5xl font-bold'>89+</h1>
            <h2 className='text-3xl'>Satisfied Clients</h2>
          </div>
        </div>
        <div className='w-[300] h-[300] p-20 bg-gradient-to-br from-[#D9E9FF] to-[#C6DDFF] rounded-xl flex flex-col items-center'>
          <div className="h-[200px] w-[200px] bg-fit bg-center rounded-full">
          <Image src={"/gif/giphy3.gif"} height={100} width={100} className='w-full h-full object-center rounded-full ' alt=''></Image>
          </div>
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