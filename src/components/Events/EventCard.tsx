"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock } from "lucide-react";
import { 
  Event,
  formatEventDateRange,
  formatEventTimeRange,
  EVENT_CATEGORIES
} from "@/constants/events";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const formattedDate = formatEventDateRange(event.startDate, event.endDate);
  const formattedTime = formatEventTimeRange(event.startDate, event.endDate);
  const categoryConfig = EVENT_CATEGORIES[event.category];

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-56">
        <Image
          src={event.image || "/images/default-event.jpg"}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Category Badge */}
        {categoryConfig && (
          <div 
            className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: categoryConfig.color }}
          >
            {event.category}
          </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{event.title}</h3>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{formattedDate}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock size={16} />
          <span>{formattedTime}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} />
          <span className="line-clamp-1">{event.location}</span>
        </div>

        <p className="text-gray-700 text-sm line-clamp-3">{event.description}</p>

        <Link
          href={`/events/${event.slug}`}
          className="inline-block mt-3 text-[#0077C8] font-medium hover:underline"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
