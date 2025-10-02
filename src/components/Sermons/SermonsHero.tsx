import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function SermonsHero() {
  return (
    <section className="relative bg-[#F9FAFB] ">
      {/* Background image layer */}
      <div className="">
        <Image
          src="/sermons/hero2.jpg"
          alt="JCRM Sermons"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Sermons & Teachings
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Grow in faith, wisdom, and truth. Explore powerful teachings from JCRM’s ministers that speak to your everyday walk with Christ.
        </p>
        <Link
          href="#latest-sermon"
          className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Watch Latest
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
