import React from 'react';

const SpecialOffers:any = () => {
  return (
    <section className="p-8 text-center bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-100">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-yellow-900">Special Offers</h2>
        <p className="mt-2 text-lg text-gray-700">10% Off in all items</p>
        <div className="mt-4">
         
          <span role="img" aria-label="discount" className="text-4xl">🎉</span>
        </div>
       
      </div>
    </section>
  );
};

export default SpecialOffers;
