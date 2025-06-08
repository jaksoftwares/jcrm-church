import React from "react";
import Image from "next/image";

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-12 bg-white text-center px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* Image on left (on md+ screens) */}
        <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/slider2.jpg"
            alt="JCRM community gathering"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-lg"
          />
        </div>

        {/* Text content on right */}
        <div className="w-full md:w-1/2 text-left md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            WELCOME TO JCRM
          </h2>
          <p className="text-sky-500 uppercase text-sm font-semibold tracking-wide mb-6">
            Bringing Souls, Transforming Nations
          </p>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Welcome to Jesus Come Revival Ministries (JCRM). We are a Christ-centered community dedicated to spreading the love, power, and Word of God. Whether you are here to worship, learn, connect, or grow in faith, we invite you to experience the presence of God with us. Experience our ministries across local & global outreach, and be part of a global movement of revival and transformation. You are loved, belong, and have a purpose!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
