import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import StartexsLogo from '@/components/StartexsLogo';
import BookServiceNowSection from '@/components/BookServiceNowSection';
import TextLogoSection from '@/components/TextLogoSection';

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
    <p class="hidden md:block"> Whether you're a startup or an established enterprise, Startexs is your trusted partner in navigating the complexities of today's digital world.
    We take pride in our ability to think outside the box, deliver results on time, and exceed expectations.
    <a href='/contact-us' class='font-bold text-blue-500'>Join Us</a> on this journey of innovation and growth - together, we can make your vision a reality.</p>
  `;

  return (
    <div className='text-white text- md:mx-16 mt-20'>
      <TextLogoSection headText = {headText} text = {text} />
      <h2 className='text-4xl font-serif mt-16 text-center md:text-start'>Brains🤯 Behind Startexs...</h2>
      <div className='flex flex-col md:flex-row items-center gap-5 justify-evenly mt-16 text-center'>
        <div className='border-2 md:border-0 border-gray-400 rounded-lg p-2'>
          <img className='w-64 h-72 rounded-lg' src='/profile_photo.png' />
          <h2>Abhinav Sharma</h2>
          <p>Full Stack Developer</p>
          <div className='flex gap-3 justify-evenly mt-5'>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
              <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6 bg-blue-700 text-black rounded-md' />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
              <FontAwesomeIcon icon={faGithub} className='w-6 h-6 bg-white text-black rounded-md' />
            </a>
          </div>
        </div>
        <div className='border-2 md:border-0 border-gray-400 rounded-lg p-2'  >
          <img className='w-64 h-72 rounded-lg' src='/profile_photo.png' />
          <h2>Amit Gupta</h2>
          <p>Frontend Developer</p>
          <div className='flex gap-3 justify-evenly mt-5'>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
              <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6 bg-blue-700 text-black rounded-md' />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
              <FontAwesomeIcon icon={faGithub} className='w-6 h-6 bg-white text-black rounded-md' />
            </a>
          </div>
        </div>
        <div className='border-2 md:border-0 border-gray-400 rounded-lg p-2' >
          <img className='w-64 h-72 rounded-lg' src='/profile_photo.png' />
          <h2>Dewang Singh</h2>
          <p>UX/UI Designer</p>
          <div className='flex gap-3 justify-evenly mt-5'>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
              <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6 bg-blue-700 text-black rounded-md' />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
              <FontAwesomeIcon icon={faGithub} className='w-6 h-6 bg-white text-black rounded-md' />
            </a>
          </div>
        </div>
      </div>
      <BookServiceNowSection />
    </div>
  )
}

export default AboutUs