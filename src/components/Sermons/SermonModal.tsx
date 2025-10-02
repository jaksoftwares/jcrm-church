"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Sermon = {
  title: string;
  link: string; // https://youtu.be/... or https://www.youtube.com/watch?v=...
};

type SermonModalProps = {
  open: boolean;
  onClose: () => void;
  sermons: Sermon[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};

const buildEmbedUrl = (url: string | undefined) => {
  if (!url) return null;
  try {
    // simple safe extraction (handles both youtu.be and watch?v=)
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split(/[?&]/)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1].split(/[?&]/)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    // if someone already provided an embed URL we accept it
    if (url.includes("/embed/")) {
      return url.split("?")[0];
    }
    return null;
  } catch {
    return null;
  }
};

export function SermonModal({
  open,
  onClose,
  sermons,
  currentIndex,
  setCurrentIndex,
}: SermonModalProps) {
  const sermon = sermons?.[currentIndex];
  const embedUrl = buildEmbedUrl(sermon?.link ?? undefined);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);
  const [useNoCookie, setUseNoCookie] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // log the url for debugging
  useEffect(() => {
    if (open) {
      console.log("Sermon embed URL:", embedUrl);
      setIframeLoaded(false);
      setEmbedFailed(false);
      setUseNoCookie(false);
      // fallback timer: if iframe hasn't fired load in 2500ms, mark as failed
      const t = setTimeout(() => {
        if (!iframeLoaded) setEmbedFailed(true);
      }, 2500);
      return () => clearTimeout(t);
    } else {
      // reset when closed
      setIframeLoaded(false);
      setEmbedFailed(false);
      setUseNoCookie(false);
    }
  }, [open, embedUrl, iframeLoaded]);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < (sermons?.length ?? 0) - 1;

  const finalEmbed = embedUrl
    ? useNoCookie
      ? embedUrl.replace("www.youtube.com/embed", "www.youtube-nocookie.com/embed")
      : embedUrl
    : null;

  // Fallback open in YouTube
  const openInYoutube = () => {
    if (!sermon?.link) return;
    window.open(sermon.link, "_blank", "noopener,noreferrer");
  };

  if (!sermon) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black rounded-xl">
        <DialogHeader className="flex justify-between items-center p-4 bg-gray-900 text-white">
          <DialogTitle className="text-lg font-semibold">{sermon.title}</DialogTitle>
          <button onClick={onClose} className="p-2 hover:bg-gray-700 rounded-full transition">
            <X size={20} />
          </button>
        </DialogHeader>

        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          {finalEmbed && !embedFailed ? (
            <iframe
              key={finalEmbed + (useNoCookie ? "-nocookie" : "")}
              ref={iframeRef}
              onLoad={() => setIframeLoaded(true)}
              className="absolute top-0 left-0 w-full h-full"
              src={`${finalEmbed}?autoplay=1&rel=0`}
              title={sermon.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-4 p-6 text-center">
              <p className="text-white">
                Unable to play this video here.
              </p>

              <div className="flex gap-3">
                <button
                  className="bg-[#0077C8] text-white px-4 py-2 rounded-md"
                  onClick={openInYoutube}
                >
                  Open on YouTube
                </button>

                {/* only show nocookie retry if original embed exists */}
                {embedUrl && (
                  <button
                    className="border border-white text-white px-4 py-2 rounded-md"
                    onClick={() => {
                      setUseNoCookie((v) => !v);
                      setEmbedFailed(false);
                      setIframeLoaded(false);
                      // allow some time for new iframe to load
                      setTimeout(() => {
                        if (!iframeRef.current) setEmbedFailed(true);
                      }, 2500);
                    }}
                  >
                    Try privacy-enhanced embed
                  </button>
                )}
              </div>

              <p className="text-xs text-gray-300 mt-2">
                If the video owner disabled embedding or the video is private/age-restricted, it cannot be played inside the site.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
          <button
            disabled={!hasPrev}
            onClick={() => hasPrev && setCurrentIndex(currentIndex - 1)}
            className={`flex items-center gap-1 px-3 py-1 rounded-md transition ${hasPrev ? "hover:bg-gray-700" : "opacity-50 cursor-not-allowed"}`}
          >
            <ChevronLeft size={18} /> Prev
          </button>

          <button
            disabled={!hasNext}
            onClick={() => hasNext && setCurrentIndex(currentIndex + 1)}
            className={`flex items-center gap-1 px-3 py-1 rounded-md transition ${hasNext ? "hover:bg-gray-700" : "opacity-50 cursor-not-allowed"}`}
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
