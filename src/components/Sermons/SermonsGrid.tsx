// src/components/sermons/SermonsGrid.tsx
import { SermonCard } from "./SermonCard";

const mockSermons = [
  {
    title: "Are you for Sin or Righteousness?",
    slug: "are-you-for-sin-or-righteousness",
    thumbnail: "/sermons/are-you-for-sin-or-righteous.jpg",
    preacher: "Apostle Arthur Likhakasi",
    date: "2025-06-16",
  },
  {
    title: "Arise and Praise the Lord",
    slug: "arise-and-praise-the-lord",
    thumbnail: "/sermons/arise-and-praise.jpg",
    preacher: "Apostle Arthur Likhakasi",
    date: "2025-06-09",
  },
  {
    title: "Overcoming Evil Gates",
    slug: "overcoming-evil-gates",
    thumbnail: "/sermons/overcoming-evil-gates.jpg",
    preacher: "Apostle Arthur Likhakasi",
    date: "2025-06-02",
  },
  {
    title: "Walking in Authority",
    slug: "walking-in-authority",
    thumbnail: "/sermons/overcoming-evil-gates.jpg",
    preacher: "Pastor Mary W.",
    date: "2025-06-09",
  },
  {
    title: "Faith That Moves Mountains",
    slug: "faith-that-moves-mountains",
    thumbnail: "/sermons/arise-and-praise.jpg",
    preacher: "Apostle John Mark",
    date: "2025-06-02",
  },
  {
    title: "The Power of Fasting",
    slug: "the-power-of-fasting",
    thumbnail: "/sermons/arise-and-praise.jpg",
    preacher: "Evangelist Daniel K.",
    date: "2025-05-26",
  },
];

export function SermonsGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Sermon Archive
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockSermons.map((sermon) => (
            <SermonCard key={sermon.slug} sermon={sermon} />
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
