// src/components/ministries/PageIntro.tsx
"use client";

import { motion } from "framer-motion";

export function PageIntro() {
  return (
    <section className="bg-[#F3F4F6] py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Heart for Service
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At JCRM, our ministries are the <span className="text-[#0077C8] font-semibold">hands and feet of Christ</span>— 
          reaching every age, background, and community with compassion, worship, and spiritual growth.
        </motion.p>
      </div>
    </section>
  );
}
