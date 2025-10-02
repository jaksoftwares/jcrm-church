"use client";

import { Flame, HandHeart, CloudLightning, Users, Mic, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const uniqueTraits = [
  {
    icon: <Flame size={28} className="text-[#0077C8]" />,
    title: "Revival Atmosphere",
    description: "A strong presence of the Holy Spirit is evident in every gathering, releasing healing, fire, and divine encounters.",
  },
  {
    icon: <Mic size={28} className="text-[#0077C8]" />,
    title: "Prophetic Voice",
    description: "JCRM functions prophetically — speaking into destinies, seasons, and nations with accuracy and power.",
  },
  {
    icon: <ShieldCheck size={28} className="text-[#0077C8]" />,
    title: "Deliverance Mandate",
    description: "We are called to break spiritual chains and equip believers to walk in freedom, authority, and identity in Christ.",
  },
  {
    icon: <Users size={28} className="text-[#0077C8]" />,
    title: "Kingdom Family Culture",
    description: "We’re not just a church — we’re a spiritual family that grows together, supports one another, and pursues God’s agenda.",
  },
  {
    icon: <HandHeart size={28} className="text-[#0077C8]" />,
    title: "Compassion-Driven Missions",
    description: "We engage in both spiritual and practical missions — feeding, clothing, and healing communities across the region.",
  },
  {
    icon: <CloudLightning size={28} className="text-[#0077C8]" />,
    title: "Power-Filled Worship",
    description: "JCRM worship is intense, prophetic, and breakthrough-oriented — not entertainment, but spiritual warfare and encounter.",
  },
];

export function UniqueIdentity() {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Makes JCRM Unique?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We are not just another church — JCRM is a divine assignment, operating under an apostolic and prophetic mandate.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {uniqueTraits.map((trait, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4">{trait.icon}</div>
              <h4 className="text-lg font-semibold text-[#0077C8] mb-2">{trait.title}</h4>
              <p className="text-gray-700 text-sm">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
