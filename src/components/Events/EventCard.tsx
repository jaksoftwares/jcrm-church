"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

export type Event = {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  slug: string; // ✅ Added this
  description: string;
  image: string;
};

export function EventCard({ event }: { event: Event }) {
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);

  const formattedDate = !isNaN(start.getTime())
    ? `${start.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })} - ${end.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}`
    : "Date TBA";

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
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{formattedDate}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} />
          <span>{event.location}</span>
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
