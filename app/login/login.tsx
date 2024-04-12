'use client';

import React from 'react';
import Navbar from '../../components/navbar';
import { motion } from 'framer-motion';
import Footer from '@/components/footer';

export default function Login() {

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
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col justify-center items-center text-white p-12 text-center mb-96">
        <motion.h1 
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl font-bold mb-24 mt-40 text-center"
        >
          This Page is COming Soo n
        </motion.h1>
      </div>

      <Footer />
    </>
  );
}
