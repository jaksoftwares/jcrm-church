"use client";

import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { events } from "@/constants/events";

export function UpcomingEvents() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#0077C8] text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-blue-50 rounded-full">
            Join Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Be part of our next gatherings and experience the move of God with us.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const start = new Date(event.startDate);
            const end = new Date(event.endDate);

            const startDay = start.getDate();
            const startMonth = start.toLocaleString("default", { month: "short" });
            const endDay = end.getDate();
            const endMonth = end.toLocaleString("default", { month: "short" });

            const sameMonth = startMonth === endMonth;
            const formattedDate = sameMonth
              ? `${startMonth} ${startDay}–${endDay}, ${end.getFullYear()}`
              : `${startMonth} ${startDay} – ${endMonth} ${endDay}, ${end.getFullYear()}`;

            // Create slug dynamically from event title
            const slug = event.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute top-6 left-6 bg-[#0077C8] text-white w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-bold shadow-xl">
                    <span className="text-3xl">{startDay}</span>
                    <span className="text-sm uppercase">{startMonth}</span>
                  </div>

                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {event.category}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-8 space-y-4 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#0077C8] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  <div className="space-y-2 pt-2 text-gray-600 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-[#0077C8]" />
                      </div>
                      <span className="font-medium">{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <Clock className="w-5 h-5 text-[#0077C8]" />
                      </div>
                      <span className="font-medium">
                        {start.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                        {" – "}
                        {end.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 p-2 rounded-lg">📍</div>
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>

                  {/* ✅ Dynamic Link */}
                  <Link
                    href={`/events/${slug}`}
                    className="block w-full bg-[#D32F2F] hover:bg-red-600 text-white py-3 rounded-full font-semibold text-center transition-all duration-300 mt-6"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link
            href="/events"
            className="inline-block bg-[#0077C8] hover:bg-[#005fa3] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
