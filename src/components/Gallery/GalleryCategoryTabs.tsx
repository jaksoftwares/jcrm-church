"use client";

import { useState } from "react";
import { GalleryGrid } from "./GalleryGrid";

const categories = [
  "All",
  "Worship & Services",
  "Outreaches & Missions",
  "Youth Ministry",
  "Children's Church",
  "Conferences & Crusades",
  "Baptism & Testimonies",
];

export function GalleryCategoryTabs() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                activeTab === cat
                  ? "bg-[#0077C8] text-white border-[#0077C8]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <GalleryGrid category={activeTab} />
      </div>
    </section>
  );
}
