// src/components/ministries/MinistriesHero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function MinistriesHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/ministries/ministries-hero.jpg"
        alt="JCRM Ministries"
        fill
        className="object-cover"
        priority
      />
      {/* Neutral dark overlay */}
      <div className="absolute inset-0 bg-gray-900/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Ministries
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Serving every generation in Christ through worship, service, and community.
        </motion.p>
      </div>
    </section>
);
}
