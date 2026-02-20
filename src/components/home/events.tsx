// src/components/Home/events.tsx
/**
 * Home Page Events Section
 * Displays upcoming events using the centralized events provider
 */

import Image from 'next/image';
import Link from 'next/link';
import { 
  getUpcomingEvents, 
  formatEventDateRange,
  getEventDay,
  getEventMonth 
} from '@/constants/events';

export default function Events() {
  // Get upcoming events (max 4 for this section)
  const upcomingEvents = getUpcomingEvents().slice(0, 4);

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">UPCOMING EVENTS</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {upcomingEvents.map((event) => {
          const day = getEventDay(event.startDate);
          const month = getEventMonth(event.startDate);

          return (
            <div 
              key={event.slug} 
              className="border rounded-lg shadow-md p-4 text-left relative"
            >
              <span className="absolute top-2 left-3 text-sm text-sky-600 font-semibold">
                UPCOMING EVENT
              </span>
              <span className="absolute top-2 right-3 text-red-600 font-bold text-lg text-center">
                {day} <br /> {month}
              </span>
              <h3 className="text-lg font-semibold mt-6 line-clamp-2">{event.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{event.location}</p>
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={300}
                className="rounded-lg mt-4 shadow-md w-full h-auto object-cover"
              />
              <Link
                href={`/events/${event.slug}`}
                className="inline-block mt-3 text-sm text-[#0077C8] font-medium hover:underline"
              >
                View Details →
              </Link>
            </div>
          );
        })}
      </div>

      {/* View All Events Link */}
      <div className="mt-8">
        <Link 
          href="/events" 
          className="inline-block bg-[#0077C8] hover:bg-[#005fa3] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
        >
          View All Events
        </Link>
      </div>
    </section>
  );
}
