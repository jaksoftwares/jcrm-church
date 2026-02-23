// src/components/sermons/LatestSermonHighlight.tsx
import Link from "next/link";
import { PlayCircle, Headphones, FileText } from "lucide-react";
import { latestSermon, sermons, extractVideoId, toEmbedUrl } from "@/constants/sermons";

// Get the most recent sermon for the highlight
const getLatestSermonData = () => {
  const sortedSermons = [...sermons].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const mostRecent = sortedSermons[0];
  
  return {
    ...latestSermon,
    videoId: extractVideoId(mostRecent?.link) || "czNxNxuxccs",
    videoLink: mostRecent?.link || latestSermon.videoId,
  };
};

export function LatestSermonHighlight() {
  const sermonData = getLatestSermonData();
  const embedUrl = toEmbedUrl(sermonData.videoLink);

  return (
    <section
      id="latest-sermon"
      className="bg-[#F4F6F8] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Video or Thumbnail */}
        <div className="aspect-video w-full shadow-lg rounded-xl overflow-hidden">
          {embedUrl ? (
            <iframe
              width="100%"
              height="100%"
              src={`${embedUrl}?autoplay=0&rel=0`}
              title="Latest Sermon"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Video not available</p>
            </div>
          )}
        </div>

        {/* Right: Info & Actions */}
        <div>
          <h3 className="text-sm text-[#0077C8] font-semibold mb-2 uppercase">
            Latest Sermon
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-snug">
            {sermonData.title}
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            Preached by {sermonData.preacher} — {sermonData.date}
          </p>
          <p className="text-gray-700 mb-6">
            {sermonData.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={sermonData.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0077C8] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
            >
              <PlayCircle size={18} />
              Watch Sermon
            </a>
            <Link
              href={sermonData.audioSrc}
              className="flex items-center gap-2 border border-gray-300 text-gray-800 hover:border-[#0077C8] hover:text-[#0077C8] px-5 py-2.5 rounded-full text-sm font-medium transition"
            >
              <Headphones size={18} />
              Listen Audio
            </Link>
            <Link
              href={sermonData.notesSrc}
              className="flex items-center gap-2 text-sm text-[#D32F2F] font-semibold hover:underline"
            >
              <FileText size={18} />
              Download Notes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
