'use client'

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ServiceBox from '@/components/SeerviceBox';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col sm:flex-row justify-around items-center p-4 sm:p-12 text-white">
        <div>
          <h1 className="text-5xl font-bold mb-4">Welcome to DEK Innovations</h1>
          <p className="text-xl mb-6">Innovative Web Solutions for Your Business</p>
          <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
        <img src="/images/hero.svg" alt="Laptop" className="w-full md:w-1/2 lg:w-1/3" />
      </div>

      {/* Card Container */}
      <div className="container mx-auto px-4 mt-4 md:-mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Individual Cards */}
        {[1, 2, 3, 4].map((demo) => (
          <div key={demo} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img src={`/images/demo-${demo}.svg`} alt={`Demo ${demo}`} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="pt-20 p-2">
              <h3 className="font-bold text-lg mb-2">Demo {demo}</h3>
              <p className="text-gray-600">Short description of the demo...</p>
            </div>
          </div>
        ))}
      </div>

      {/* See Full Catalog' Button */}
      <div className="text-center my-4 md:my-8">
        <button className="ml-6 white text-blue-500 px-4 py-2 rounded transition duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white border border-blue-500">
          See Full Catalog
        </button>
      </div>

       {/* Services Section */}
        <div className="w-full mt-8 md:mt-40 flex flex-col md:flex-row items-center justify-center pl-4 md:pl-8">
          <div className="space-y-4 md:space-y-12 w-full md:w-3/4 mx-auto">
            <ServiceBox title="Website Design" description="Professional and creative website design tailored to your business needs." />
            <ServiceBox title="Website Development" description="Robust and scalable web development solutions using the latest technologies." />
            <ServiceBox title="Hosting" description="Reliable and secure web hosting services for uninterrupted online presence." />
            <ServiceBox title="Domains" description="Find and register the perfect domain name for your business." />
          </div>
          <div className="w-full md:w-2/5">
            <img src="/images/laptop.svg" alt="Right Section Image" className="w-full h-auto" />
          </div>
        </div>

      {/* About Us Section with Added Top Margin */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-full py-12 md:py-40 relative mt-80">
        <div className="bg-white p-6 md:p-12 rounded-lg shadow-2xl bobbing absolute -top-16 md:-top-24 -bottom-16 md:-bottom-24 right-4 md:right-60 z-10 transform w-3/4 md:w-1/4">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p>Your one-stop shop for domains, hosting, and custom website development...</p>
          {/* Add more content about choosing custom websites over WordPress/Wix */}
        </div>
      </div>




      <div className="bg-#f8f8f8 to-blue-600 w-full py-12 md:py-40 relative mt-80">

      </div>

    </>
  )
}
