"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Music, Users, Shield, Heart, BookOpen, Globe } from "lucide-react";

const ministries = [
  {
    icon: <BookOpen size={28} className="text-[#0077C8]" />,
    title: "Discipleship",
    description:
      "Leads Bible teaching, small groups and one-to-one mentoring to grow believers in doctrine and practical Christian living.",
  },
  {
    icon: <Users size={28} className="text-[#0077C8]" />,
    title: "Youth & Welfare Departments",
    description:
      "Oversees youth programs, mentorship, fellowship activities and welfare support that serve young people and their families.",
  },
  {
    icon: <Globe size={28} className="text-[#0077C8]" />,
    title: "Evangelism and Outreach",
    description:
      "Mobilizes the church to proclaim the gospel through community outreach, street evangelism and intentional invitation efforts.",
  },
  {
    icon: <Music size={28} className="text-[#0077C8]" />,
    title: "Praise & Worship Department",
    description:
      "Leads corporate worship, trains musicians and worship teams, and creates Spirit-filled worship encounters for the congregation.",
  },
  {
    icon: <Heart size={28} className="text-[#0077C8]" />,
    title: "Compassion / Social Welfare Department",
    description:
      "Provides pastoral care and practical assistance — supporting the needy, coordinating weddings, funerals, hospital visits and other social needs.",
  },
  {
    icon: <Shield size={28} className="text-[#0077C8]" />,
    title: "Missions & Conferences Committee",
    description:
      "Coordinates mission deployments, guest speakers and the planning/logistics for conferences and large ministry events.",
  },
  {
    icon: <Shield size={28} className="text-[#0077C8]" />,
    title: "Men's Department",
    description:
      "Disciples and mentors men for spiritual leadership, accountability, and responsible service in home, church and community.",
  },
  {
    icon: <Heart size={28} className="text-[#0077C8]" />,
    title: "Women Department",
    description:
      "Equips and empowers women through discipleship, prayer, mentorship and ministries that support families and community life.",
  },
  {
    icon: <Users size={28} className="text-[#0077C8]" />,
    title: "Ushering & Hospitality",
    description:
      "Creates a welcoming, orderly environment for services and events — greeting guests, managing seating and assisting visitors.",
  },
  {
    icon: <BookOpen size={28} className="text-[#0077C8]" />,
    title: "Children's Ministry",
    description:
      "Nurtures children in the Word with age-appropriate Bible teaching, activities and safe discipleship programs.",
  },
];

export function MinistriesPreview() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Ministries</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Every soul matters. JCRM serves and builds the body through these ministries and departments.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {ministries.map((ministry, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#F9FAFB] rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
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
