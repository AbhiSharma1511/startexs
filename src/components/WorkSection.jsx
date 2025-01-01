import { motion } from 'framer-motion'
import React from 'react'

const WorkSection = () => {
  return (
    <div id="work" className='w-full mt-16 md:mt-28 flex flex-col items-center'>
      <div className='mb-10'>
        <h2 className=' text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold font-serif text-center'>Our Work Speaks for Itself 🧑‍💻</h2>
      </div>
      <div className='flex flex-col w-[70%] md:w-full md:flex-row gap-4 md:gap-1  justify-center md:justify-around'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col items-center text-center border-gray-400 border-2 h-min rounded-xl p-3 bg-gray-400 hover:scale-110 transition-transform duration-500 ease-out' >
          <img className='md:h-64 md:w-[350px] rounded-lg' src='/ui_ux_photo.jfif' alt='UI/IX' />
          <h2 className='pt-2 text-xl'>UI/UX Design</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }} className='flex flex-col items-center text-center border-gray-400 border-2 h-min rounded-xl p-3 bg-gray-400 hover:scale-110 transition-transform duration-500 ease-out' >
          <img className='md:h-64 md:w-[350px] rounded-lg' src='/web_photo.jfif' alt='UI/IX' />
          <h2 className='pt-2 text-xl'>Website design and development</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }} className='flex flex-col items-center text-center border-gray-400 border-2 h-min rounded-xl p-3 bg-gray-400 hover:scale-110 transition-transform duration-500 ease-out' >
          <img className='md:h-64 md:w-[350px] rounded-lg' src='/android_photo.webp' alt='UI/IX' />
          <h2 className='pt-2 text-xl'>Mobile App design and development</h2>
        </motion.div>
      </div>
    </div>
  )
}

export default WorkSection