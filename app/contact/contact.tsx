'use client';

import React from 'react';
import Navbar from '../../components/navbar';
import { motion } from 'framer-motion';
import Footer from '@/components/footer';

export default function Contact() {

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
  };

  return (
    <>
      <Navbar />

      {/* Contact Us Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col justify-center items-center text-white p-12 text-center">
        <motion.h1 
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl font-bold mb-4 mt-40 text-center"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="text-xl max-w-2xl mb-40 text-center"
        >
          Bring your idea to life. We look forward to hearing from you.
        </motion.p>
      </div>

      {/* Contact Form Section */}
      <motion.div 
        className="container mx-auto px-4 py-12"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2lg mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12 mt-32 mb-40">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              placeholder="Your Message"
              className="w-full h-40 px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
