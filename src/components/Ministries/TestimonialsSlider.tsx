// src/components/ministries/TestimonialsCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const testimonials = [
  {
    name: "Celestine M.",
    role: "Youth Ministry Member",
    quote:
      "Being part of the youth ministry helped me find purpose and a deeper walk with Christ. It's my second family.",
    image: "/ministries/celestine.jpg",
  },
  {
    name: "Joseph K.",
    role: "Outreach Volunteer",
    quote:
      "Evangelism Saturdays changed my life. Serving in the community showed me God's heart for people.",
    image: "/ministries/joseph-kirika.jpg",
  },
  {
    name: "Sarah N.",
    role: "Children’s Ministry Leader",
    quote:
      "There’s nothing more beautiful than planting God’s Word in the heart of a child. It’s a calling I cherish deeply.",
    image: "/ministries/doreen-makaka.jpg",
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Ministry Stories
        </h2>

        <div className="relative">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={clsx(
                "transition-opacity duration-700",
                idx === current ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
              )}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <blockquote className="text-lg italic text-gray-700 mb-4 max-w-xl mx-auto">
                  “{t.quote}”
                </blockquote>
                <p className="text-sm text-gray-600 font-medium">
                  — {t.name}, <span className="text-[#0077C8]">{t.role}</span>
                </p>
              </div>
            </div>
          ))}

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 left-0 p-2 text-gray-500 hover:text-[#0077C8] transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 right-0 p-2 text-gray-500 hover:text-[#0077C8] transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={clsx(
                  "h-2 w-2 rounded-full transition",
                  current === idx
                    ? "bg-[#0077C8]"
                    : "bg-gray-300 hover:bg-[#0077C8]"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
