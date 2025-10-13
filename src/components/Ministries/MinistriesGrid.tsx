// src/components/ministries/MinistriesGrid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Globe, Heart, Music, Shield, Users } from "lucide-react";

interface Ministry {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const allMinistries: Ministry[] = [
  {
    icon: <BookOpen size={28} className="text-[#0077C8]" />,
    title: "Discipleship",
    category: "Teaching & Spiritual Growth",
    description:
      "Leads Bible teaching, small groups and one-to-one mentoring to grow believers in doctrine and practical Christian living.",
    image: "/ministries/discipleship.jpg",
    link: "/ministries/discipleship",
  },
  {
    icon: <Users size={28} className="text-[#0077C8]" />,
    title: "Youth & Welfare Departments",
    category: "Youth",
    description:
      "Oversees youth programs, mentorship, fellowship activities and welfare support that serve young people and their families.",
    image: "/ministries/youths-ministry.jpg",
    link: "/ministries/youth",
  },
  {
    icon: <Globe size={28} className="text-[#0077C8]" />,
    title: "Evangelism and Outreach",
    category: "Outreach",
    description:
      "Mobilizes the church to proclaim the gospel through community outreach, street evangelism and intentional invitation efforts.",
    image: "/ministries/evangelism.jpg",
    link: "/ministries/evangelism",
  },
  {
    icon: <Music size={28} className="text-[#0077C8]" />,
    title: "Praise & Worship Department",
    category: "Worship",
    description:
      "Leads corporate worship, trains musicians and worship teams, and creates Spirit-filled worship encounters for the congregation.",
    image: "/ministries/praise-team.jpg",
    link: "/ministries/worship",
  },
  {
    icon: <Heart size={28} className="text-[#0077C8]" />,
    title: "Social Welfare Department",
    category: "Care & Support",
    description:
      "Provides pastoral care and practical assistance — supporting the needy, coordinating weddings, funerals, hospital visits and other social needs.",
    image: "/ministries/social-welfare.jpg",
    link: "/ministries/social-welfare",
  },
  {
    icon: <Shield size={28} className="text-[#0077C8]" />,
    title: "Missions & Conferences Committee",
    category: "Missions",
    description:
      "Coordinates mission deployments, guest speakers and the planning/logistics for conferences and large ministry events.",
    image: "/ministries/missions.jpg",
    link: "/ministries/missions",
  },
  {
    icon: <Shield size={28} className="text-[#0077C8]" />,
    title: "Men's Department",
    category: "Men",
    description:
      "Disciples and mentors men for spiritual leadership, accountability, and responsible service in home, church and community.",
    image: "/ministries/men.jpg",
    link: "/ministries/men",
  },
  {
    icon: <Heart size={28} className="text-[#0077C8]" />,
    title: "Women Department",
    category: "Women",
    description:
      "Equips and empowers women through discipleship, prayer, mentorship and ministries that support families and community life.",
    image: "/ministries/women.jpg",
    link: "/ministries/women",
  },
  {
    icon: <Users size={28} className="text-[#0077C8]" />,
    title: "Ushering & Hospitality",
    category: "Hospitality",
    description:
      "Creates a welcoming, orderly environment for services and events — greeting guests, managing seating and assisting visitors.",
    image: "/ministries/ushering.jpg",
    link: "/ministries/ushering",
  },
  {
    icon: <BookOpen size={28} className="text-[#0077C8]" />,
    title: "Children's Ministry",
    category: "Children",
    description:
      "Nurtures children in the Word with age-appropriate Bible teaching, activities and safe discipleship programs.",
    image: "/ministries/children-ministry.jpg",
    link: "/ministries/children",
  },
   {
    icon: <BookOpen size={28} className="text-[#0077C8]" />,
    title: "Home Cell Fellowships",
    category: "Home Cell",
    description:
      "This is the department where we have church members in different localities meeting, for home meetings . We currently have home cell meetings in the following areas: Ngong, Roysambu, Kawangware.",
    image: "/ministries/children-ministry.jpg",
    link: "/ministries/children",
  },
];


export function MinistriesGrid({ category }: { category: string }) {
  const ministries = 
    category === "All"
      ? allMinistries
      : allMinistries.filter((m) => m.category === category);

  if (ministries.length === 0) {
    return (
      <div className="py-16 text-center text-gray-600">
        No ministries found for “<span className="font-semibold">{category}</span>.”
      </div>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ministries.map((m, idx) => (
          <motion.div
            key={m.title}
            className="bg-[#F9FAFB] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={m.image}
                alt={m.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{m.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {m.description}
              </p>
              <Link
                href={m.link}
                className="inline-block text-[#0077C8] hover:underline font-medium"
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
