// src/components/events/EventsHero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EventsHero() {
  return (
    <section className="relative h-[60vh] md:h-[50vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/events/hero.jpg"
        alt="JCRM Event"
        layout="fill"
        objectFit="cover"
        className="brightness-[0.2]"
        priority
      />

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-md">
          Upcoming Events
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mt-4 drop-shadow-sm">
          Engage, grow, and experience God through powerful gatherings, conferences, and community outreach.
        </p>
      </motion.div>
    </section>
  );
}
