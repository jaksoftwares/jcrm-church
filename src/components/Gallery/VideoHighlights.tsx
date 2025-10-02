"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { VideoModal } from "./VideoModal";

const videos = [
  {
    title: "Worship Explosion Night",
    description: "An intense evening of worship and prayer.",
    thumbnail: "/gallery/thumbs/worship-night.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Youth Sunday Recap",
    description: "Vibrant, youthful, and spirit-filled service.",
    thumbnail: "/gallery/thumbs/youth-sunday.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Community Outreach Recap",
    description: "Our impact in the streets and villages.",
    thumbnail: "/gallery/thumbs/outreach.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
   {
    title: "Community Outreach Recap",
    description: "Our impact in the streets and villages.",
    thumbnail: "/gallery/thumbs/outreach.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export function VideoHighlights() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Video Highlights</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Watch powerful moments captured during JCRM’s events and services.
          </p>
        </div>

        {/* Scrollable Carousel */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-[800px] sm:min-w-full">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="w-[300px] bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedVideo(video.link)}
              >
                <div className="relative h-48">
                  <Image
                    src={`/assets/images${video.thumbnail}`}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-white opacity-80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal url={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
