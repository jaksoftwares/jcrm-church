"use client";

import { useMemo } from "react";
import { filterEvents, EVENT_CATEGORY_LIST, EventFilters } from "@/constants/events";
import { EventCard } from "./EventCard";

type EventsGridProps = {
  category: string;
  keyword: string;
  status?: 'upcoming' | 'past' | 'all';
};

export default function EventsGrid({ 
  category, 
  keyword, 
  status = 'upcoming' 
}: EventsGridProps) {
  const filters: EventFilters = {
    category: category as EventFilters['category'],
    keyword,
    status,
  };

  const filteredEvents = useMemo(() => {
    return filterEvents(filters);
  }, [category, keyword, status]);

  // Get section title based on status
  const getSectionTitle = () => {
    switch (status) {
      case 'past':
        return 'Past Events';
      case 'upcoming':
      default:
        return 'Upcoming Events';
    }
  };

  // Get empty state message
  const getEmptyMessage = () => {
    if (category !== 'All' || keyword) {
      return `No ${status === 'past' ? 'past ' : ''}events found matching your criteria.`;
    }
    return status === 'past' 
      ? 'No past events to display.' 
      : 'No upcoming events at the moment. Check back soon!';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          {getSectionTitle()}
        </h2>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">{getEmptyMessage()}</p>
            {status === 'past' && (
              <p className="text-gray-500 text-sm">
                Browse our upcoming events to join us in person!
              </p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
