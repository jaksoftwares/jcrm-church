// src/components/events/EventGallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/events/gallery1.jpg",
    alt: "Worship Night",
  },
  {
    src: "/events/gallery2.jpg",
    alt: "Baptism Sunday",
  },
  {
    src: "/events/gallery3.jpg",
    alt: "Conference Gathering",
  },
  {
    src: "/events/gallery4.jpg",
    alt: "Outreach Mission",
  },
  {
    src: "/events/gallery5.jpg",
    alt: "Prayer Service",
  },
];

export default function EventGallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Event Gallery Highlights
        </h2>
        <p className="text-gray-600 mt-3">
          A glimpse into the life, worship, and impact of JCRM gatherings.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Caption */}
      <div className="text-center text-gray-700 mt-4 text-sm">
        {images[current].alt}
      </div>
    </section>
  );
}
