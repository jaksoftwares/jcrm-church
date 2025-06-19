import Image from "next/image";
import Link from "next/link";

export function AboutHighlight() {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/about.png"
            alt="Pastor speaking"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About JCRM</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Jesus Christ Reachout Ministries (JCRM) is a Christ-centered ministry devoted to transforming lives through the gospel, prayer, outreach, and community service.
            We are passionate about reaching the lost, equipping believers, and building strong families and ministries across the globe.
          </p>
          <Link
            href="/about"
            className="text-[#0077C8] font-medium hover:underline transition"
          >
            Learn more about our mission →
          </Link>
        </div>
      </div>
    </section>
  );
}
