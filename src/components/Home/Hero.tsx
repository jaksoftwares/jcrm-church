"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Hero Section with site-specific CTAs
export default function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
  
    {
      image:
        "/theme-of-the-year.jpg",
      title: "Welcome to JCRM",
      text: "A Christ-centered community transforming lives through love and the power of the Holy Spirit.",
      primaryBtn: { label: "Learn About Us", link: "/about" },
      secondaryBtn: { label: "Explore Ministries", link: "/ministries" },
    },
    {
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?w=1600&q=80",
      title: "Experience God's Presence",
      text: "Join us in worship and encounter the life-changing presence of God through His Word and spirit.",
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

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50 sm:bg-black/60 md:bg-black/65" />
        </motion.div>
      </AnimatePresence>

      {/* Text + Buttons */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 text-center max-w-3xl lg:max-w-4xl mx-auto">
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 leading-tight"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={slides[current].text}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          {slides[current].text}
        </motion.p>

        {/* Buttons (per slide) */}
        <motion.div
          key={slides[current].primaryBtn.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <Link
            href={slides[current].primaryBtn.link}
            className="w-full sm:w-auto bg-[#0077C8] hover:bg-[#005fa3] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition text-sm sm:text-base"
          >
            {slides[current].primaryBtn.label}
          </Link>
          <Link
            href={slides[current].secondaryBtn.link}
            className="w-full sm:w-auto bg-[#D32F2F] hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition text-sm sm:text-base"
          >
            {slides[current].secondaryBtn.label}
          </Link>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 sm:p-3 rounded-full transition"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 sm:p-3 rounded-full transition"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              i === current ? "bg-[#64B5F6] scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-20 hidden sm:flex flex-col items-center text-white/60"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
