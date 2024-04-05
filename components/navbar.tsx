'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold">DEK Innovations</div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {/* Replace with a menu icon */}
            Menu
          </button>
        </div>

        {/* Regular menu links */}
        <div className="hidden md:flex items-center">
          <Link href="/"><span className="link-container text-lg">Home</span></Link>
          <Link href="/about"><span className="link-container text-lg">About</span></Link>
          <Link href="/ads"><span className="link-container text-lg">Ad Campaigns</span></Link>
          <Link href="/websites"><span className="link-container text-lg">Websites</span></Link>
          <Link href="/contact"><span className="link-container text-lg">Contact</span></Link>
          <Link href="/getQuote" className="ml-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-500 border border-blue-500">
              Get a Quote
            </button>
          </Link>
        </div>

        {/* Mobile menu sidebar */}
        <div className={`absolute top-0 left-0 w-64 bg-white p-4 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
          <Link href="/"><span className="block py-2 cursor-pointer">Home</span></Link>
          <Link href="/about"><span className="block py-2 cursor-pointer">About</span></Link>
          <Link href="/ads"><span className="block py-2 cursor-pointer">Ad Campaigns</span></Link>
          <Link href="/websites"><span className="block py-2 cursor-pointer">Websites</span></Link>
          <Link href="/contact"><span className="block py-2 cursor-pointer">Contact</span></Link>
          <Link href="/getQuote" className="ml-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-500 border border-blue-500">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}