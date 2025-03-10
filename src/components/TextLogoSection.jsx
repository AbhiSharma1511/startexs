import Link from 'next/link'
import StartexsLogo from './StartexsLogo.jsx'
//import React from 'react'

const TextLogoSection = ({ headText, text }) => {
    return (
        <div className='md:grid grid-cols-2 md:gap-10 items-center text-black dark:text-white '>
            <div>
                <h2 className='text-center md:text-start text-2xl md:text-4xl font-serif font-semibold'>{headText}</h2>
                <p className='mt-5 md:mt-10 mx-5 md:mx-0 text-xl'
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
            <div className='flex justify-center w-full mt-20 md:mt-10'>
                <StartexsLogo />
            </div>
        </div>
    )
}

export default TextLogoSection