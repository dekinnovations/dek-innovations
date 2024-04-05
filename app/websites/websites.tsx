"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Websites() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="hero pt-52 pb-52 bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col justify-center items-center text-white p-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center" 
        >
          Elevate Your Online Presence with Our Website Solutions
        </motion.h1>
        <p className="text-xl mt-4 max-w-2xl text-center">
          From hand-coded websites to WordPress, Wix, Shopify, and more, we create and redesign all kinds of websites to help you gain more clients and generate leads.
        </p>
      </div>

      {/* Website Creation and Redesign Section */}
      <div className="container mx-auto my-20">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Website Creation and Redesign</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our expert team specializes in creating responsive, high-performing, and visually captivating websites that are custom-tailored to your business objectives. Whether you're looking to launch a new website, redesign an existing one, or develop a powerful web application, our comprehensive services cover all your needs.
          </p>
        </section>

        {/* Website Platforms Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Hand-Coded Websites */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700">Hand-Coded Websites</h3>
            <p className="mt-4 text-blue-600">
              We create bespoke websites from scratch, ensuring a unique and personalized online presence that stands out from the crowd.
            </p>
            {/* Placeholder for an illustrative image or graphic */}
          </div>

          {/* WordPress, Wix, Shopify, and More */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700">WordPress, Wix, Shopify, and More</h3>
            <p className="mt-4 text-blue-600">
              We are proficient in a variety of platforms, allowing us to create or redesign your website using the technology that best suits your needs.
            </p>
            {/* Placeholder for an illustrative image or graphic */}
          </div>
        </div>
      </div>

      {/* Lead Generation and SEO Section */}
      <div className="bg-blue-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Lead Generation and SEO</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our websites are designed not just to look great, but also to serve as powerful tools for lead generation. We also implement SEO best practices to ensure your website ranks high on search engine results, attracting more potential clients.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg">
            Let's Get Started
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}