"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeftCircle } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6 py-20">
      {/* Background Illustration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src="/church-bg.jpg"
          alt="Church background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-[6rem] font-extrabold text-[#0077C8] leading-none mb-2">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Oops! This page seems to have wandered off.
        </h2>
        <p className="text-gray-600 max-w-md mb-8">
          The page you’re looking for doesn’t exist or has been moved.
          <br />
          Don’t worry — let’s get you back to familiar ground.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0077C8] hover:bg-[#005fa3] text-white font-medium px-6 py-3 rounded-full transition"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-full transition"
          >
            <ArrowLeftCircle size={18} />
            Explore Events
          </Link>
        </div>
      </motion.div>

      {/* Scripture / Uplifting message */}
      <p className="mt-12 text-gray-500 italic text-sm">
        “Your word is a lamp to my feet and a light to my path.” — Psalm 119:105
      </p>
    </main>
  );
}
