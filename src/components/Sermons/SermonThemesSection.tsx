// src/components/sermons/SermonThemesSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const themes = [
  {
    name: "Kingdom Living",
    image: '/images/image3.png',
    link: "/sermons/themes/kingdom-living",
    tagline: "Understanding your place in God's Kingdom",
  },
  {
    name: "Faith & Breakthrough",
    image: '/images/image2.png',
    link: "/sermons/themes/faith-breakthrough",
    tagline: "Faith that moves mountains",
  },
  {
    name: "Prayer & Fasting",
    image: '/images/image1.png',
    link: "/sermons/themes/prayer-fasting",
    tagline: "Deepen your intimacy with God",
  },
  
];

export default function SermonThemesSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore Sermon Series
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Dive deeper into God&apos;s Word through powerful teaching series crafted to grow your faith and ignite your purpose.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <Link
              key={theme.name}
              href={theme.link}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Background Image */}
              <div className="relative w-full h-64">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white z-10">
                  <h3 className="text-xl font-semibold">{theme.name}</h3>
                  <p className="text-sm text-gray-200">{theme.tagline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
