"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const sermons = [
  {
    title: "Are you for Sin or Righteousness?",
    speaker: "Apostle Arthur Likhakasi",
    image: "/sermons/are-you-for-sin-or-righteous.jpg",
    date: "June 16, 2025",
    link: "/sermons/walking-in-kingdom-authority",
  },
  {
    title: "Arise and Praise the Lord",
    speaker: "Apostle Arthur Likhakasi",
    image: "/sermons/arise-and-praise.jpg",
    date: "June 9, 2025",
    link: "/sermons/power-of-consistent-prayer",
  },
  {
    title: "Overcoming Evil Gates",
    speaker: "Apostle Arthur Likhakasi",
    image: "/sermons/overcoming-evil-gates.jpg",
    date: "June 2, 2025",
    link: "/sermons/faith-that-moves-mountains",
  },
];

export function SermonsPreview() {
  return (
    <section className="bg-[#F3F4F6] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest Sermons
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Be inspired and empowered by the Word of God through our latest sermons.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {sermons.map((sermon) => (
            <motion.div
              key={sermon.title}
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-md rounded-xl overflow-hidden transition-all"
            >
              <div className="relative w-full h-48">
                <Image
                  src={sermon.image}
                  alt={sermon.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{sermon.title}</h3>
                <p className="text-sm text-gray-500 mb-2">By {sermon.speaker}</p>
                <p className="text-xs text-gray-400 mb-4">{sermon.date}</p>
                <Link
                  href={sermon.link}
                  className="inline-flex items-center text-[#0077C8] hover:underline font-medium text-sm"
                >
                  <PlayCircle className="w-5 h-5 mr-1" /> Watch Sermon
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/sermons"
            className="inline-block bg-[#0077C8] hover:bg-[#005fa3] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            View All Sermons
          </Link>
        </div>
      </div>
    </section>
  );
}
