// src/components/sermons/SermonFilterBar.tsx
"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const categories = ["All", "Sunday", "Youth", "Revival", "Guest Ministers"];
const speakers = ["All", "Apostle John", "Pastor Mary", "Guest Speaker"];
const years = ["All", "2025", "2024", "2023"];

export function SermonFilterBar({
  onFilterChange,
}: {
  onFilterChange: (filters: {
    category: string;
    speaker: string;
    year: string;
    search: string;
  }) => void;
}) {
  const [category, setCategory] = useState("All");
  const [speaker, setSpeaker] = useState("All");
  const [year, setYear] = useState("All");
  const [search, setSearch] = useState("");

  function handleUpdate() {
    onFilterChange({ category, speaker, year, search });
  }

  return (
    <section className="bg-white py-6 shadow-sm sticky top-[96px] z-40">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center">
          {/* Category */}
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              handleUpdate();
            }}
            className="border border-gray-300 text-sm rounded px-3 py-2 text-gray-700"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          {/* Speaker */}
          <select
            value={speaker}
            onChange={(e) => {
              setSpeaker(e.target.value);
              handleUpdate();
            }}
            className="border border-gray-300 text-sm rounded px-3 py-2 text-gray-700"
          >
            {speakers.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          {/* Year */}
          <select
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              handleUpdate();
            }}
            className="border border-gray-300 text-sm rounded px-3 py-2 text-gray-700"
          >
            {years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Search */}
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleUpdate();
            }}
            placeholder="Search sermons..."
            className="w-full border border-gray-300 text-sm rounded pl-10 pr-4 py-2 text-gray-700"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
    </section>
  );
}
