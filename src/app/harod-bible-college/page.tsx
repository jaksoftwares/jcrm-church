"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, GraduationCap, Users, CalendarDays } from "lucide-react";

export default function HarodBibleCollegePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&q=80"
          alt="Harod Bible College"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Harod Bible College
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl text-lg md:text-xl"
          >
            Equipping believers with the Word of God for ministry, leadership, and purpose.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Harod Bible College</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Harod Bible College is an institution established under{" "}
              <span className="font-semibold">Jesus Come Revival Ministries (JCRM)</span>,
              dedicated to raising and equipping men and women for effective service in the Kingdom of God.
              Our goal is to build a solid foundation in biblical truth, sound doctrine, and practical ministry experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We offer structured courses designed to transform students spiritually, mentally,
              and practically — preparing them to impact their communities, churches, and nations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1000&q=80"
              alt="Students studying the Bible"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Core Pillars</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Biblical Foundation",
                text: "Grounding students in the Word of God as the ultimate authority and truth.",
              },
              {
                icon: GraduationCap,
                title: "Spiritual Formation",
                text: "Developing godly character, prayer discipline, and Christlike leadership.",
              },
              {
                icon: Users,
                title: "Community & Service",
                text: "Fostering unity and teamwork through outreach and ministry engagement.",
              },
              {
                icon: CalendarDays,
                title: "Practical Ministry",
                text: "Training students to apply their faith through missions, evangelism, and discipleship.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <item.icon className="mx-auto text-[#0077C8] mb-4" size={36} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="relative py-20 bg-[#0077C8] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enroll at Harod Bible College
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Are you called to serve? Harod Bible College invites you to deepen your knowledge
            of the Scriptures and develop your calling under experienced and Spirit-filled instructors.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0077C8] font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
          >
            Get in Touch for Enrollment
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Moments at Harod Bible College
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80",
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
            "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=600&q=80",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative h-56 rounded-xl overflow-hidden shadow-md"
            >
              <Image src={src} alt="College activity" fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
