"use client";

import { BookCard } from "./BookCard";
import { ebooks } from "@/constants/ebooks";

export function FeaturedBooks({ onPreview }: { onPreview: (id: string) => void }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Featured E-Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ebooks.map((book) => (
            <BookCard key={book.id} book={book} onPreview={onPreview} />
          ))}
        </div>
      </div>
    </section>
  );
}
