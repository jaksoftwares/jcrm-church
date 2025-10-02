"use client";

import { motion } from "framer-motion";
import { Heart, Users, BookOpen,  Cross, Flame, Droplet } from "lucide-react";

const coreValues = [
  {
    icon: <Cross size={28} className="text-[#0077C8]" />,
    title: "Christ-Centered",
    description: "Jesus Christ is the foundation of our faith, message, and mission. (1 Cor 3:11; Col 1:17-18)",
  },
  {
    icon: <BookOpen size={28} className="text-[#0077C8]" />,
    title: "Biblical Authority",
    description: "We believe the Scriptures are God’s inspired Word and our final guide for life and practice. (2 Tim 3:16-17; 2 Pet 1:20-21)",
  },
  {
    icon: <Droplet size={28} className="text-[#0077C8]" />,
    title: "Spirit-Filled Life",
    description: "We embrace the baptism and gifts of the Holy Spirit for power, holiness, and ministry. (Acts 1:8; Acts 2:1-4; Gal 3:14)",
  },
  {
    icon: <Flame size={28} className="text-[#0077C8]" />,
    title: "Revival & Mission",
    description: "We are called to ignite revival and advance God’s kingdom locally and globally. (Matt 28:19; Eph 3:10; Acts 13:47)",
  },
  {
    icon: <Users size={28} className="text-[#0077C8]" />,
    title: "Community & Discipleship",
    description: "We grow together in love, accountability, and obedience as the body of Christ. (Eph 4:11-16; Heb 10:24-25)",
  },
  {
    icon: <Heart size={28} className="text-[#0077C8]" />,
    title: "Compassion",
    description: "We extend God’s healing, grace, and mercy to the lost, broken, and suffering. (Matt 25:35-36; James 1:27)",
  },
];

export function MissionVisionValues() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Mission, Vision & Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the biblical foundations that guide Jesus Come Revival Ministries.
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
              To preach the full gospel of Jesus Christ, raise Spirit-filled believers, 
              and equip the church to live in holiness, power, and fruitfulness. (Matt 28:19-20; Eph 4:12-13)
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
              To be a global apostolic center of revival — preparing the church for Christ’s return 
              and transforming nations through the power of the Holy Spirit. (Acts 1:8; 1 Thes 4:16-17)
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
