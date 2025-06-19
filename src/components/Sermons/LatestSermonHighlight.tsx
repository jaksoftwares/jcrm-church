// src/components/sermons/LatestSermonHighlight.tsx
import Link from "next/link";
import { PlayCircle, Headphones, FileText } from "lucide-react";

export function LatestSermonHighlight() {
  return (
    <section
      id="latest-sermon"
      className="bg-[#F4F6F8] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Video or Thumbnail */}
        <div className="aspect-video w-full shadow-lg rounded-xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Latest Sermon"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Right: Info & Actions */}
        <div>
          <h3 className="text-sm text-[#0077C8] font-semibold mb-2 uppercase">
            Latest Sermon
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-snug">
            Living by the Spirit: Walking in Daily Power
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            Preached by Apostle John Mark — June 16, 2025
          </p>
          <p className="text-gray-700 mb-6">
            Explore what it means to live a Spirit-filled life in today&apos;s world. This message will challenge you to realign with the Holy Spirit and walk in power and purpose.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/sermons/living-by-the-spirit"
              className="flex items-center gap-2 bg-[#0077C8] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
            >
              <PlayCircle size={18} />
              Watch Sermon
            </Link>
            <Link
              href="/audio/living-by-the-spirit.mp3"
              className="flex items-center gap-2 border border-gray-300 text-gray-800 hover:border-[#0077C8] hover:text-[#0077C8] px-5 py-2.5 rounded-full text-sm font-medium transition"
            >
              <Headphones size={18} />
              Listen Audio
            </Link>
            <Link
              href="/notes/living-by-the-spirit.pdf"
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
