"use client";

import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

const milestones = [
  {
    year: "2012",
    title: "JCRM Founded",
    description:
      "Jesus Christ Revelation Ministry was birthed in a small hall with a handful of passionate believers led by Apostle John and Bishop Grace.",
  },
  {
    year: "2015",
    title: "Breakthrough in Deliverance Ministry",
    description:
      "Massive growth began as the church became known for powerful prayer, healing, and deliverance services across the region.",
  },
  {
    year: "2018",
    title: "JCRM Media Launched",
    description:
      "JCRM extended its reach globally through livestreams, online teachings, and digital evangelism.",
  },
  {
    year: "2021",
    title: "New HQ Sanctuary Opened",
    description:
      "JCRM dedicated its new state-of-the-art sanctuary, expanding capacity for worship, teaching, and community programs.",
  },
  {
    year: "2024",
    title: "International Missions Expansion",
    description:
      "Missions teams launched outreach in Uganda, Rwanda, and Tanzania as JCRM’s apostolic vision expanded regionally.",
  },
];

export function ChurchTimeline() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Our Journey of Faith
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to a thriving global ministry — here are some key moments that shaped JCRM.
          </p>
        </div>

        <div className="relative border-l-4 border-[#0077C8] pl-8 space-y-10">
          {milestones.map((event, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon marker */}
              <div className="absolute -left-5 top-1 bg-[#0077C8] rounded-full p-2 text-white">
                <CalendarCheck size={16} />
              </div>

              {/* Content */}
              <div className="bg-[#F9FAFB] p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-[#0077C8]">{event.year} – {event.title}</h4>
                <p className="text-gray-700 mt-2">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
