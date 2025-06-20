// src/components/events/EventSpotlight.tsx
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";

export default function EventSpotlight() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
          Featured Event Spotlight
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/events/august-event.jpg"
              alt="Featured Event"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Kingdom Leadership Conference 2025
            </h3>
            <p className="text-gray-600 text-lg">
              Join visionary leaders and ministers for a transformative time of teaching, impartation, and spiritual equipping. Designed to empower both emerging and seasoned leaders for Kingdom impact.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>August 3, 2025 | 9:00 AM</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>JCRM Conference Hall</span>
              </div>
            </div>

            <Link
              href="/events/kingdom-leadership-conference"
              className="inline-block mt-4 bg-[#0077C8] text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#005fa3] transition"
            >
              Learn More & Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
