import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6"
      style={{ height: "75vh" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/jcrm-home.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          BRINGING JESUS TO <br />{" "}
          <span className="">EVERY HOME</span>
        </h1>
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-16 right-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center sm:items-end w-full sm:w-auto px-4 sm:px-0">
        <a
          href="#"
          className="w-48 sm:w-64 h-14 sm:h-16 flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-semibold rounded-full shadow-xl hover:from-red-700 hover:to-red-800 transition-all ease-in-out duration-300 transform hover:scale-105"
        >
          Watch Our <br className="hidden sm:inline" /> Latest Sermons
          <i className="fas fa-arrow-right ml-2 rotate-upward mr-4"></i>
        </a>

        <a
          href="#"
          className="w-48 sm:w-64 h-14 sm:h-16 flex items-center justify-center border-2 border-white text-white text-lg font-semibold rounded-full shadow-xl hover:bg-white hover:text-black hover:border-black transition-all ease-in-out duration-300 transform hover:scale-105 ml-4"
        >
          Get <br className="hidden sm:inline" /> Involved
          <i className="fas fa-arrow-right ml-2 rotate-upward"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
