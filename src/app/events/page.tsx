// app/events/page.tsx
"use client";

import { useState } from "react";

import EventsHero from "@/components/Events/EventsHero";
import EventsGrid from "@/components/Events/EventsGrid";
import EventsFilterPanel, { FilterState } from "@/components/Events/EventsFilterPanel";

export default function EventsPage() {
  const [filters, setFilters] = useState<FilterState>({ 
    category: "All", 
    keyword: "",
    status: "upcoming" 
  });

  return (
    <main className="min-h-screen">
      {/* Section 1: Hero */}
      <EventsHero />

      {/* Section 2: Filter Panel */}
      <EventsFilterPanel onFilterChange={setFilters} />

      {/* Section 3: Events Grid */}
      <EventsGrid 
        category={filters.category} 
        keyword={filters.keyword}
        status={filters.status}
      />
    </main>
  );
}
