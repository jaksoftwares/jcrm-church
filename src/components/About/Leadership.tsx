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

  // Pastoral Leadership
  {
    name: "Pastor Erick Midaki",
    title: "Pastor – Discipleship",
    image: "/about/pastor-erick-midaki.jpg",
    bio: "Pastor Erick oversees discipleship and spiritual growth, equipping believers to be rooted in the Word and live out their faith in practical obedience.",
  },
  {
    name: "Pastor Eugene Shibeka",
    title: "Pastor – Youth & Social Welfare",
    image: "/about/shibeka.jpg",
    bio: "Pastor Eugene provides pastoral oversight for the youth and welfare departments, with a heart for empowering the next generation and supporting families in times of need.",
  },

  // Evangelism & Missions
  {
    name: "Hillary Loyelo",
    title: "Evangelism & Outreach",
    image: "/about/pastor-hilary.jpg",
    bio: "Hillary leads the evangelism and outreach ministry, mobilizing believers to spread the gospel through missions, crusades, and community initiatives.",
  },
  {
    name: "Sister Celestine Kituyi",
    title: "Missions & Conferences Committee",
    image: "/about/celestine-kituyi.jpg",
    bio: "Sister Celestine coordinates missions and conferences, ensuring that gatherings are Spirit-filled, well-organized, and impactful for kingdom advancement.",
  },

  // Departments
  {
    name: "Amos Shibutse",
    title: "Men’s Department",
    image: "/about/amos.jpg",
    bio: "Amos leads the men’s department, mentoring men to grow in faith, responsibility, and godly leadership in the home, church, and society.",
  },
  {
    name: "Mildred Adekha",
    title: "Women’s Department",
    image: "/about/mildred.jpg",
    bio: "Mildred oversees the women’s department, equipping women to walk in their divine calling and serve as pillars in the church and community.",
  },
  {
    name: "Geoffrey Alulu",
    title: "Praise & Worship Department",
    image: "/about/jeff-alulu.png",
    bio: "Geoffrey directs the worship ministry, raising a team of anointed worshippers who usher believers into God’s presence through music and praise.",
  },
    {
    name: "Victor Siero",
    title: "Media & Communications Department",
    image: "/about/victor.jpg",
    bio: "Victor is incharge of the media and communications sector, ensuring communications ,and services are shared accodingly and in due time.",
  },
  {
    name: "Viona Lihavi",
    title: "Ushering & Hospitality",
    image: "/about/viona2.jpg",
    bio: "Viona leads the ushering and hospitality team, creating a welcoming and orderly environment for all who come to fellowship at JCRM.",
  },
  {
    name: "Beverlyne Khamusali",
    title: "Children’s Ministry",
    image: "/about/beverlyne-khamusali.jpeg",
    bio: "Beverlyne leads the children’s ministry, nurturing the young in God’s Word and laying strong spiritual foundations for the next generation.",
  },
  {
    name: "Dennis Masinde",
    title: "Church Development and Projects",
    image: "/about/placeholder.png",
    bio: "Dennis is incharge of handling and overseeing church development and projects."
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
