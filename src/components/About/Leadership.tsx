"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  // Apostolic Leadership
  {
    name: "Apostle Arthur Lenax",
    title: "Founder & Presiding Apostle",
    image: "/about/Apostle-arthur.png",
    bio: "Apostle Arthur is the visionary founder and spiritual father of JCRM, carrying a strong mandate for revival, deliverance, and raising kingdom reformers across nations.",
  },
  {
    name: "Pastor Winnie Lenax",
    title: "Cofounder & Pastor",
    image: "/about/pastor-winnie.png",
    bio: "Pastor Winnie serves alongside Apostle Arthur in pioneering and shepherding JCRM, with a special grace in teaching, counseling, and nurturing believers into maturity in Christ.",
  },
];


export function Leadership() {
  return (
    <section className="bg-[#F4F6F8] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Leadership</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our leaders are called to equip the saints, shepherd the flock, and raise a Spirit-filled generation.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-[#0077C8]">{leader.name}</h4>
              <p className="text-sm text-gray-600 italic mb-2">{leader.title}</p>
              <p className="text-sm text-gray-700">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
