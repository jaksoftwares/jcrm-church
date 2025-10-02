"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ChurchIntro() {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome to Jesus Come Revival Ministries
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            We are  a Christ-centered, Bible-believing ministry dedicated to proclaiming the gospel of Jesus Christ and equipping believers to live Spirit-filled lives.
            Rooted in the authority of Scripture and the power of the Holy Spirit, JCRM upholds the foundational truths of the Christian faith, including salvation through Jesus, the baptism of the Holy Spirit,
            divine healing, and the hope of Christ’s soon return.
            
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
             We are committed to raising disciples, building strong local churches, and advancing God’s Kingdom through teaching, prayer, worship, and the 
            demonstration of God’s power. At JCRM, we believe in living out our faith with holiness, love, and service, as we prepare the church for the coming of the Lord.
            </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full h-[300px] md:h-[400px] relative rounded-xl overflow-hidden shadow-md"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/about/church-intro.jpg"
            alt="JCRM service"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
