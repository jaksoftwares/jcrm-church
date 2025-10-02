"use client";

// app/watch/page.tsx
import React, { useState } from "react";
import Image from "next/image";

const videoIds = [
  "KzH9M7kDRKE",
  "kQ0VGJBoQNc",
  "Dc2mh-fjIpA",
  "czNxNxuxccs",
  "ygKzxmn7Uj4",
  "plXoL2J3yWA",
  "gnoifsMTPTI",
  "UGpUa6qW_K4",
  "YCHDK9aqr-4",
  "uXE1SAdAfpg",
  "nO4W0RwCbq4",
  "AmboecR-hyI",
];

export default function WatchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(videoIds);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term) {
      setFilteredVideos(videoIds);
      return;
    }

    // For demonstration, filtering by video ID contains search term
    const filtered = videoIds.filter((id) => id.toLowerCase().includes(term));
    setFilteredVideos(filtered);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setFilteredVideos(videoIds);
  };

  return (
    <section className="relative rounded-lg overflow-hidden mx-4 md:mx-16 lg:mx-32 xl:mx-40 my-8">
      <div className="flex flex-col md:flex-row items-center md:items-start mt-10 w-full">
        {/* Left content */}
        <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">SERMONS AT JCRM</h1>
          <h2 className="text-xl md:text-3xl mb-4 md:mb-8">
            <span className="text-blue-500">Grow in the </span>
            <span className="text-red-500">Word</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Deepen your faith with powerful sermons, inspiring devotionals, and uplifting worship content—all accessible anytime, anywhere. Whether you&apos;re
            looking to watch an impactful sermon, read an insightful devotional, or listen to spirit-filled worship, JCRM has you covered.
          </p>
        </div>

        {/* Right image */}
        <div className="w-full md:w-3/4 relative h-[300px] md:h-[400px]">
          <Image
            src="/images/resources1.png"
            alt="Worship Background"
            fill
            className="rounded-lg object-cover"
            priority={true}
          />
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="max-w-7xl mx-auto border-b border-gray-300 pt-16">
        <div className="flex justify-center md:justify-start gap-10 md:gap-40">
          <a href="/watch" className="px-4 py-2 font-semibold border-b-2 border-blue-500">
            Watch
          </a>
          <a href="/listen" className="px-4 py-2 font-semibold">
            Listen
          </a>
          <a href="/read" className="px-4 py-2 font-semibold">
            Read
          </a>
        </div>
      </div>

      <div className="mx-4 md:mx-16 lg:mx-32 xl:mx-40">
        {/* Search and filter */}
        <div className="max-w-7xl mx-auto my-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 px-4 pt-8 items-center">
          <div className="relative w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="pl-8 pr-10 py-2 border rounded-full bg-gray-200 w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-2 top-2.5 text-black pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button
            onClick={() => setSearchTerm("")}
            className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-xl"
          >
            Cancel
          </button>
          <button
            onClick={resetFilters}
            className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 rounded-xl"
          >
            <Image src="/images/Rotate.png" alt="reset" width={20} height={20} />
            <span>Reset Filters</span>
          </button>
        </div>

        {/* Resources grid */}
        <div className="max-w-7xl mx-auto my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredVideos.length > 0 ? (
              filteredVideos.map((videoId) => (
                <iframe
                  key={videoId}
                  className="w-full h-56 md:h-64"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">No videos found.</p>
            )}
          </div>
        </div>

        {/* View More button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-black text-white rounded-full">View More</button>
        </div>
      </div>
    </section>
  );
}
