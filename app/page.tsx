import React from 'react';
import Navbar from '../components/Navbar';

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

      {/* 'See Full Catalog' Button */}
      <div className="text-center my-4 md:my-8">
        <button className="ml-6 white text-blue-500 px-4 py-2 rounded transition duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white border border-blue-500">
          See Full Catalog
        </button>
      </div>

    </>
  )
}
