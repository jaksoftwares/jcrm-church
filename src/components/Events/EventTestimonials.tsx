// src/components/events/EventTestimonials.tsx
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Grace W.",
    role: "Youth Leader",
    quote:
      "The Worship Night at JCRM completely shifted my spiritual walk. The presence of God was tangible — I left renewed and on fire!",
  },
  {
    name: "Rev. Dan M.",
    role: "Guest Minister",
    quote:
      "JCRM’s leadership conference was one of the most impactful events I’ve ministered at. The excellence and hospitality are unmatched.",
  },
  {
    name: "Kevin N.",
    role: "Volunteer",
    quote:
      "Volunteering during the outreach was life-changing. It reminded me of the power of simple service in the Kingdom.",
  },
];

export default function EventTestimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, role, quote } = testimonials[current];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Voices from Our Gatherings
        </h2>

        <div className="relative bg-gray-50 p-8 rounded-xl shadow-sm">
          <Quote size={36} className="text-[#0077C8] mx-auto mb-4" />

          <p className="text-lg italic text-gray-700 max-w-2xl mx-auto mb-6">
            “{quote}”
          </p>

          <div className="text-sm text-gray-600 font-medium">
            — {name}, <span className="text-[#0077C8]">{role}</span>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="hover:text-[#0077C8] transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="hover:text-[#0077C8] transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
