'use client'
import { motion } from 'framer-motion'
import React from 'react'

const WorkPage = () => {

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
        {
            title: "Opsvg",
            description: "Experience the Ultimate Dark Mode Web App! A stunningly designed application, known for its sleek and captivating UI, now in Dark Mode. Built with React.js and powered by GSAP animations, this app delivers a seamless and visually striking user experience.",
            imgSrc: "/opsvg.png",
            link: "https://www.iconefy.com/",
            badge: "Most Demanded",
            badgeColor: "bg-blue-500",
        }
    ]

    return (
        <div className='px-8 md:px-20 mt-10'>
            {/* Grid with 2 columns for large screens, 1 column for small screens */}
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-20'>
                {apps.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{opacity:1, scale:1}}
                        transition={{ opacity: { duration: 1.5 }, scale: { duration: 1 } }}
                        whileHover={{ scale: 0.97, transition: { duration: 0.5 } }}
                        className='flex flex-col border-gray-400 border-2 rounded-xl p-3 bg-black px-4 md:px-10 justify-between transition-shadow duration-500 hover:shadow-[0px_0px_20px_5px_rgba(255,0,150,0.6)]'
                    >
                        <div className='flex justify-center h-80 p-10'>
                            <img className='rounded-lg w-[100%] object-contain' src={project.imgSrc} alt='UI/UX'/>
                        </div>
                        <a target='_blank' href={project.link} className='mt-4 mb-4'>
                            <div>
                                <h2 className='text-xl w-full text-start'>{project.title}</h2>
                                <p className='pt-2 text-sm text-start text-gray-300'>
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default WorkPage
