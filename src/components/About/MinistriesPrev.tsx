"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Music, Users, Shield, Heart, BookOpen } from "lucide-react";

const ministries = [
  {
    icon: <Music size={28} className="text-[#0077C8]" />,
    title: "Worship Ministry",
    description: "Carries the prophetic sound and leads the church in intense worship encounters that shift atmospheres.",
  },
  {
    icon: <Users size={28} className="text-[#0077C8]" />,
    title: "Youth & Teens",
    description: "A vibrant ministry raising kingdom-minded young people through mentorship, fellowship, and activation.",
  },
  {
    icon: <Shield size={28} className="text-[#0077C8]" />,
    title: "Deliverance & Healing",
    description: "Ministers freedom from spiritual bondage, inner healing, and restoration through prayer and spiritual warfare.",
  },
  {
    icon: <Heart size={28} className="text-[#0077C8]" />,
    title: "Compassion Outreach",
    description: "Extends the love of Christ through feeding programs, community service, and missions to the vulnerable.",
  },
  {
    icon: <BookOpen size={28} className="text-[#0077C8]" />,
    title: "School of Ministry",
    description: "Trains and equips believers in theology, ministry gifts, and kingdom leadership for effective service.",
  },
];

export function MinistriesPreview() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Ministries</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Every soul matters. At JCRM, we serve and build the body through diverse ministries that reflect our kingdom mandate.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {ministries.map((ministry, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#F9FAFB] rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4">{ministry.icon}</div>
              <h4 className="text-lg font-semibold text-[#0077C8] mb-2">{ministry.title}</h4>
              <p className="text-gray-700 text-sm">{ministry.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/ministries"
            className="inline-block bg-[#D32F2F] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition"
          >
            Explore All Ministries
          </Link>
        </div>
      </div>
    </section>
  );
}
