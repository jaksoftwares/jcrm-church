import Image from "next/image";
import React from "react";

type Action = {
  title: string;
  description: string;
  iconSrc: string;
};

const getInvolvedActions: Action[] = [
  {
    title: "Visit us this Sunday",
    description: "Come and worship with us",
    iconSrc: "/vectors/rocket.svg",
  },
  {
    title: "Become a member",
    description: "Grow in faith and community",
    iconSrc: "/vectors/support.svg",
  },
  {
    title: "Join a ministry",
    description: "Use your gifts for God's glory!",
    iconSrc: "/vectors/app.svg",
  },
  {
    title: "Give & support",
    description: "Partner with us in advancing God's kingdom.",
    iconSrc: "/vectors/credit-card.svg",
  },
];

const GetInvolved: React.FC = () => {
  return (
    <section className="bg-gray-200 py-16 flex justify-center">
      <div className="w-11/12 lg:w-3/5 p-6 md:p-12 rounded-md space-y-12">
        <h2 className="text-center font-semibold text-3xl md:text-4xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Get Involved
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-32 md:gap-x-10">
          {getInvolvedActions.map(({ title, description, iconSrc }, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <div className="relative w-6 h-6">
                  <Image
                    src={iconSrc}
                    alt={`${title} icon`}
                    layout="fill"
                    objectFit="contain"
                    priority={idx === 0} // prioritize first icon for loading
                  />
                </div>
                <p className="font-semibold text-lg md:text-xl">{title}</p>
              </div>
              <p className="text-slate-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
