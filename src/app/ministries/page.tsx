import Image from "next/image";
import React from "react";

const ministries = [
  {
    title: "Worship & Creative Arts Ministries",
    description:
      "The Worship Team leads the congregation in heartfelt praise and worship during services. The Media & Production Team supports our services through live streams, photography, and video production, and the Drama & Creative Arts Ministry allows members to express their faith through artistic performances.",
    image_url: "/images/ministries/praiseImg1.jpeg",
  },
  {
    title: "Discipleship & Christian Growth Ministries",
    description:
      "Bible Study Groups offer small group fellowships for in-depth Bible study and prayer, while the Prayer Ministry brings together intercessors to pray for the needs of the church and community. The New Believers’ Class is designed to guide those new to the faith in their spiritual journey.",
    image_url: "/images/ministries/bibleStudyImg.png",
  },
  {
    title: "Outreach & Evangelism Ministries",
    description:
      "The Evangelism & Missions team spreads the Gospel locally and globally, while the Community Outreach ministry serves the needy through food drives, clothing donations, and other initiatives.",
    image_url: "/images/ministries/evangelismImg.png",
  },
  {
    title: "Life & Family Groups",
    description:
      "The Men’s Ministry empowers men to grow in their faith and build strong relationships, while the Women’s Ministry offers fellowship, mentorship, and empowerment for women. The Youth Ministry guides teenagers and young adults in their spiritual walk, and the Children’s Ministry teaches kids biblical truths in fun and engaging ways",
    image_url: "/images/ministries/familyGroupsImg.jpeg",
  },
  {
    title: "Service & Support Ministries",
    description:
      "Our Service & Support Ministries play a vital role in creating a seamless and welcoming environment for everyone who walks through our doors. These ministries work behind the scenes to ensure that every service, event, and activity runs smoothly, allowing the church to function effectively and remain a safe, inviting space for all.",
    image_url: "/images/ministries/supportImg.jpeg",
  },
];

const MinistriesPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="w-full relative bg-center bg-cover"
        style={{
          backgroundImage: "url(/images/ministries/worshipImg.jpeg)",
          height: "620px",
        }}
      >
        <div className="absolute left-1/2 top-[35%] transform -translate-x-1/2 text-center uppercase text-white">
          <h1 className="text-5xl md:text-8xl font-semibold text-transparent stroke-text">
            Ministries
          </h1>
          <p className="text-xl md:text-4xl">Serve, grow, and connect</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full flex flex-col items-center bg-white py-12 lg:py-32 gap-12 lg:gap-36">
        <div className="w-full md:w-2/3 bg-gray-100 shadow-md text-center p-6 md:px-12 md:py-16 rounded-md">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Ministries are the heartbeat of JCRM. They are more than just
            programs—they are opportunities to live out your faith, build
            meaningful relationships, and make a lasting impact in our church
            and community. No matter where you are in your spiritual journey,
            there’s a ministry that’s right for you.
          </p>
        </div>

        {/* Ministry Categories */}
        <div className="w-11/12 lg:w-4/5 space-y-12 lg:space-y-32">
          <h2 className="font-semibold text-3xl md:text-5xl text-center uppercase">
            Ministry Categories
          </h2>

          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-6 md:space-y-0"
            >
              <div className="space-y-4 md:space-y-8 w-full md:w-1/2 px-4 md:px-0">
                <h3 className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {ministry.title}
                </h3>
                <p className="text-gray-700">{ministry.description}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                  Learn more
                </button>
              </div>
              <div className="w-full md:w-96 h-60 relative rounded-md overflow-hidden">
                <Image
                  src={ministry.image_url}
                  alt={ministry.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MinistriesPage;
