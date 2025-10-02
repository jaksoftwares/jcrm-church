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
            Jesus Come Revival Ministries (JCRM) is a Christ-centered, Bible-believing ministry dedicated to proclaiming the gospel of Jesus Christ and equipping believers to live Spirit-filled lives.
            Rooted in the authority of Scripture and the power of the Holy Spirit, JCRM upholds the foundational truths of the Christian faith, including salvation through Jesus, the baptism of the Holy Spirit,
            divine healing, and the hope of Christ’s soon return. We are committed to raising disciples, building strong local churches, and advancing God’s Kingdom through teaching, prayer, worship, and the 
            demonstration of God’s power. At JCRM, we believe in living out our faith with holiness, love, and service, as we prepare the church for the coming of the Lord.
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
