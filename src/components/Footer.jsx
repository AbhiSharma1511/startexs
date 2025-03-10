'use client'
import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setUserEmail(value);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("true");
    try {
      console.log(userEmail);
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userEmail),
      });

      if (response.ok) {
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const result = await response.json();
          console.log(result);
        } else {
          console.error('Response is not in JSON format');
        }

        setResponseMessage("Thanks for subscribing!.");



      } else {
        setResponseMessage("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Error submitting form. Please try again.");
    }
    setIsSubmitted(true);
    setUserEmail("");
    setLoading(false);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    // <div className="bg-gradient-to-tr from-[#1E2A47] via-[#23395B] to-[#1E2A47] text-white rounded-t-lg">
    <div className=" text-black dark:bg-transparent dark:text-white rounded-t-lg">
      <div className="flex flex-col sm:flex-row px-8 md:px-20 lg:px-32 py-10 items-center sm:justify-evenly md:gap-20 gap-5">
        {/* Logo and Subscription Section */}
        <div className="flex gap-8 lg:gap-16 flex-col md:flex-row items-center">
          {/* Footer Logo */}
          <div className="relative group w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1 hover:shadow-2xl hover:scale-110 transform transition duration-500 ease-out">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-[6px] border-transparent border-t-white border-b-white"></div>
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <img
                className="w-16 h-16 md:w-20 md:h-20 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                src="/startexs_logo.svg"
                alt="Startexs Logo"
              />
            </div>
          </div>
          {/* Subscription Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="font-bold text-xl md:text-2xl uppercase text-center md:text-start">
              Subscribe to Our Newsletter
            </h2>
            <form className="w-full flex items-center bg-white text-black px-4 py-2 rounded-lg shadow-md focus-within:ring-2 focus-within:ring-blue-500"
              onSubmit={handleSubmit}>
              <input
                type="email"
                name="userEmail"
                value={userEmail}
                onChange={handleChange}
                placeholder="Your Best Email Address"
                className="w-full bg-transparent outline-none text-sm md:text-base"
                required
              />
              <button type="submit" className="bg-[#858FFF] text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-700 transition" disabled={isSubmitted}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {/* Notification */}
            {isSubmitted && (
              <div className="fixed top-10 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-md animate-fade-in">
                <h1 className="text-2xl">{responseMessage}</h1>
                <p className="text-lg text-right">-Team Startexs</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="mt-10 sm:mt-0 flex flex-row gap-8 sm:gap-16">
          {/* Page Links */}
          <div className="flex flex-col items-center sm:items-start gap-2 text-lg md:text-xl">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about-us" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact-us" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/#service" className="hover:underline">
              Services
            </Link>
            <Link href="/#work" className="hover:underline">
              Work
            </Link>
          </div>
          {/* Social Links */}
          <div className="flex flex-col items-center sm:items-start gap-2 text-lg md:text-xl">
            <Link target="_blank" href="https://www.linkedin.com/company/startexs" className="hover:underline">
              <AiFillLinkedin className='w-10 h-10 bg-blue-500  hover:bg-blue-600 rounded-md  fill-white ' />
            </Link>
            {/* <h2 className="hover:underline">
              X
            </h2>
            <h2  className="hover:underline">
              Instagram
            </h2> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-300 mb-4" />
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 md:px-20 lg:px-32 pb-4 text-sm md:text-base">
        <div className="flex flex-wrap gap-4">
          <h2  className="hover:underline">
            Privacy Policy
          </h2>
          <h2  className="hover:underline">
            Terms of Service
          </h2>
        </div>
        <p className="mt-4 sm:mt-0 text-center">© Startexs 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
