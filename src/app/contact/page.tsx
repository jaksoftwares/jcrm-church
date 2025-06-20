"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  SendHorizonal,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("general");

  const placeholders = {
    general: "Write your inquiry or message here...",
    prayer: "Share your prayer request and we’ll stand with you...",
    suggestion: "Share your thoughts or ideas to help us improve...",
    testimony: "Tell us what the Lord has done!",
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] w-full">
        <Image
          src="/contact/hero.jpg"
          alt="Contact JCRM"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Get In Touch With Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Prayer requests, suggestions, testimonies, or inquiries — we’re listening.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location & Contacts</h2>

            <div className="flex items-start gap-4">
              <MapPin className="text-[#0077C8]" />
              <p className="text-gray-700">
                JCRM Headquarters<br />
                City Centre, Nairobi<br />
                Mon–Sun: 8:00 AM – 7:00 PM
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-[#0077C8]" />
              <p className="text-gray-700">
                +254 712 345 678<br />
                +254 721 123 456
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-[#0077C8]" />
              <p className="text-gray-700">info@jcrm.org</p>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com/jcrm" target="_blank" rel="noreferrer">
                <Facebook className="text-gray-600 hover:text-[#0077C8]" />
              </a>
              <a href="https://instagram.com/jcrm" target="_blank" rel="noreferrer">
                <Instagram className="text-gray-600 hover:text-[#0077C8]" />
              </a>
              <a href="https://youtube.com/jcrm" target="_blank" rel="noreferrer">
                <Youtube className="text-gray-600 hover:text-[#0077C8]" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <iframe
              className="rounded-xl w-full h-[300px] border"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.00131193604!2d36.8172441!3d-1.2863898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f113f25e1f6a9%3A0x123456789abcde!2sJCRM%20Church!5e0!3m2!1sen!2ske!4v1712345678901"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#F9FAFB] py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
            Send Us a Message
          </h2>

          {/* Message Type Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {[
              { label: "General", value: "general" },
              { label: "Prayer Request", value: "prayer" },
              { label: "Suggestion", value: "suggestion" },
              { label: "Testimony", value: "testimony" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedType(option.value)}
                className={`py-2 px-4 rounded-full border ${
                  selectedType === option.value
                    ? "bg-[#0077C8] text-white border-[#0077C8]"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
              />
            </div>

            <input
              type="text"
              placeholder="Phone (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
            />

            <textarea
              rows={6}
              placeholder={placeholders[selectedType as keyof typeof placeholders]}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#D32F2F] text-white font-semibold py-3 rounded-md hover:bg-red-600 transition"
            >
              <SendHorizonal size={18} /> Submit Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}










// // app/contact/page.tsx
// import React from 'react';

// export default function ContactPage() {
//   return (
//     <div className="container mx-auto p-6">
//       {/* Title Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-extrabold text-gray-800 mb-6">CONTACT US</h1>
//         <h2 className="text-2xl font-semibold text-gray-600 mb-4">We&apos;d Love to Hear from You!</h2>
//         <p className="text-lg text-gray-500 mb-4">
//           Thank you for reaching out. Whether you have a prayer request, a testimony, or inquiries about our ministry,
//           we are here for you. Feel free to connect with us through any of the channels below.
//         </p>
//       </div>

//       {/* Contact Info Section */}
//       <div className="flex flex-wrap justify-center gap-12 mb-12">
//         <div className="flex flex-col items-center text-center">
//           <p className="text-lg font-semibold text-gray-700 mb-2">Visit Us</p>
//           <p className="text-md text-gray-500">Nairobi</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <p className="text-lg font-semibold text-gray-700 mb-2">Email Us</p>
//           <p className="text-md text-gray-500">church@jerem.org</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <p className="text-lg font-semibold text-gray-700 mb-2">Call Us</p>
//           <p className="text-md text-gray-500">+25471234567</p>
//         </div>
//       </div>

//       {/* Social Media Links */}
//       <div className="flex justify-center space-x-6 mb-8 text-2xl">
//         <a href="#" className="text-blue-600 hover:text-blue-800">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="#" className="text-red-600 hover:text-red-800">
//           <i className="fab fa-youtube"></i>
//         </a>
//         <a href="#" className="text-pink-600 hover:text-pink-800">
//           <i className="fab fa-instagram"></i>
//         </a>
//       </div>

//       {/* Message Form Section */}
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send Us a Message</h2>
//       <form className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           <div className="flex flex-col">
//             <label htmlFor="full_name" className="text-sm font-semibold text-gray-700 mb-2">Full Name</label>
//             <input
//               type="text"
//               id="full_name"
//               name="full_name"
//               placeholder="Enter your full name"
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col mt-6">
//           <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             rows={6}
//             placeholder="Write your message"
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="flex justify-center mt-6">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             SEND MESSAGE
//           </button>
//         </div>
//       </form>

//       {/* Google Map Section */}
//       <div className="mt-12">
//         <div className="relative w-full h-64 rounded-lg shadow-lg overflow-hidden">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.482645!2d36.8165!3d-1.2851976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDHCsDA1JzA3LjAiTiAzNsKwNDgnNTkuNCJF!5e0!3m2!1sen!2ske!4v1641577567138!5m2!1sen!2ske"
//             frameBorder="0"
//             style={{ border: 0, width: '100%', height: '100%' }}
//             allowFullScreen
//             aria-hidden="false"
//             tabIndex={0}
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }
