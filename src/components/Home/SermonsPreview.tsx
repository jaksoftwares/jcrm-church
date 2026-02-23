"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { sermonPreviews, sermons, extractVideoId, toEmbedUrl } from "@/constants/sermons";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export function SermonsPreview() {
  const [selectedSermon, setSelectedSermon] = useState<typeof sermonPreviews[0] | null>(null);

  const handleSermonClick = (sermon: typeof sermonPreviews[0]) => {
    // Find the matching sermon from the full list to get the video link
    const fullSermon = sermons.find(
      (s) => s.title === sermon.title && s.preacher.includes(sermon.speaker.split(" ")[sermon.speaker.split(" ").length - 1])
    );
    
    if (fullSermon) {
      setSelectedSermon({ ...sermon, link: fullSermon.link });
    } else {
      setSelectedSermon(sermon);
    }
  };

  const getEmbedUrl = () => {
    if (!selectedSermon?.link) return "";
    return toEmbedUrl(selectedSermon.link);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D32F2F] text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-red-50 rounded-full">
            Messages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Latest Sermons
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Be inspired and empowered by the Word of God through our latest messages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermonPreviews.map((sermon, index) => (
            <motion.div
              key={sermon.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => handleSermonClick(sermon)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${sermon.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#D32F2F] p-5 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {sermon.duration}
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-[#0077C8] transition-colors">
                  {sermon.title}
                </h3>
                <p className="text-sm text-gray-600">By {sermon.speaker}</p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{sermon.date}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSermonClick(sermon);
                    }}
                    className="text-[#D32F2F] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Watch Now
                    <PlayCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Player Modal */}
        <Dialog open={!!selectedSermon} onOpenChange={() => setSelectedSermon(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black rounded-xl">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              {selectedSermon?.link && getEmbedUrl() ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`${getEmbedUrl()}?autoplay=1&rel=0`}
                  title={selectedSermon.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900">
                  <a 
                    href={selectedSermon?.link || "https://youtube.com/@jcrmchurch"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#D32F2F] hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
                  >
                    <PlayCircle size={24} />
                    Watch on YouTube
                  </a>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        <div className="text-center mt-12">
          <a 
            href="/sermons" 
            className="bg-[#D32F2F] hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            View All Sermons
          </a>
        </div>
      </div>
    </section>
  );
}
