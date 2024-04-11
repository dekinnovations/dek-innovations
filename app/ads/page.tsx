
'use client'

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
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

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

export default function Ads() {
  return (
    <>
      <Navbar />
      <motion.div
        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white pt-60 pb-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            className="text-5xl font-bold text-center"
          >
            Social Media Advertising
          </motion.h1>
          <motion.p
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            className="text-xl mt-4 mb-20 text-center max-w-4xl mx-auto"
          >
            Boost your brand's online presence with targeted social media advertising on Facebook and Google.
          </motion.p>
        </div>
      </motion.div>

      {/* Services Offered Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 mt-40">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto">
            From campaign strategy to ad creation and monitoring, learn how our comprehensive services can help your business grow.
          </p>
        </motion.div>
      </div>

      {/* How We Do It Section */}
      <div className="bg-white py-12 mt-40">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeftVariants}
            className="text-4xl font-bold text-center mt-10"
          >
            How We Do It
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.img
              variants={fadeInUpVariants}
              src="/images/ipad.svg"
              alt="Strategy"
              className="w-full h-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-lg">
                Our approach begins with a detailed analysis of your target audience and market conditions. We use this information to create highly optimized ads designed to capture and convert your ideal customer profiles.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Advanced Targeting Techniques */}
      <div className="bg-blue-500 container mx-auto px-4 py-12 rounded-2xl mt-40 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Advanced Targeting Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <motion.div 
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 shadow-lg rounded-lg bg-white"
            >
              <h3 className="font-bold text-xl mb-3">Demographic Targeting</h3>
              <p>We refine your ads to engage with users based on age, location, interests, and more.</p>
            </motion.div>
            <motion.div 
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 shadow-lg rounded-lg bg-white"
            >
              <h3 className="font-bold text-xl mb-3">Behavioral Insights</h3>
              <p>Our campaigns use behavioral data to reach customers based on their past actions and preferences.</p>
            </motion.div>
            <motion.div 
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 shadow-lg rounded-lg bg-white"
            >
              <h3 className="font-bold text-xl mb-3">Conversion Optimization</h3>
              <p>We continuously test and optimize your ads to ensure the highest possible conversion rates.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 mt-60 mb-40">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Grow Your Business?
          </motion.h2>
          <p className="text-xl mb-6">Contact us today to schedule a free consultation and see what we can do for you.</p>
          <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="mt-4"
            >
              <Link href="/getQuote">
                <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transform transition duration-300 hover:bg-white hover:text-blue-500">
                  Get Started
                </button>
              </Link>
            </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}
