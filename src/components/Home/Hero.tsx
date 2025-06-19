"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-black text-white min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Church service"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Welcome to <span className="text-[#64B5F6]">JCRM</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Transforming lives with the love and power of Jesus Christ.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="bg-[#0077C8] hover:bg-[#005fa3] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Learn More
          </Link>
          <Link
            href="/sermons"
            className="bg-[#D32F2F] hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Watch Sermons
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
