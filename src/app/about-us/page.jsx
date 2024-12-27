import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import StartexsLogo from '@/components/StartexsLogo';
import BookServiceNowSection from '@/components/BookServiceNowSection';

const AboutUs = () => {
  return (
    <div className='text-white mx-16 mt-20'>
      <div className='grid grid-cols-2 gap-10 '>
        <div>
          <h2 className='text-4xl font-serif'>Meet the Visioneries Behind...🙎‍♂️</h2>
          <p className='mt-10'>At <span className='font-bold text-blue-500'>Startexs</span>, we are a passionate team of <span className='font-serif text-lg text-teal-400'>innovators, creators, and problem-solvers</span> dedicated to transforming ideas into reality. With a commitment to excellence, we craft unique and tailored solutions that empower businesses and individuals to reach their full potential.
          <br/>
          <span className='text-xl'>Our</span> approach blends cutting-edge technology with a deep understanding of our clients&apos;s needs, allowing us to deliver results that are not only effective but also meaningful. From the first spark of an idea to the final product, we&apos;re with you every step of the way, ensuring that your vision is brought to life with precision and care.
          <br/>
          Whether you&apos;re a startup or an established enterprise, Startexs is your trusted partner in navigating the complexities of today&apos;s digital world. We take pride in our ability to think outside the box, deliver results on time, and exceed expectations.
          <Link href='/contact-us' className='font-bold text-blue-500'>Join Us</Link> on this journey of innovation and growth-together, we can make your vision a reality.</p>
        </div>
        <div className='flex justify-center w-full mt-10'>
          <StartexsLogo/>
        </div>
      </div>  
      <h2 className='text-4xl font-serif mt-16'>Brains🤯 Behind Startexs...</h2>
      <div className='flex justify-evenly mt-16 text-center'>
        <div>
          <img className='w-64 h-72 rounded-lg' src='/profile_photo.png'/>
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
        <div>
          <img className='w-64 h-72 rounded-lg' src='/profile_photo.png'/>
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
        <div>
          <img className='w-64 h-72 rounded-lg' src='/profile_photo.png'/>
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
      <BookServiceNowSection/>  
    </div>
  )
}

export default AboutUs