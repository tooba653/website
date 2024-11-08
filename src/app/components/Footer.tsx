'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center">
      <p>© 2024 Daily Delights. All Rights Reserved.</p>
      
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="#"
          className="text-gray-800 hover:text-yellow-500 transition duration-300"
        >
          <i className="fab fa-instagram fa-lg"></i>
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-yellow-500 transition duration-300"
        >
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-yellow-500 transition duration-300"
        >
          <i className="fab fa-twitter fa-lg"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
