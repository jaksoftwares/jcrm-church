"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hero Section with site-specific CTAs
export default function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
      title: "Welcome to JCRM",
      text: "A Christ-centered community transforming lives through love and the power of the Holy Spirit.",
      primaryBtn: { label: "Learn About Us", link: "/about" },
      secondaryBtn: { label: "Explore Ministries", link: "/ministries" },
    },
    {
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?w=1600&q=80",
      title: "Experience God's Presence",
      text: "Join us in worship and encounter the life-changing presence of God through His Word and Spirit.",
      primaryBtn: { label: "Watch Sermons", link: "/sermons" },
      secondaryBtn: { label: "Attend Upcoming Events", link: "/events" },
    },
    {
      image:
        "https://images.unsplash.com/photo-1528222354212-a29573cdb844?w=1600&q=80",
      title: "Grow in Faith and Knowledge",
      text: "Be equipped through the Word and grow deeper in your faith with our learning and outreach programs.",
      primaryBtn: { label: "Read Articles & Devotionals", link: "/read" },
      secondaryBtn: { label: "Join Harod Bible College", link: "/harod-bible-college" },
    },
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Text + Buttons */}
      <div className="relative z-10 px-6 text-center max-w-3xl">
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={slides[current].text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
        >
          {slides[current].text}
        </motion.p>

        {/* Buttons (per slide) */}
        <motion.div
          key={slides[current].primaryBtn.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={slides[current].primaryBtn.link}
            className="bg-[#0077C8] hover:bg-[#005fa3] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            {slides[current].primaryBtn.label}
          </a>
          <a
            href={slides[current].secondaryBtn.link}
            className="bg-[#D32F2F] hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            {slides[current].secondaryBtn.label}
          </a>
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-[#64B5F6] scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
