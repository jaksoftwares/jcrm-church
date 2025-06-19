"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Apostle Arthur Likhakasi",
    title: "Founder & Presiding Apostle",
    image: "/about/apostle-arthur-likhakasi.jpg",
    bio: "Apostle John is the visionary leader and founder of JCRM, with a passion for revival, deliverance, and raising kingdom reformers across nations.",
  },
  {
    name: "Pastor Paul Gisiri",
    title: "Lead Pastor",
    image: "/about/pastor-paul-gisiri.jpg",
    bio: "Bishop Grace is a prophetic teacher and spiritual mother, leading pastoral care, prayer ministry, and women's empowerment at JCRM.",
  },
  {
    name: "Pastor Hillary Khatasio",
    title: "Youth & Worship Pastor",
    image: "/about/pastor-hillary-khatasio.jpg",
    bio: "Pastor Daniel leads the youth movement, worship department, and digital outreach with energy, innovation, and a prophetic edge.",
  },
   {
    name: "Pastor Erick Midaki",
    title: "Youth & Worship Pastor",
    image: "/about/pastor-erick-midaki.jpg",
    bio: "Pastor Daniel leads the youth movement, worship department, and digital outreach with energy, innovation, and a prophetic edge.",
  },
   {
    name: "Pastor Godfrey Andabwa",
    title: "Youth & Worship Pastor",
    image: "/about/pastor-godfrey-andabwa.jpg",
    bio: "Pastor Daniel leads the youth movement, worship department, and digital outreach with energy, innovation, and a prophetic edge.",
  },
   {
    name: "Pastor Eugene Shibeka",
    title: "Youth & Worship Pastor",
    image: "/about/pastor-eugene-shibeka.jpg",
    bio: "Pastor Daniel leads the youth movement, worship department, and digital outreach with energy, innovation, and a prophetic edge.",
  },
  // Add more as needed
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
