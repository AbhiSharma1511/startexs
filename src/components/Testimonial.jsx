import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
    const testimonials = [
        {
            review: "I've been using this web hosting service for over a month, and I’m genuinely impressed. The uptime is rock solid—my website has never gone down. Customer support is also top-notch; they respond quickly and resolve issues efficiently. Definitely worth every penny!",
            rating: 4,
            name: "Saksham Bajpai",
            designation: "Software Engineer",
            profileImage: "/testinomials/saksham.png",
        },
        {
            review: "Fantastic hosting service! The setup was seamless, and the dashboard is very user-friendly. I had a minor issue with domain configuration, but their support team walked me through it step by step. Highly recommended for small businesses!",
            rating: 4,
            name: "Chirag Khatri",
            designation: "Product Manager",
            profileImage: "/testinomials/abhi.png",
        },
        {
            review: "This platform is an absolute game-changer! The speed and reliability are unmatched, and I love the security features. It gives me peace of mind knowing my clients' websites are always up and running. 10/10 would recommend!",
            rating: 4,
            name: "Ritik Gupta",
            designation: "UX Designer",
            profileImage: "/testinomials/ritik.png",
        },
    ];

    return (
        <div className="w-full pt-10 text-white">
            <div className="p-6">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-4 ">
                    Testimonials
                </h1>
                <p className="text-center text-white mb-8">
                    Hear what our happy customers have to say about us.
                </p>
                {/* <div className="overflow-hidden relative w-full">
                    <motion.div
                        className="flex space-x-6"
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }} // Moves left infinitely
                        transition={{
                            duration: 20, // Adjust speed (lower = faster)
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {testimonials.concat(testimonials).map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-none w-80 bg-black shadow-lg rounded-xl p-6"
                            >
                                <div className='flex flex-col justify-between h-full'>
                                    <p className="mb-4">{testimonial.review}</p>
                                    <div className=''>
                                        <div className="flex justify-center items-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-yellow-400" />
                                            ))}
                                            {[...Array(5 - testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-gray-300" />
                                            ))}
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img
                                                src={testimonial.profileImage}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full mr-4"
                                            />
                                            <div className="flex flex-col items-center justify-center">
                                                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                                <p className="text-gray-400 text-sm">{testimonial.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div> */}
                <div className="overflow-hidden w-full">
                    <motion.div
                        className="flex space-x-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-none w-80 bg-black shadow-lg rounded-xl p-6"
                            >
                                <div className="flex flex-col justify-between h-full">
                                    <p className="mb-4">{testimonial.review}</p>
                                    <div>
                                        <div className="flex justify-center items-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-yellow-400" />
                                            ))}
                                            {[...Array(5 - testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-gray-300" />
                                            ))}
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img
                                                src={testimonial.profileImage}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div className="flex flex-col items-center justify-center">
                                                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                                <p className="text-gray-400 text-sm">{testimonial.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
