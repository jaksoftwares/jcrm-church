// src/components/ministries/FilterNav.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Children",
  "Youth",
  "Women",
  "Men",
  "Worship",
  "Outreach",
  "School of Ministry",
];

export function FilterNav({ onSelect }: { onSelect: (cat: string) => void }) {
  const [active, setActive] = useState("All");

  return (
    <nav className="sticky top-20 bg-white/80 backdrop-blur-sm z-40 py-4">
      <ul className="max-w-7xl mx-auto px-6 flex space-x-4 overflow-x-auto no-scrollbar">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <li key={cat} className="relative">
              <button
                onClick={() => {
                  setActive(cat);
                  onSelect(cat);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  isActive
                    ? "text-[#0077C8] bg-[#0077C8]/10"
                    : "text-gray-600 hover:text-[#0077C8]"
                }`}
              >
                {cat}
              </button>
              {isActive && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#0077C8] rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
