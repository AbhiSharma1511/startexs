import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowDown } from "react-icons/hi";


const WorkSection = () => {
  const apps = [
    {
      title: "Adhyatmik Yoga",
      description: "A Health Mobile App for Brazil Health Startup to attract investors and clients to contribute to the health organization for their users.",
      imgSrc: "/grp1.JPG",
      link: "https://www.figma.com/proto/zsOXYudLCKSjfshOrbETbM/Adhyatmik-yoga?page-id=2%3A3&type=design&node-id=344-594&viewport=3426%2C-2295%2C0.18&t=daHbQIrhZxhYpXpy-1&scaling=scale-down&starting-point-node-id=253%3A5057",
      badge: "Top Rated",
      badgeColor: "bg-red-500",
    },
    {
      title: "Ochi Dark",
      description: "Experience the Ultimate Dark Mode Web App! A stunningly designed application, known for its sleek and captivating UI, now in Dark Mode. Built with React.js and powered by GSAP animations, this app delivers a seamless and visually striking user experience.",
      imgSrc: "/ochi_dark.png",
      link: "https://abhi-ochi-dark.netlify.app/",
      badge: "Most Demanded",
      badgeColor: "bg-blue-500",
    },
  ]
  return (
    <div id="work" className='w-full mt-16 md:mt-28 flex flex-col items-center'>
      <div className='mb-10'>
        <h2 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold font-serif text-center flex flex-col md:flex-row  items-center'>
          <span className="bg-gradient-to-r from-[#8F9AFF] to-[#9873FF] rounded-full px-4 mx-1 inline-flex items-center">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="my-1 ml-2"
            >
              <Image src="/text-icon.svg" alt="icon" height={50} width={50} />
            </motion.span>
            &nbsp;<span className='text-white'>Our Work</span>
          </span>
          Speaks for Itself 🧑‍💻</h2>
      </div>
      <div className='flex flex-col gap-10 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 px-8 md:px-20'>
          {apps.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ opacity: { duration: 1.5 }, scale: { duration: 1 } }}
              whileHover={{ scale: 0.97, transition: { duration: 0.5 } }}
              className='relative flex flex-col items-center text-start border-gray-300 border-2 rounded-xl bg-white dark:bg-black p-4 w-full transition-shadow duration-500 hover:shadow-[0px_0px_25px_5px_rgba(152,115,255,0.6)] overflow-hidden'
            >
              <img className='rounded-xl object-cover h-[200px] md:h-[300px] ' src={project.imgSrc} alt={project.title} />
              {/* <div className='absolute top-5 right-5'>
                <p className={`${project.badgeColor} px-2 ounded-full text-sm`}>{project.badge}</p>
              </div> */}
              {/* <div className='dark:absolute bottom-0 left-0 px-6 py-4 transition-opacity duration-500 dark:lg:opacity-50 hover:opacity-100 lg:bg-opacity-0  dark:lg:hover:bg-black/70  dark:bg-black/80 w-full
              '> */}
              <div className='mt-5'>
                <h2 className='text-2xl w-full text-center md:text-start font-semibold text-black dark:text-white'>{project.title}</h2>
                <p className='hidden md:block pt-2 text-md text-start text-black dark:text-gray-100'>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='mt-10 flex flex-col justify-center'>
        <Link href={"/works"} className='border-2 border-gray-400 hover:bg-blue-500 px-4 py-2 rounded-2xl hover:scale-110 transition-transform delay-75'>
          Expolre More Work
        </Link>
        <div className='flex mt-10 w-full justify-center'><HiArrowDown /></div>
      </div>
    </div>
  )
}

export default WorkSection