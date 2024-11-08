"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
    
     
      <ul className="hidden md:flex space-x-6">
        <li><a href="#about" className="hover:text-yellow-500">About</a></li>
        <li><a href="#menu" className="hover:text-yellow-500">Menu</a></li>
        <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
      </ul>

    
      <button className="md:hidden text-xl" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </button>

  
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-100 p-4 space-y-4 text-center">
          <li><a href="#about" className="block text-lg hover:text-yellow-500">About</a></li>
          <li><a href="#menu" className="block text-lg hover:text-yellow-500">Menu</a></li>
          <li><a href="#contact" className="block text-lg hover:text-yellow-500">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
