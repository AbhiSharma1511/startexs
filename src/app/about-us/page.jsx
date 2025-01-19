import React from 'react'
import BookServiceNowSection from '@/components/BookServiceNowSection';
import TextLogoSection from '@/components/TextLogoSection';
import Image from 'next/image';
import AbhinavPhoto from '../../../public/AbhinavPhoto.png'
import AmitPhoto from '../../../public/AmitPhoto.png'
import DevangPhoto from '../../../public/DevangPhoto.png'

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
      <TextLogoSection headText={headText} text={text} />
      <h2 className='text-4xl font-serif mt-16 text-center md:text-start'>Brains🤯 Behind Startexs...</h2>
      <div className='flex flex-col md:flex-row items-center gap-5 justify-evenly mt-16 text-center'>
        <div className='border-2 md:border-0 border-gray-400 rounded-lg p-2 hover:border-slate-500 hover:border-2 hover:scale-110 transition-transform duration-1000 ease-out'>
          <a target='_blank' href={"https://www.linkedin.com/in/abhinav-sharma-686415224/"}>
            <Image alt="profile-pic" height="1000" width="1000" className='object-cover w-64 h-72 rounded-lg mb-2' src={AbhinavPhoto}/>
            <h2>Abhinav Sharma</h2>
            <p>Full Stack Developer</p>
          </a>
        </div>
        <div className='border-2 md:border-0 border-gray-400 rounded-lg p-2 hover:border-slate-400 hover:border-2 hover:scale-110  transition-transform duration-1000 ease-out'>
          <a target='_blank' href={"https://www.linkedin.com/in/amit-gupta027/"}>
            <Image alt="profile-pic" height="1000" width="1000" className='object-cover w-64 h-72 rounded-lg mb-2' src={AmitPhoto} />
            <h2>Amit Gupta</h2>
            <p>Frontend Developer</p>
          </a>
        </div>
        <div className='border-2 md:border-0 border-gray-400 rounded-lg p-2 hover:border-slate-400 hover:border-2 hover:scale-110  transition-transform duration-1000 ease-out'>
          <a target='_blank' href={"https://www.linkedin.com/in/singhdewang/"}>
            <Image alt="profile-pic" height="1000" width="1000" className='object-cover w-64 h-72 rounded-lg mb-2' src={DevangPhoto} />
            <h2>Dewang Singh</h2>
            <p>UX/UI Designer</p>
          </a>
        </div>
      </div>
      <BookServiceNowSection />
    </div>
  )
}

export default AboutUs