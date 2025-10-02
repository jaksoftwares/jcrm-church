"use client";

import Image from "next/image";

interface GalleryGridProps {
  category: string;
}

const galleryData = [
  {
    src: "/gallery/image1.jpg",
    alt: "Worship moment",
    category: "Worship & Services",
  },
  {
    src: "/gallery/image2.jpg",
    alt: "Youth praising",
    category: "Youth Ministry",
  },
  {
    src: "/gallery/image3.jpg",
    alt: "Outreach in the community",
    category: "Outreaches & Missions",
  },
  {
    src: "/gallery/image4.jpg",
    alt: "Children's church activity",
    category: "Children's Church",
  },
  {
    src: "/gallery/image5.jpg",
    alt: "Annual Conference",
    category: "Conferences & Crusades",
  },
  {
    src: "/gallery/image6.jpg",
    alt: "Baptism at JCRM",
    category: "Baptism & Testimonies",
  },
  {
    src: "/gallery/image1.jpg",
    alt: "Altar Worship",
    category: "Worship & Services",
  },
];

export function GalleryGrid({ category }: GalleryGridProps) {
  const filteredImages =
    category === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === category);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {filteredImages.map((img, index) => (
        <div
          key={index}
          className="relative h-48 md:h-60 rounded-lg overflow-hidden shadow-sm"
        >
          <Image
            src={`${img.src}`}
            alt={img.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
