'use client';

import React from 'react';

const HeroSection = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-section');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/hero akery.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
    
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
        <h1 className="text-5xl font-bold">Baked Delights </h1>
        <p className="mt-4 text-xl">
       Freshly Baked Every Morning
        </p>
        
      
        <button
          onClick={scrollToMenu}
          className="mt-6 bg-yellow-500 py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-600"
        >
          View Menu
        </button>

       
      </div>
    </section>
  );
};

export default HeroSection;
