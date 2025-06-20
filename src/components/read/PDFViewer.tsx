"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useMemo } from "react";

// Use the local worker from the public folder
pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.js";

type Props = {
  file: string;
  page: number;
  onLoadSuccess: ({ numPages }: { numPages: number }) => void;
};

export default function PDFViewer({ file, page, onLoadSuccess }: Props) {
  const memoizedFile = useMemo(() => ({ url: file }), [file]);

  return (
    <Document
      file={memoizedFile}
      onLoadSuccess={onLoadSuccess}
      loading={<div className="text-center py-10">Loading PDF...</div>}
      error={<div className="text-center text-red-600 py-10">Failed to load PDF.</div>}
    >
      <Page
        pageNumber={page}
        width={500}
        renderAnnotationLayer={false}
        renderTextLayer={false}
      />
    </Document>
  );
}
