// src/components/read/PDFViewer.tsx
"use client";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.js";

// // 👇 This line is **essential** to avoid the worker error
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Props = {
  file: string;
  page: number;
  onLoadSuccess: ({ numPages }: { numPages: number }) => void;
};

export default function PDFViewer({ file, page, onLoadSuccess }: Props) {
  return (
    <Document
    file={{ url: file }}
    onLoadSuccess={onLoadSuccess}
    loading={<div className="text-center py-10">Loading PDF...</div>}
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
