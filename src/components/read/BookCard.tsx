"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Image from "next/image";

type Props = {
  book: {
    id: string;
    title: string;
    author: string;
    cover: string;
  };
  onPreview: (bookId: string) => void;
};

export function BookCard({ book, onPreview }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
    >
      <div className="relative h-60 w-full">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
          <p className="text-sm text-gray-600">By {book.author}</p>
        </div>
        <button
          onClick={() => onPreview(book.id)}
          className="mt-4 bg-[#0077C8] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#005fa3] transition"
        >
          <BookOpen size={18} /> Read Preview
        </button>
      </div>
    </motion.div>
  );
}
