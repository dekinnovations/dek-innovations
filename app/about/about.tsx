'use client'

import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function About() {

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.0 }
    },
  };

  const slideUpFadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
  };

  const zoomInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  return (
    <>
      <Navbar />

      {/* About Us Hero Section */}
      <div className="hero bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col justify-center items-center sm:p-20 text-white">
        <motion.h1 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl font-bold mb-4 mt-40 text-center"
        >
          About DEK Innovations
        </motion.h1>
        <motion.p 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl mb-40 max-w-2xl text-center"
        >
          Learn about our journey, values, and the passionate team driving innovation.
        </motion.p>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-4 py-12 mt-20 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpFadeInVariants}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            
At DEK Innovations, our mission is to deliver cutting-edge software solutions and impactful social media advertising strategies that drive growth, efficiency, and innovation for businesses around the globe.
          </p>
        </motion.div>
      </div>

      {/* Team Section for Single Member */}
      <div className="bg-white py-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center"
          >
            <div className="inline-block rounded-full border-4 border-blue-500 overflow-hidden" style={{ width: '200px', height: '200px', position: 'relative' }}>
                <img 
                src="/images/me.png" 
                alt="Founder and Lead Developer"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div className="mt-6">
                <h3 className="text-2xl font-bold">Dylan E. Keller</h3>
                <p className="text-lg text-gray-600">Founder & Lead Developer</p>
                <p className="mt-4 max-w-xl mx-auto">
                Dylan Keller is the founder of DEK Innovations, a boutique agency specializing in website creation and social media advertising. With extensive experience in digital marketing, he is committed to using his expertise to help businesses expand their online presence. Dylan envisions growing DEK Innovations into a major agency that supports the growth of thousands of businesses.
                </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-12 mt-40 mb-40">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="text-3xl font-bold text-center mb-6"
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={slideInLeftVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="font-bold text-xl mb-3">Innovation</h3>
            <p>We embrace innovation to tackle complex challenges and deliver groundbreaking solutions.</p>
          </motion.div>
          <motion.div variants={slideInLeftVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="font-bold text-xl mb-3">Quality</h3>
            <p>Commitment to the highest quality is at the core of everything we do, ensuring excellence in our deliverables.</p>
          </motion.div>
          <motion.div variants={slideInLeftVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="font-bold text-xl mb-3">Integrity</h3>
            <p>We uphold transparency, ethics, and honesty in our work, fostering trust with our clients and team members.</p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}
