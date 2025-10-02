// src/components/read/BookPreviewModal.tsx
"use client";

import { Dialog } from "@headlessui/react";
import { X, Lock } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ebooks } from "@/constants/ebooks";

// Dynamically import PDFViewer to avoid server-side rendering issues
const PDFViewer = dynamic(() => import("./PDFViewer"), { ssr: false });

type Props = {
  bookId: string | null;
  onClose: () => void;
};

export function BookPreviewModal({ bookId, onClose }: Props) {
  const [numPages, setNumPages] = useState<number>(0);
  const [page, setPage] = useState(1);

  const book = ebooks.find((b) => b.id === bookId);
  const previewLimit = 3;

  useEffect(() => {
    setPage(1); // Reset page on book change
  }, [bookId]);

  if (!book) return null;

  const handleNext = () => {
    if (page < Math.min(numPages, previewLimit)) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <Dialog open={!!bookId} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white w-full max-w-3xl rounded-lg shadow-xl p-6 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <X size={24} />
          </button>

          {/* Title */}
          <Dialog.Title className="text-xl font-semibold mb-4 text-center">
            {book.title} – Preview
          </Dialog.Title>

          {/* PDF Preview */}
          <div className="flex justify-center border rounded overflow-hidden min-h-[300px]">
            <PDFViewer
              file={book.pdf}
              page={page}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            />
          </div>

          {/* Pagination Controls */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
            <button
              disabled={page === 1}
              onClick={handlePrev}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <p>
              Page {page} of {Math.min(numPages, previewLimit)}
            </p>
            <button
              disabled={page >= previewLimit}
              onClick={handleNext}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

          {/* Paywall */}
          {page === previewLimit && (
            <div className="mt-6 text-center bg-gray-100 p-4 rounded-md">
              <p className="text-gray-700 mb-2">
                You&apos;ve reached the preview limit.
              </p>
              <button
                onClick={() => alert("TODO: trigger payment modal")}
                className="inline-flex items-center gap-2 bg-[#D32F2F] text-white px-5 py-2 rounded hover:bg-red-700"
              >
                <Lock size={18} /> Unlock Full Book – $8
              </button>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
