// src/components/sermons/SermonsGrid.tsx
import { SermonCard } from "./SermonCard";
import { sermons } from "@/constants/sermons";

export function SermonsGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Sermon Archive
        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {sermons.map((sermon) => (
    <SermonCard key={sermon.slug} sermon={sermon} sermons={sermons} />
  ))}
</div>

        {/* Load More - Optional */}
        <div className="text-center mt-10">
          <button className="text-[#0077C8] font-medium hover:underline">
            Load More Sermons
          </button>
        </div>
      </div>
    </section>
  );
}
