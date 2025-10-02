// src/components/sermons/AudioLibrarySection.tsx
"use client";

import { Download } from "lucide-react";

const audioSermons = [
  {
    title: "The Power of Prayer",
    preacher: "Apostle Arthur Likhakasi",
    date: "2025-06-10",
    src: "/audio/the-power-of-prayer.mp3",
  },
  {
    title: "Living a Kingdom Life",
    preacher: "Pastor Mary W.",
    date: "2025-06-03",
    src: "/audio/living-a-kingdom-life.mp3",
  },
  {
    title: "Faith That Works",
    preacher: "Evangelist Daniel K.",
    date: "2025-05-27",
    src: "/audio/faith-that-works.mp3",
  },
];

export default function AudioLibrarySection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          🎧 Audio Sermon Library
        </h2>

        <div className="space-y-6">
          {audioSermons.map((sermon, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition border p-6 flex flex-col md:flex-row items-start justify-between gap-4"
            >
              <div className="flex-1 space-y-1">
                <h3 className="text-lg font-semibold text-[#0077C8]">{sermon.title}</h3>
                <p className="text-sm text-gray-600">
                  {sermon.preacher} &middot;{" "}
                  <span className="text-gray-500">
                    {new Date(sermon.date).toLocaleDateString()}
                  </span>
                </p>
                <audio controls className="w-full mt-2">
                  <source src={sermon.src} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              <a
                href={sermon.src}
                download
                className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition whitespace-nowrap"
              >
                <Download size={16} />
                Download MP3
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
