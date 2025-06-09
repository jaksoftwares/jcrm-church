// app/contact/page.tsx
import React from 'react';

export default function ContactPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">CONTACT US</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">We&apos;d Love to Hear from You!</h2>
        <p className="text-lg text-gray-500 mb-4">
          Thank you for reaching out. Whether you have a prayer request, a testimony, or inquiries about our ministry,
          we are here for you. Feel free to connect with us through any of the channels below.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-wrap justify-center gap-12 mb-12">
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-semibold text-gray-700 mb-2">Visit Us</p>
          <p className="text-md text-gray-500">Nairobi</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-semibold text-gray-700 mb-2">Email Us</p>
          <p className="text-md text-gray-500">church@jerem.org</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-semibold text-gray-700 mb-2">Call Us</p>
          <p className="text-md text-gray-500">+25471234567</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-8 text-2xl">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-red-600 hover:text-red-800">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="text-pink-600 hover:text-pink-800">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Message Form Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send Us a Message</h2>
      <form className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="full_name" className="text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              placeholder="Enter your full name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Write your message"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>

      {/* Google Map Section */}
      <div className="mt-12">
        <div className="relative w-full h-64 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.482645!2d36.8165!3d-1.2851976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDHCsDA1JzA3LjAiTiAzNsKwNDgnNTkuNCJF!5e0!3m2!1sen!2ske!4v1641577567138!5m2!1sen!2ske"
            frameBorder="0"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
