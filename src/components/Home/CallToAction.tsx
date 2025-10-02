"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function CallToActionBanner() {
  return (
    <section className="relative bg-[#0A3557] text-white py-24 overflow-hidden">
      {/* Optional Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/banners/jcrm-banner.jpg"
          alt="Church background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3557]/90 to-[#0A3557]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          There’s a Place for You at JCRM
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Whether you&apos;re new to faith or ready to grow deeper, JCRM is a family where you belong. Come experience God&apos;s presence and be part of something life-transforming.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="bg-[#D32F2F] hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition shadow-md"
          >
            Visit
          </Link>
          <Link
            href="/ministries"
            className="border border-white hover:bg-white hover:text-[#0A3557] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Explore
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
