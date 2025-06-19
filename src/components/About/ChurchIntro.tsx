"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ChurchIntro() {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome to Jesus Christ Revelation Ministry
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            At JCRM, we are more than just a church — we are a kingdom-driven community dedicated to revealing Christ to the world, transforming lives, and equipping believers to walk in purpose and power.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded on apostolic and prophetic foundations, our ministry is rooted in the Word, prayer, worship, deliverance, and discipleship. From dynamic services to outreach programs, we are committed to raising a generation that carries revival to nations.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full h-[300px] md:h-[400px] relative rounded-xl overflow-hidden shadow-md"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/about/church-intro.jpg"
            alt="JCRM service"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
