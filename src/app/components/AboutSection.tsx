import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-yellow-50 p-8 text-center">
      <h2 className="text-4xl font-semibold text-gray-800">Our Story</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        We are passionate about baking the freshest goods for our community. Come and taste the difference! Our bakery
        prides itself on using the finest ingredients and time-honored baking techniques, ensuring every bite is a
        delight.
      </p>
      <blockquote className="mt-6 italic text-xl text-gray-500">
        "Baking is both an art and a science, and we pour our heart and soul into every creation."
      </blockquote>
    </section>
  );
};

export default AboutSection;
