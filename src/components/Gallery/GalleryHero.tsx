"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function GalleryHero() {
  const title = "Captured Moments at JCRM";
  const subtitle = "A visual journey of worship, love, community, and impact.";
  const backgroundImage = "/gallery/hero2.jpg";

  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt="Gallery banner background"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
