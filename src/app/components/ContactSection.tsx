import React from 'react';

const ContactSection = () => {
  return (
    <section className="p-8 text-center bg-gray-50">
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      <div className="mt-6 space-y-4 text-gray-700">
        <div className="flex items-center justify-center space-x-3">
          <i className="fas fa-map-marker-alt text-yellow-500"></i>
          <p>Address: Orangitown,karachi.</p>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <i className="fas fa-phone-alt text-yellow-500"></i>
          <p>Phone: 03452168078</p>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <i className="fas fa-envelope text-yellow-500"></i>
          <p>Email: <a href="mailto:contact@yourbakery.com" className="text-blue-500 hover:text-blue-700">yameentooba@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
