// app/events/page.tsx
"use client";


import { useState } from "react";


import EventsHero from "@/components/Events/EventsHero";
// Future imports for additional sections
import EventsGrid from "@/components/Events/EventsGrid";
import EventsFilterPanel from "@/components/Events/EventsFilterPanel";




export default function EventsPage() {
  const [filters, setFilters] = useState({ category: "All", keyword: "" });
  return (
    <main className="min-h-screen">
      {/* Section 1: Hero */}
      <EventsHero />


    

      <EventsFilterPanel onFilterChange={setFilters} />

      {/* Section 2: Upcoming Events Grid */}
      <EventsGrid category={filters.category} keyword={filters.keyword} />
    </main>
  );
}