"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ministries = [
{
    title: "Worship Ministry",
    image: "/ministries/worship.jpg",
    link: "/ministries/worship",
    description: "Ushering God’s presence through music, sound, and spiritual sacrifice.",
  },
  {
    title: "Children Ministry",
    image: "/ministries/children.jpg",
    link: "/ministries/children",
    description: "Raising godly children through worship, fun, and biblical teachings.",
  },
  {
    title: "Youth Ministry",
    image: "/ministries/youth.jpg",
    link: "/ministries/youth",
    description: "Empowering youth to live boldly for Christ in today’s world.",
  },
  {
    title: "Women Ministry",
    image: "/ministries/women.jpg",
    link: "/ministries/women",
    description: "Uplifting women to grow spiritually, lead, and serve with grace.",
  },
  {
    title: "Men Ministry",
    image: "/ministries/men.jpg",
    link: "/ministries/men",
    description: "Building strong men rooted in faith, family, and leadership.",
  },
 
];

export function MinistriesPreview() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Ministries
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Discover the many ways we serve and grow together in Christ.
          </p>
        </div>

        {/* Scrollable carousel */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 md:space-x-10 w-max">
            {ministries.map((ministry) => (
              <motion.div
                key={ministry.title}
                className="bg-[#F9FAFB] rounded-xl shadow-md min-w-[280px] max-w-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="relative w-full h-44">
                  <Image
                    src={ministry.image}
                    alt={ministry.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {ministry.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 mb-4">
                    {ministry.description}
                  </p>
                  <Link
                    href={ministry.link}
                    className="text-[#0077C8] font-medium hover:underline"
                  >
                    Explore →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/ministries"
            className="inline-block bg-[#0077C8] hover:bg-[#005fa3] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            View All Ministries
          </Link>
        </div>
      </div>
    </section>
  );
}
