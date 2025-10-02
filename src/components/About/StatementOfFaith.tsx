"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

const statementOfFaith = [
  {
    title: "The Scriptures",
    description:
      "We believe in the plenary, verbal inspiration of the 66 books of the Bible, equal in all parts and without error in its origin, as the accepted canon of Scripture.",
    scripture: "2 Tim 3:16; 1 Cor 2:13; 2 Pet 1:20-21",
  },
  {
    title: "The Godhead",
    description:
      "We believe in the eternal Godhead revealed as one God in three persons: Father, Son, and Holy Spirit — distinguishable but indivisible.",
    scripture: "Matt 28:19; 2 Cor 13:14",
  },
  {
    title: "The Fall of Man",
    description:
      "We believe in the creation, test, and fall of man as recorded in Genesis, his total spiritual depravity, and inability to attain divine righteousness.",
    scripture: "Rom 5:12,18",
  },
  {
    title: "The Lord Jesus Christ",
    description:
      "We believe Jesus Christ is the Savior of men, conceived of the Holy Spirit, born of the virgin Mary — very God and very man.",
    scripture: "Luke 1:26-35; John 1:18; Isa 7:14; 9:6",
  },
  {
    title: "The Work of Christ",
    description:
      "We believe Christ died for our sins, was buried, rose again the third day, and personally appeared to His disciples.",
    scripture: "1 Cor 15:1-4; Rom 4:25",
  },
  {
    title: "The Second Coming",
    description:
      "We believe in the bodily ascension of Jesus, His exaltation, and His personal, literal, and bodily return for the Church.",
    scripture: "John 14:2-3; 1 Thes 4:13-18",
  },
  {
    title: "Salvation",
    description:
      "We believe sinners are saved by grace through repentance and faith in the finished work of the cross of Calvary.",
    scripture: "Eph 2:8-9; Heb 9:11; Rom 5:17",
  },
  {
    title: "Water Baptism",
    description:
      "We believe in water baptism by immersion in the name of the Father, Son, and Holy Spirit, in obedience to Christ’s command.",
    scripture: "Matt 28:19; Acts 2:36-39; 19:1-6",
  },
  {
    title: "Baptism in the Holy Spirit",
    description:
      "We believe the baptism in the Holy Spirit is an experience subsequent to salvation, with the evidence of speaking in tongues.",
    scripture: "Acts 2:1-4; 8:14-17; 10:44-46; Gal 3:14",
  },
  {
    title: "Gifts of the Spirit",
    description:
      "We believe in the operation of the gifts of the Holy Spirit, as enumerated in 1 Corinthians, for the edification of the Church.",
    scripture: "1 Cor 12; 1 Cor 14",
  },
  {
    title: "Spirit-Filled Life",
    description:
      "We believe in a Spirit-filled life, separated from the world, and growing in holiness in the fear of God.",
    scripture: "Eph 5:18; 2 Cor 6:14; 7:1",
  },
  {
    title: "Divine Healing",
    description:
      "We believe in divine healing through faith in Christ, as practiced in the early Church.",
    scripture: "Acts 4:30; Rom 8:11; 1 Cor 12:9; James 5:14",
  },
  {
    title: "Communion",
    description:
      "We believe in the Table of the Lord (Communion) as a memorial for believers.",
    scripture: "1 Cor 11:23-24",
  },
  {
    title: "Eternity",
    description:
      "We believe in eternal life for believers and eternal punishment for the unbelievers.",
    scripture: "Mark 9:43-48; 2 Thes 1:9; Rev 20:10-15",
  },
  {
    title: "Satan and Judgment",
    description:
      "We believe in the reality of Satan, his defeat through Christ, and his final judgment with his angels.",
    scripture: "Matt 25:41; Rev 20:10-15",
  },
  {
    title: "Church Government",
    description:
      "We believe in plural leadership in the Church: apostles, prophets, evangelists, pastors, and teachers, with accountability and biblical qualifications.",
    scripture: "Eph 4:11-16; 1 Tim 3",
  },
];

export function StatementOfFaith() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our Statement of Faith
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These are the foundational beliefs that guide Jesus Come Revival Ministries.
          </p>
        </div>

        <div className="space-y-4">
          {statementOfFaith.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left"
                >
                  <span className="flex items-center gap-2 font-semibold text-gray-800">
                    <BookOpen size={18} className="text-[#0077C8]" />
                    {item.title}
                  </span>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-gray-700 text-sm leading-relaxed"
                    >
                      <p className="mb-2">{item.description}</p>
                      <p className="text-[#0077C8] font-medium text-xs">
                        Scriptures: {item.scripture}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
