"use client";

// Websites.tsx
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
};

const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function Websites() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="hero bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col justify-center items-center text-white p-4 py-52"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleUpVariants}
      >
        <motion.h1
          className="text-6xl font-bold text-center"
          variants={fadeInVariants}
        >
          Elevate Your Online Presence
        </motion.h1>
        <motion.p
          className="text-xl mt-4 max-w-2xl text-center"
          variants={fadeInVariants}
        >
          Discover our range of custom website solutions, from development to SEO strategies that enhance visibility and lead generation.
        </motion.p>
      </motion.div>

      {/* Service Showcase */}
      <div className="container mx-auto my-20">
        <motion.section
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Web Services</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Whether launching a new site or revitalizing an old one, we tailor our services to meet your digital needs effectively.
          </p>
        </motion.section>

        {/* Dynamic Grid Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          {/* Custom Web Development */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700">Custom Development</h3>
            <p className="mt-4 text-blue-600">
              Full-stack development services tailored to create highly functional and aesthetically pleasing websites.
            </p>
          </div>

          {/* E-commerce Solutions */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700">E-commerce Solutions</h3>
            <p className="mt-4 text-blue-600">
              Enhance your online store with custom Shopify or WooCommerce solutions that drive sales and improve customer experience.
            </p>
          </div>

          {/* SEO and Marketing */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700">SEO and Marketing</h3>
            <p className="mt-4 text-blue-600">
              Optimize your site for search engines and increase your visibility with our targeted marketing strategies.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="bg-blue-400 text-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch today to discuss how we can help bring your website vision to life.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
