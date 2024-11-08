'use client';

import React from 'react';

const MenuSection = () => {
  return (
    <section id="menu-section" className="bg-white py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-yellow-500">Our Menu</h2>
        <p className="mt-4 text-lg text-gray-700">Baked with love, fresh every day!</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
    
        <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src="/rich.jpg" alt="Chocolate Cake" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Chocolate Cake</h3>
            <p className="mt-2 text-gray-600">Deliciously moist and rich chocolate cake.</p>
            <p className="mt-2 font-bold text-lg">Price=$1239</p>
          </div>
        </div>

       
        <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src="/bread.jpg" alt="Breads" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Breads</h3>
            <p className="mt-2 text-gray-600">Freshly baked, soft, and warm breads.</p>
            <p className="mt-2 font-bold text-lg">Price=$567</p>
          </div>
        </div>

       
        <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src="/pastery.jpg" alt="Chocolate Pastries" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Chocolate Pastries</h3>
            <p className="mt-2 text-gray-600">Flaky and delicious pastries filled with chocolate.</p>
            <p className="mt-2 font-bold text-lg">Price=$1239</p>
          </div>
        </div>

      
        <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src="/crosso.jpg" alt="Croissants" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Croissants</h3>
            <p className="mt-2 text-gray-600">Fluffy, buttery croissants fresh out of the oven.</p>
            <p className="mt-2 font-bold text-lg">Pric=$670</p>
          </div>
        </div>

       
        <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src="/rusk.webp" alt="Rusk" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Rusk</h3>
            <p className="mt-2 text-gray-600">Crispy, crunchy rusk perfect for tea time.</p>
            <p className="mt-2 font-bold text-lg">Price=$256</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
