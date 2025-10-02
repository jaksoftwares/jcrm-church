// src/components/ministries/ImpactStats.tsx
"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Children Served Monthly", value: "500+" },
  { label: "Youth Groups Active", value: "10" },
  { label: "Outreach Events/Year", value: "20" },
  { label: "Small Groups", value: "35" },
  { label: "Volunteers Engaged", value: "200+" },
];

export function ImpactStats() {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Impact
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <span
                className={`text-3xl font-extrabold ${
                  idx % 2 === 0 ? "text-[#0077C8]" : "text-[#D32F2F]"
                }`}
              >
                {stat.value}
              </span>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
