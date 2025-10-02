"use client";

import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { useState } from "react";
import { SermonModal } from "./SermonModal";

type Sermon = {
  title: string;
  slug: string;
  thumbnail: string;
  preacher: string;
  date: string;
  link: string;
};

export function SermonCard({ sermon, sermons }: { sermon: Sermon; sermons: Sermon[] }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(
    sermons.findIndex((s) => s.slug === sermon.slug)
  );

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer group block rounded-xl overflow-hidden bg-white border border-gray-100 hover:border-[#0077C8] shadow-sm hover:shadow-lg transition-all duration-300"
      >
        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={sermon.thumbnail}
            alt={sermon.title}
            fill
            className="object-cover transform group-hover:scale-105 transition duration-300 rounded-t-xl"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#0077C8] transition">
            {sermon.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User size={16} className="text-gray-400" />
            <span>{sermon.preacher}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar size={14} className="text-gray-400" />
            <span>{new Date(sermon.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <SermonModal
        open={open}
        onClose={() => setOpen(false)}
        sermons={sermons}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
