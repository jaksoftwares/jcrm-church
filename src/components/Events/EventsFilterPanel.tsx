// src/components/events/EventsFilterPanel.tsx
"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const categories = [
  "All",
  "Worship",
  "Conference",
  "Outreach",
  "Youth",
  "Women",
  "Leadership",
];

export default function EventsFilterPanel({
  onFilterChange,
}: {
  onFilterChange: (filters: { category: string; keyword: string }) => void;
}) {
  const [category, setCategory] = useState("All");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ category, keyword });
  };

  return (
    <section className="bg-gray-50 py-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6"
        >
          {/* Search Input */}
          <div className="relative w-full md:max-w-sm">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search by title, location or speaker..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
            />
            <Search className="absolute top-3 right-3 text-gray-400" size={20} />
          </div>

          {/* Category Dropdown */}
          <div className="w-full md:max-w-xs">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#0077C8] hover:bg-[#005fa3] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm transition"
          >
            Filter Events
          </button>
        </form>
      </div>
    </section>
  );
}
