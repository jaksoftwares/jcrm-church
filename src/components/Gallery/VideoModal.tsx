"use client";

import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { X } from "lucide-react";

interface VideoModalProps {
  url: string;
  onClose: () => void;
}

export function VideoModal({ url, onClose }: VideoModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-3xl mx-auto aspect-video bg-black rounded-xl shadow-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white text-black rounded-full p-1 shadow-md hover:bg-gray-100 transition"
        >
          <X size={20} />
        </button>
        <ReactPlayer url={url} playing controls width="100%" height="100%" />
      </div>
    </motion.div>
  );
}
