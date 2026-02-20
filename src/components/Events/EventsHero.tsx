"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { getUpcomingFeaturedEvents } from "@/constants/events";

export default function EventsHero() {
  // Get the first upcoming featured event, or fallback to first upcoming event
  const featuredEvents = getUpcomingFeaturedEvents();
  const mainEvent = featuredEvents[0];

  if (!mainEvent) {
    return (
      <section className="relative h-[40vh] md:h-[30vh] w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-md">
            Upcoming Events
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mt-4 drop-shadow-sm">
            Check back soon for upcoming events at JCRM Church
          </p>
        </div>
      </section>
    );
  }

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
        {/* Category Badge */}
        {mainEvent.category && (
          <span className="bg-[#0077C8] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {mainEvent.category}
          </span>
        )}
        
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-md max-w-4xl">
          {mainEvent.title}
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mt-4 drop-shadow-sm">
          {mainEvent.description}
        </p>
        
        <Link
          href={`/events/${mainEvent.slug}`}
          className="mt-6 bg-[#D32F2F] hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
        >
          Learn More
        </Link>
      </motion.div>
    </section>
  );
}
