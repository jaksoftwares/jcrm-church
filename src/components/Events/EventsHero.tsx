"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { events } from "@/constants/events";

export default function EventsHero() {
  const mainEvent = events[0];

  return (
    <section className="relative h-[60vh] md:h-[50vh] w-full overflow-hidden">
      <Image
        src={mainEvent.image || "/images/default-event.jpg"}
        alt={mainEvent.title}
        fill
        className="object-cover brightness-[0.3]"
        priority
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-md">
          {mainEvent.title}
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mt-4 drop-shadow-sm">
          {mainEvent.description}
        </p>
      </motion.div>
    </section>
  );
}
