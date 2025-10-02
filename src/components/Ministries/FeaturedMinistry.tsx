// src/components/ministries/FeaturedSpotlight.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const featured = [
  {
    title: "Deliverance & Healing",
    subtitle: "“I was set free from years of bondage through this ministry.”",
    image: "/ministries/outreach.jpg",
    link: "/ministries/deliverance",
    cta: "Learn More",
  },
  {
    title: "Children’s Ministry",
    subtitle: "“My child’s faith has blossomed beyond imagination.”",
    image: "/ministries/children.jpg",
    link: "/ministries/children",
    cta: "Get Involved",
  },
];

export function FeaturedSpotlight() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Featured Ministries
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {featured.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gray-900/50" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 italic mb-4">
                  &ldquo;{item.subtitle}&rdquo;
                </p>
                <Link
                  href={item.link}
                  className="self-start bg-[#0077C8] hover:bg-[#005fa3] text-white px-5 py-2 rounded-full text-sm font-semibold transition"
                >
                  {item.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}