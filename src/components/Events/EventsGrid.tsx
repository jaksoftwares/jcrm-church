"use client";

import { useMemo } from "react";
import { events } from "@/constants/events";
import { EventCard } from "./EventCard";

type EventsGridProps = {
  category: string;
  keyword: string;
};

export default function EventsGrid({ category, keyword }: EventsGridProps) {
  const normalizedKeyword = keyword.toLowerCase().trim();
  const normalizedCategory = category.toLowerCase();

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchKeyword =
        event.title.toLowerCase().includes(normalizedKeyword) ||
        event.location.toLowerCase().includes(normalizedKeyword) ||
        event.description.toLowerCase().includes(normalizedKeyword);

      const matchCategory =
        normalizedCategory === "all" ||
        event.category.toLowerCase().includes(normalizedCategory);

      return matchKeyword && matchCategory;
    });
  }, [normalizedCategory, normalizedKeyword]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Upcoming Events
        </h2>

        {filteredEvents.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No events found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.link} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
