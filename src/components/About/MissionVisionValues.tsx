"use client";

import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Globe, Mic, Cross } from "lucide-react";

const coreValues = [
  {
    icon: <Cross size={28} className="text-[#0077C8]" />,
    title: "Christ-Centered",
    description: "Everything we do is anchored in the life, teachings, and power of Jesus Christ.",
  },
  {
    icon: <BookOpen size={28} className="text-[#0077C8]" />,
    title: "Biblical Integrity",
    description: "We uphold the authority of Scripture and pursue truth with conviction and humility.",
  },
  {
    icon: <Users size={28} className="text-[#0077C8]" />,
    title: "Community",
    description: "We are a family united in faith, loving one another and growing together in Christ.",
  },
  {
    icon: <Globe size={28} className="text-[#0077C8]" />,
    title: "Global Impact",
    description: "We are called to the nations — preaching the Gospel and transforming societies.",
  },
  {
    icon: <Mic size={28} className="text-[#0077C8]" />,
    title: "Prophetic Voice",
    description: "We boldly declare God's word and bring clarity to His people in this generation.",
  },
  {
    icon: <Heart size={28} className="text-[#0077C8]" />,
    title: "Compassion",
    description: "We extend the love and grace of Jesus to the hurting, broken, and lost.",
  },
];

export function MissionVisionValues() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Mission, Vision & Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the foundational pillars that define who we are as a church.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="bg-[#F4F6F8] p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-[#0077C8] mb-3">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To raise a Spirit-filled generation that reveals Jesus Christ, transforms lives,
              and brings kingdom impact to the nations.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#F4F6F8] p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#0077C8] mb-3">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a global apostolic center of revival, raising kingdom ambassadors who walk in power,
              purpose, and prophetic destiny.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#F9FAFB] rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{value.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
