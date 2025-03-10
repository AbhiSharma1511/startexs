'use client';
import React, { useState, useRef, useEffect } from 'react';
import "../app/globals.css";
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaBriefcase, FaServicestack } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close the menu if a click is detected outside the sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);


    return (
        <div className="relative bg-transparent">
            {/* Navbar container */}
            <div className="flex justify-between items-center py-4 px-5 md:px-10">
                {/* Logo Section */}
                <div
                    className="p-1 rounded-md">
                    <Link href={'/'}>
                        <img className="w-24 md:w-32" src='/startexs_logo.svg' alt='logo' />
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex px-3 py-1 text-black dark:text-white">
                    <Link href="/" className="mx-5 hover:text-blue-400 transition text-lg">Home</Link>
                    <Link href="/about-us" className="mx-5 hover:text-blue-400 transition text-lg">About Us</Link>
                    <Link href="/works" className="mx-5 hover:text-blue-400 transition text-lg">Work</Link>
                    <Link href="/#service" className="mx-5 hover:text-blue-400 transition text-lg">Services</Link>
                </div>

                {/* Contact Us Button */}

                <div className="hidden md:flex gap-5">
                    <div className='mr-2'>
                        <ThemeToggle />
                    </div>
                    <Link href="/contact-us">
                        <button className="bg-[#9873FF] rounded-lg px-4 py-2 text-white hover:bg-blue-700 transition">
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className={`md:hidden flex text-black dark:text-white ${isMenuOpen ? "hidden" : "block"}`}>
                    <div className='mr-3'>
                        <ThemeToggle />
                    </div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute top-0 left-0 bg-black text-white w-2/3 h-screen z-50 p-5"
                >
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-4 right-4 text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div
                        className="p-1 bg-gradient-to-r from-red-500 via-green-700 to-blue-600 animate-rotate-border bg-[length:200%_200%] rounded-md max-w-max mb-10">
                        <div className="bg-black text-center rounded-md px-1">
                            <Link href={'/'} onClick={() => setIsMenuOpen(false)}>
                                <img className="w-24 md:w-32" src='/startexs_logo.svg' alt='logo' />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Links with Icons */}
                    <Link href="/" className="flex items-center px-5 py-3 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                        <FaHome className="mr-3 text-blue-400 md:hidden" />
                        Home
                    </Link>
                    <Link href="/about-us" className="flex items-center px-5 py-3 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                        <FaInfoCircle className="mr-3 text-blue-400 md:hidden" />
                        About Us
                    </Link>
                    <Link href="/works" className="flex items-center px-5 py-3 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                        <FaBriefcase className="mr-3 text-blue-400 md:hidden" />
                        Work
                    </Link>
                    <Link href="/#service" className="flex items-center px-5 py-3 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                        <FaServicestack className="mr-3 text-blue-400 md:hidden" />
                        Services
                    </Link>
                    <Link href="/contact-us" onClick={() => setIsMenuOpen(false)} className="block mt-10">
                        <button className="bg-[#858FFF] rounded-lg px-4 py-2 text-white hover:bg-blue-700 transition w-full">
                            Contact Us
                        </button>
                    </Link>
                </div>
            )}

            <hr className="w-full" />
        </div>
    );
};

export default Navbar2;
