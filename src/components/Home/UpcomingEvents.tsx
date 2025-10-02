"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Annual December Conference",
    date: "2025-12-26T14:00:00",
    location: "JCRM Town Center",
    link: "/events/monthly-worship-night",
    description:
      "You are all invired for this forth coming church conference that will be taking place from the 26th of December, 2025, to 31st. Come and be blessed.",
    image: "/events/event1.jpg",
  },
//   {
//     title: "Kingdom Leadership Conference",
//     date: "2025-08-03T09:00:00",
//     location: "JCRM Conference Hall",
//     link: "/events/kingdom-leadership-conference",
//     description:
//       "A leadership summit for ministry workers, department heads, and emerging leaders to be equipped and empowered.",
//     image: "/events/event2.jpg",
//   },
//   {
//   title: "Youth Revival Weekend",
//   date: "2025-08-17T15:00:00",
//   location: "JCRM Youth Grounds",
//   link: "/events/youth-revival-weekend",
//   description:
//     "A powerful 3-day youth retreat featuring breakout sessions, worship, and teachings designed to ignite a generation for Christ.",
//   image: "/events/event3.jpg",
// },
// {
//   title: "Family Restoration Service",
//   date: "2025-09-01T10:30:00",
//   location: "JCRM Main Auditorium",
//   link: "/events/family-restoration-service",
//   description:
//     "A special Sunday service focused on healing, unity, and spiritual restoration for families across all generations.",
//   image: "/events/event4.jpg",
// }
];

export function UpcomingEvents() {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Upcoming Events</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Join us in our next gatherings and experience the move of God with us.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event) => {
            const dateObj = new Date(event.date);
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString("default", { month: "short" });

            return (
              <motion.div
                key={event.title}
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all"
              >
                {/* Event Image */}
                <div className="relative w-full h-52">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col gap-4">
                  {/* Date Badge */}
                  <div className="bg-[#0077C8] text-white w-14 h-14 rounded-lg flex flex-col items-center justify-center font-bold text-sm">
                    <span className="text-xl">{day}</span>
                    <span>{month.toUpperCase()}</span>
                  </div>

                  {/* Event Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-2">{event.description}</p>
                    <div className="text-sm text-gray-500 flex flex-col gap-1">
                      <span className="flex items-center gap-2">
                        <Clock size={16} />{" "}
                        {dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} /> {event.location}
                      </span>
                    </div>
                    <Link
                      href={event.link}
                      className="mt-4 inline-block bg-[#D32F2F] hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/events"
            className="inline-block bg-[#0077C8] hover:bg-[#005fa3] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
