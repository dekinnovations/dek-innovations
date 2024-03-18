'use client'

import React from 'react';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SMMA() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Emphasizing New Beginnings and Growth */}
      <div className="hero pt-52 pb-52 bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col justify-center items-center text-white p-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center" 
        >
          Kickstart Your Brand's Journey with Us
        </motion.h1>
        <p className="text-xl mt-4 max-w-2xl text-center">
          Harness the power of social media with our specialized strategies for barber shops and landscaping businesses, designed to propel your brand to new heights.
        </p>
      </div>

      {/* Specialized Services for Niches */}
      <div className="container mx-auto my-20">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Tailored Social Media Strategies</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our services are crafted with your specific industry needs in mind, focusing on creating a strong online presence that resonates with your target audience.
          </p>
        </section>

        {/* Barber Shops and Landscaping Businesses Sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Barber Shops */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700">Barber Shops</h3>
            <p className="mt-4 text-blue-600">
              Perfect your digital storefront with our expertly crafted campaigns, spotlighting your styling skills, promoting your unique atmosphere, and engaging your local community.
            </p>
            {/* Placeholder for an illustrative image or graphic */}
          </div>

          {/* Landscaping Businesses */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700">Landscaping Businesses</h3>
            <p className="mt-4 text-blue-600">
              Showcase the artistry of your landscaping projects with our visual storytelling approach, designed to highlight your transformative results and expertise.
            </p>
            {/* Placeholder for an illustrative image or graphic */}
          </div>
        </div>
      </div>

      {/* Call to Action for New Businesses */}
      <div className="bg-blue-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with us and discover how our tailored social media services can revolutionize your online presence, attract more clients, and showcase your brand’s uniqueness.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg">
            Let's Get Started
          </Link>
        </div>
      </div>

      {/* Placeholder for Future Testimonials */}
      <div className="container mx-auto my-20">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">What Our Future Clients Say</h2>
          <p className="text-lg max-w-xl mx-auto">
            We’re excited to build partnerships and create success stories. Your feedback and results will be our greatest endorsements.
          </p>
          {/* Placeholder for future testimonials */}
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-400 to-blue-600 text-white mt-10 py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold">DEK Innovations</h2>
                <p className="text-md mt-2">Innovating the future, one project at a time.</p>
            </div>
            <div className="flex space-x-4">
                <a href="/" className="hover:text-blue-200 transition-colors duration-300">Home</a>
                <a href="/smma" className="hover:text-blue-200 transition-colors duration-300">SMMA</a>
                <a href="/websites" className="hover:text-blue-200 transition-colors duration-300">Websites</a>
                <a href="/about" className="hover:text-blue-200 transition-colors duration-300">About</a>
                <a href="#" className="hover:text-blue-200 transition-colors duration-300">Contact</a>
            </div>
            </div>
            <div className="text-center mt-8">
            <p>&copy; {new Date().getFullYear()} DEK Innovations. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </>
  );
}
