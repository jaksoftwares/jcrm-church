"use client";

import React from "react";

const services = [
  {
    id: 1,
    title: "Sunday Service",
    time: "9:00 AM & 1:00 PM",
    borderColor: "border-blue-500",
    gradientFrom: "from-transparent",
    gradientTo: "to-blue-400",
  },
  {
    id: 2,
    title: "Midweek Prayers",
    time: "Wednesday 5:30PM - 7:30 PM",
    borderColor: "border-red-500",
    gradientFrom: "from-transparent",
    gradientTo: "to-red-400",
  },
    {
    id: 3,
    title: "Intercessory Prayers",
    time: "Thursday 5:30PM - 7:30 PM",
    borderColor: "border-cyan-500",
    gradientFrom: "from-transparent",
    gradientTo: "to-orange-400",
  },
  {
    id: 4,
    title: "Overnight Prayer",
    time: "Friday 10:00 PM to Saturday 5:00 AM",
    borderColor: "border-green-500",
    gradientFrom: "from-transparent",
    gradientTo: "to-green-400",
  },
];

const WeeklyServices: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">OUR WEEKLY SERVICES</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Join us weekly for powerful worship, prayer, and studying the Word together.
        </p>
      </div>

      <div className="flex justify-center gap-8 flex-wrap px-4">
        {services.map(({ id, title, time, borderColor, gradientFrom, gradientTo }) => (
          <div
            key={id}
            className={`
              w-80 sm:w-96
              border-4 ${borderColor}
              rounded-xl p-8 text-center shadow-xl relative overflow-hidden
              transition-transform duration-300 transform
              hover:scale-105 hover:shadow-2xl cursor-pointer
              bg-white
            `}
            role="button"
            tabIndex={0}
            aria-label={`${title} at ${time}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                // Could add click behavior here if needed
              }
            }}
          >
            <div
              className={`
                absolute top-0 left-0 w-full h-full
                bg-gradient-to-br
                ${gradientFrom} ${gradientTo}
                opacity-30
                pointer-events-none
                rounded-xl
              `}
            ></div>

            <h3 className="text-2xl font-bold text-gray-900 relative z-10">{title}</h3>
            <p className="text-lg text-gray-700 font-semibold relative z-10 mt-2">{time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyServices;
