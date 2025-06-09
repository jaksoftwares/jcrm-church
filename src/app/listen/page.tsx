"use client";
// app/page.tsx
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const resetFilters = () => {
    setSearchTerm("");
  };

  // Dummy data for sermon thumbnails (9 items)
  const sermons = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <section className="relative rounded-lg overflow-hidden mx-4 md:mx-16 lg:mx-32 xl:mx-40 my-8">
      <div className="flex flex-col md:flex-row items-center md:items-start mt-10 w-full">
        {/* Left content section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">FAITH BY HEARING</h1>
          <h2 className="text-xl md:text-3xl mb-4 md:mb-8">
            <span className="text-blue-500">Listen & Be</span>{" "}
            <span className="text-red-500">Transformed</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Deepen your faith with powerful sermons, inspiring devotionals,
            and uplifting worship content—all accessible anytime, anywhere.
            Whether you&apos;re looking to watch an impactful sermon, read an
            insightful devotional, or listen to spirit-filled worship,
            JCRM has you covered.
          </p>
        </div>

        {/* Right image section */}
        <div className="w-full md:w-3/4 relative h-[300px] md:h-[400px]">
          <Image
            src="/images/Rectangle 52.png"
            alt="Worship Background"
            fill
            className="object-contain rounded-lg"
            priority
          />
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
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
            <Image
              src="/images/Rotate.png"
              alt="reset"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span>Reset Filters</span>
          </button>
        </div>

        {/* Resources grid */}
        <div className="max-w-7xl mx-auto my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sermons.map((i) => (
              <div key={i} className="flex flex-col">
                <div className="relative overflow-hidden rounded-lg shadow-md h-48">
                  <Image
                    src="/images/sermon-thumbnail.jpg"
                    alt="Building Strong Families"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-xl font-bold text-white">BUILDING STRONG FAMILIES</h3>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-center text-gray-800 font-medium">The Beatitudes</p>
                </div>
              </div>
            ))}
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
