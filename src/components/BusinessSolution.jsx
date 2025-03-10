import { motion } from 'framer-motion';
import React from 'react';

const services = [
  {
    title: 'UI/UX Design Services',
    description:
      'Want to redesign and design your website or an app? Why are you waiting to get a new experience for your app?',
    imgSrc: '/uiux designer.webp',
    badge: 'Top Rated',
    badgeColor: 'bg-red-500',
  },
  {
    title: 'Mobile App Design & Development',
    description:
      'Take your business on the go with innovative mobile app design and development! From sleek designs to robust functionality.',
    imgSrc: '/android_photo.jpg',
    badge: 'Most Demanded',
    badgeColor: 'bg-blue-500',
  },
  {
    title: 'Web App Design & Development',
    description:
      'Elevate your brand with stunning web app designs and seamless development! Transform your ideas into reality.',
    imgSrc: '/web_image1.jpg',
    badge: 'Liked by 50+ Clients',
    badgeColor: 'bg-red-500',
  },
  {
    title: 'SEO Service',
    description:
      'Unlock the full potential of your website with our expert SEO services! Drive more traffic, rank higher on search engines.',
    imgSrc: '/seo_image1.jpg',
    badge: 'Liked by 50+ Clients',
    badgeColor: 'bg-red-500',
  },
];

const BusinessSection = () => {
  return (
    <div id='service' className='w-full mt-8 md:mt-24 flex flex-col items-center bg-transparent'>
      <div className='mb-10 text-center'>
        <h2 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold font-serif'>
          Solution Built For Your Business 🫡
        </h2>
        <p className='text-sm sm:text-md md:text-lg lg:text-xl'>
          100+ customers grew their business by 5% using our services
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 w-full px-8 md:px-20'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ opacity: { duration: 1.5 }, scale: { duration: 1 } }}
            whileHover={{ scale: 0.97, transition: { duration: 0.5 } }}
            className='relative flex flex-col items-center text-start border-gray-400 border-2 rounded-xl bg-white dark:bg-black p-4 w-full transition-shadow duration-500 hover:shadow-[0px_0px_25px_5px_rgba(152,115,255,0.6)] overflow-hidden'
          >
            <img className='rounded-xl object-cover h-full' src={service.imgSrc} alt={service.title} />
            <div className='absolute top-5 right-5'>
              <p className={`${service.badgeColor} px-2 rounded-full text-sm`}>{service.badge}</p>
            </div>
            <div className='absolute bottom-0 left-0 px-6 py-4 transition-opacity duration-500 dark:lg:opacity-50 dark:hover:opacity-100 bg-transparent lg:bg-opacity-0  dark:lg:hover:bg-black/70 dark:bg-black/80 w-full'>
              <h2 className='pt-5 text-lg md:text-xl lg:text-2xl w-full text-center md:text-start text-white '>{service.title}</h2>
              <p className='hidden md:block pt-2 text-sm lg:text-md text-start text-gray-300'>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSection;