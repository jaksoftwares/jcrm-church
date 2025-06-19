// src/components/ministries/MinistriesGrid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Ministry {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const allMinistries: Ministry[] = [
  {
    title: "Children Ministry",
    category: "Children",
    description: "Guiding our little ones in worship, play, and biblical teaching.",
    image: "/ministries/children.jpg",
    link: "/ministries/children",
  },
  {
    title: "Youth Ministry",
    category: "Youth",
    description: "Empowering the next generation to walk boldly for Christ.",
    image: "/ministries/youth.jpg",
    link: "/ministries/youth",
  },
  {
    title: "Women’s Ministry",
    category: "Women",
    description: "Equipping women to lead, serve, and grow in grace.",
    image: "/ministries/women.jpg",
    link: "/ministries/women",
  },
  {
    title: "Men’s Ministry",
    category: "Men",
    description: "Building strong men of faith, character, and purpose.",
    image: "/ministries/men.jpg",
    link: "/ministries/men",
  },
  {
    title: "Worship Ministry",
    category: "Worship",
    description: "Leading the church into powerful, prophetic worship.",
    image: "/ministries/worship.jpg",
    link: "/ministries/worship",
  },
  {
    title: "Outreach & Evangelism",
    category: "Outreach",
    description: "Taking the gospel beyond the walls to transform communities.",
    image: "/ministries/outreach.jpg",
    link: "/ministries/outreach",
  },
  {
    title: "School of Ministry",
    category: "School of Ministry",
    description: "Training believers in theology, gifts, and kingdom leadership.",
    image: "/ministries/children.jpg",
    link: "/ministries/school-of-ministry",
  },
    {
    title: "Bible Study Groups",
    category: "Discipleship",
    description: "Training believers in theology, gifts, and kingdom leadership.",
    image: "/ministries/bible-study.jpg",
    link: "/ministries/school-of-ministry",
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
