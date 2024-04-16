'use client'

import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.div className="hero bg-gradient-to-l from-blue-400 to-blue-600 flex flex-col sm:flex-row justify-around items-center p-4 sm:p-12 text-white">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-4 mt-20">Welcome to DEK Innovations</h1>
          <p className="text-xl mb-6">Expert Website Development and Social Media Marketing Solutions</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link href="/getQuote">
              <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
                Get A Quote
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.img
          src="/images/hero.svg"
          alt="Laptop"
          className="w-full md:w-1/2 lg:w-1/3 mt-20 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        />
      </motion.div>
      
      {/* SMMA */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:mt-40 mb-80 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 p-4"
        >
          <img src="/images/iphone.svg" alt="Social Media Marketing" className="object-cover w-full h-full pt-32" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full md:w-1/2 px-4 md:px-12 py-20 md:py-20 mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg text-center md:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-10"
          >
            Strategic Social Media Marketing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-lg text-white"
          >
            Dive deep into the realm of social media with our strategic marketing services, designed to elevate your brand's online presence. Our approach combines creativity with analytics to tailor campaigns that resonate with your audience and align with your business goals. Harness the power of social media to build community, foster brand loyalty, and drive meaningful engagement.
            <br /><br />
            Benefit from our expertise in creating content that captivates, from eye-catching graphics to compelling narratives. Our targeted strategies are crafted to enhance your visibility, increase engagement rates, and generate measurable results. Let us transform your social media channels into powerful tools for business growth, customer engagement, and brand amplification.
            </motion.p>
            <motion.div
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7}}
              className="mt-10"
            >
              <Link href="/ads">
                <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg transform transition duration-300 hover:bg-blue-600 hover:text-white">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>



      {/* Web Apps and Websites Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-16 md:mt-60">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-6 px-8 md:px-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-blue-600"
          >
            Expert Web App and Website Development
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg text-gray-700"
          >
            Elevate your business with our cutting-edge web app and website development services. Our expert team specializes in creating responsive, high-performing, and visually captivating websites that are custom-tailored to your business objectives. With a focus on user experience, our bespoke solutions are designed to engage your audience, enhance your online presence, and drive your digital success.
            <br /><br />
            Whether you're looking to launch a new website, redesign an existing one, or develop a powerful web application, our comprehensive services cover all your needs. From initial consultation to final deployment, we ensure a seamless process that aligns with your strategic goals, delivering a product that not only meets but exceeds your expectations.
          </motion.p>
          <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="mt-4"
            >
              <Link href="/websites">
                <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transform transition duration-300 hover:bg-white hover:text-blue-500">
                  Learn More
                </button>
              </Link>
            </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-end mt-40 md:mt-0"
        >
          <img src="/images/laptop.svg" alt="Web Development" className="h-auto w-full lg:max-w-2xl" style={{ maxWidth: '100%', margin: 0, padding: 0 }} />
        </motion.div>
      </div>

      {/* About Us Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-full py-12 md:py-24 relative mt-80">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="container mx-auto px-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div className="md:w-1/2">
              <motion.img 
                src="/images/iPad.svg"
                alt="About Us"
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-white"
              >
                About DEK Innovations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="text-white text-opacity-90 text-lg"
              >
                Discover our journey of innovation, commitment to quality, and the drive to deliver exceptional software solutions. At DEK Innovations, we blend expertise with passion to empower your digital landscape.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="mt-4"
              >
                <Link href="/about">
                  <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg transform transition duration-300 hover:bg-blue-600 hover:text-white">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

     {/* Contact Me Section with Professional Design Adjustments */}
     <div className="w-full py-16 mt-40 mb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-blue-600 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Contact Us</h2>
            <p className="md:text-lg">Got a project in mind? Let's discuss and make it happen.</p>
            <div className="mt-6 space-y-4">
              <p>Email: <a href="mailto:dylan@dekinnovations.com" className="underline hover:text-blue-300">dylan@dekinnovations.com</a></p>
              <p>Call: <a href="tel:410-726-7290" className="underline hover:text-blue-300">410-726-7290</a></p>
            </div>
          </motion.div>
        </div>
      </div>
      
    <Footer />

    </>
  )
}
