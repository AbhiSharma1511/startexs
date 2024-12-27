import StartexsLogo from '@/components/StartexsLogo';
import React from 'react'

const ContactUs = () => {
    return (
        <div className='text-white mt-20 mx-20'>
            <div className='flex justify-between gap-10 md:gap-20'>
                <div className='max-w-max mt-10'>
                    <h2 className='text-4xl'>Let&apos;s Bring Your Vision to Life 🖐️✋</h2>
                    <p>Ready to grow your business? Fill out the form below, and let&apos;s start a conversation about your goals and needs.</p>
                </div>
                <div className='md:mr-64'>
                    <StartexsLogo />
                </div>
            </div>
            <form className='md:w-[50%] grid gap-10 pr-20 mb-10'>
                <div className='mt-10 flex justify-between'>
                    <div className=''>
                        <h2 className='text-xl'>Client Name:</h2>
                        <input className='rounded-md text-md px-3 py-1 bg-black border-2 border-gray-400' placeholder='eg..John Doe' required />
                    </div>
                    <div>
                        <h2 className='text-xl'>Organization Name:</h2>
                        <input className='rounded-md text-md px-3 py-1 bg-black border-2 border-gray-400' placeholder='eg..Startexs Private Ltd.' required />
                    </div>
                </div>
                <div>
                    <h2 className='text-xl'>Professional Email Id:</h2>
                    <input className='w-full mr-10 rounded-md text-md px-3 py-1 bg-black border-2 border-gray-400' placeholder='eg..john@startexs.com' required />
                </div>
                <div>
                    <h2 className='text-xl'>Please share the breif about the project:</h2>
                    <textarea rows={6} cols={56} className='w-full rounded-md text-md px-3 py-1 bg-black border-2 border-gray-400' placeholder='Its a web poject of healthcare.' required />
                </div>
                <div className='flex gap-8'>
                    <button type='submit' className='border-2 border-gray-500 bg-blue-600 rounded-lg px-3 py-1'>Book Service</button>
                    <h2>or Email us directly at<a href='#' className='text-blue-500'>sales@startexs.com</a></h2>
                </div>
            </form>
        </div>
    )
}

export default ContactUs;