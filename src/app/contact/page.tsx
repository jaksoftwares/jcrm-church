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
                JCRM TownCenter<br />
                5th Flr, KPCU Building, Wakulima House, along Haile Sellasie Avenue, Nairobi<br />
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1567.5973755711389!2d36.82918142302023!3d-1.2875703242696672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f114c4bef6a0b%3A0x8748ffed6c9f1382!2sJesus%20Come%20Revival%20Ministries!5e0!3m2!1sen!2ske!4v1750434112678!5m2!1sen!2ske"
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