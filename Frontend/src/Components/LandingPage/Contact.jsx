import React from 'react';
// import financeImage from '../assets/finance-image.jpg'; // Adjust the path to your image

const Contact = () => {
  return (
    <section className="bg-white py-20" id="contact-section">
      <div className="container mx-auto px-6 lg:px-20" id='contact'>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have any questions or feedback? We'd love to hear from you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <form className="bg-gray-100 rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#257c8a]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#257c8a]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#257c8a]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#257c8a] text-white py-3 px-6 rounded-md hover:bg-[#2a8e9e] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src="/images/—Pngtree—digital marketing management assistente_18677031.png"
              alt="Personal Finance Management"
              className="w-10/12 h-128 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;