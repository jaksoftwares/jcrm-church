// src/components/ministries/JoinMinistryCTA.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function JoinMinistryCTA() {
  return (
    <section className="bg-[#F4F6F8] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Find Your Place to Serve
          </h2>
          <p className="text-gray-600 text-base">
            Every gift matters. Whether you&apos;re called to lead, teach, support, or simply love — there&apos;s a place for you in ministry. Take a step of faith and discover your role in the body of Christ.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
        >
          Join a Ministry
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
