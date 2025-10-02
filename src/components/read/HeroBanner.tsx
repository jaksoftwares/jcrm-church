"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroBanner() {
  return (
    <section className="relative h-[50vh] w-full bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/read/hero.jpg"
        alt="Read JCRM Books"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            JCRM Digital Library
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore powerful spiritual books authored by JCRM leaders and visionaries. 
            Read previews for free — and unlock the full blessing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
