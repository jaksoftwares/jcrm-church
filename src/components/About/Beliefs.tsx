"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const beliefs = [
  {
    title: "The Bible",
    content:
      "We believe the Bible is the inspired, infallible, and authoritative Word of God. It is the foundation for faith, doctrine, and life.",
  },
  {
    title: "The Trinity",
    content:
      "We believe in one eternal God revealed in three persons: Father, Son, and Holy Spirit — co-equal, co-existent, and co-eternal.",
  },
  {
    title: "Jesus Christ",
    content:
      "We believe that Jesus Christ is the Son of God, fully God and fully man, born of a virgin, crucified, resurrected, and coming again in glory.",
  },
  {
    title: "Salvation",
    content:
      "We believe that salvation is by grace through faith in Jesus Christ alone. It is a free gift offered to all who believe and repent.",
  },
  {
    title: "The Holy Spirit",
    content:
      "We believe in the baptism, gifts, and ongoing work of the Holy Spirit in empowering believers for holy living and ministry.",
  },
  {
    title: "The Church",
    content:
      "We believe the Church is the Body of Christ — called to worship, disciple, serve, and represent the Kingdom of God on earth.",
  },
];

export function Beliefs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">What We Believe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our foundational beliefs guide our faith, values, and every expression of ministry at JCRM.
          </p>
        </div>

        <div className="space-y-4">
          {beliefs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
              >
                <span className="font-medium text-gray-800">{item.title}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-[#0077C8]" />
                ) : (
                  <ChevronDown size={20} className="text-[#0077C8]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-sm leading-relaxed">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
