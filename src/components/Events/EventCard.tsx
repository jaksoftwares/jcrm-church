// src/components/events/EventCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

type Event = {
  title: string;
  date: string;
  location: string;
  link: string;
  description: string;
  image: string;
};

export function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-56">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{new Date(event.date).toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-700 text-sm">{event.description}</p>
        <Link
          href={event.link}
          className="inline-block mt-3 text-[#0077C8] font-medium hover:underline"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
