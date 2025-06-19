"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const galleryImages = [
  "/gallery/image1.jpg",
  "/gallery/image2.jpg",
  "/gallery/image3.jpg",
  "/gallery/image4.jpg",
  "/gallery/image5.jpg",
  "/gallery/image6.jpg",
];

export function GalleryHighlight() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Gallery</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            A glimpse into our worship, service, and vibrant church life.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative h-48 md:h-60 rounded-lg overflow-hidden shadow-sm"
            >
              <Image
                src={`${src}`}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-block bg-[#0077C8] hover:bg-[#005fa3] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
