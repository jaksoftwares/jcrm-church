import Image from "next/image";
import React from "react";

const mediaItems = [
  {
    id: 1,
    title: "WATCH VIDEO SERMONS",
    description:
      "Strengthen your faith by watching powerful video sermons. Gain insights into the Word, grow spiritually, and stay connected with our online community.",
    imgSrc: "/images/devotion.png",
    alt: "Video Sermons",
    titleColor: "text-red-600",
  },
  {
    id: 2,
    title: "AUDIOBOOKS",
    description:
      "Listen to God’s Word through inspiring audiobooks. Perfect for learning on the go, these messages will uplift and transform your faith.",
    imgSrc: "/images/image2.png",
    alt: "Audiobooks",
    titleColor: "text-sky-600",
    reverse: true,
  },
  {
    id: 3,
    title: "READ",
    description:
      "Discover the wisdom of God’s Word through deep, insightful reading. Our collection of Christian books will help you strengthen your knowledge and spiritual journey.",
    imgSrc: "/images/image3.png",
    alt: "Read Books",
    titleColor: "text-yellow-600",
  },
];

const WatchReadListen: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 text-gray-900">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-wide">
          WATCH | READ | LISTEN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {mediaItems.map(({ id, title, description, imgSrc, alt, titleColor, reverse }) => (
            <React.Fragment key={id}>
              {!reverse ? (
                <>
                  {/* Text */}
                  <div className="flex flex-col justify-center">
                    <h3 className={`text-2xl font-semibold ${titleColor} mb-4 tracking-tight`}>
                      {title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-80 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={imgSrc}
                      alt={alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                      priority={id === 1}
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Image */}
                  <div className="relative w-full h-80 rounded-lg shadow-lg overflow-hidden group cursor-pointer order-last md:order-first">
                    <Image
                      src={imgSrc}
                      alt={alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center">
                    <h3 className={`text-2xl font-semibold ${titleColor} mb-4 tracking-tight`}>
                      {title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchReadListen;
