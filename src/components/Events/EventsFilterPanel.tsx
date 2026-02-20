// src/components/events/EventsFilterPanel.tsx
"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { EVENT_CATEGORY_LIST } from "@/constants/events";

export type FilterState = {
  category: string;
  keyword: string;
  status: 'upcoming' | 'past' | 'all';
};

export default function EventsFilterPanel({
  onFilterChange,
}: {
  onFilterChange: (filters: FilterState) => void;
}) {
  const [category, setCategory] = useState("All");
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState<'upcoming' | 'past' | 'all'>('upcoming');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ category, keyword, status });
  };

  // Get category labels for the dropdown
  const categoryOptions = ["All", ...EVENT_CATEGORY_LIST.map((c) => c.label)];

  return (
    <section className="bg-gray-50 py-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Status Tabs */}
        <div className="flex gap-2 mb-6">
          {(['upcoming', 'past'] as const).map((statusOption) => (
            <button
              key={statusOption}
              onClick={() => setStatus(statusOption)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                status === statusOption
                  ? 'bg-[#0077C8] text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {statusOption === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
            </button>
          ))}
        </div>

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
              placeholder="Search by title, location or description..."
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
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
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
