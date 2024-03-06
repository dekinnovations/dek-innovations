'use client';

import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import { motion } from 'framer-motion';
import servicesData from '@/servicesData';

interface Service {
  id: number;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceSelection = (id: number) => {
    const service = servicesData.find(service => service.id === id);
    setSelectedService(service ?? null); // This will either set the service object or null
  };

  return (
    <>
      <Navbar />

      {/* Services Header Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-center p-12">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mt-40"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl mt-4 mb-40"
        >
          Explore our comprehensive range of services designed to empower your business and ensure its growth.
        </motion.p>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 py-12 mt-52">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <motion.div 
              key={service.id}
              onClick={() => handleServiceSelection(service.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all mb-20"
            >
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p>{service.description.slice(0, 100)}...</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg max-w-2xl w-full space-y-4"
          >
            <h2 className="text-3xl font-bold">{selectedService.title}</h2>
            <p>{selectedService.description}</p>
            <button 
              onClick={() => setSelectedService(null)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-blue-400 to-blue-600 text-white mt-40 py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold">DEK Innovations</h2>
                <p className="text-md mt-2">Innovating the future, one project at a time.</p>
            </div>
            <div className="flex space-x-4">
                <a href="/" className="hover:text-blue-200 transition-colors duration-300">Home</a>
                <a href="/services" className="hover:text-blue-200 transition-colors duration-300">Services</a>
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

export default Services;