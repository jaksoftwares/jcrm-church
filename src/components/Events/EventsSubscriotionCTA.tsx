"use client";

import { Youtube } from "lucide-react";
import Link from "next/link";

export default function EventsSubscriptionCTA() {
  return (
    <section className="bg-[#fefefe] border-t border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Stay Connected with JCRM
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Get weekly updates on sermons, events, and community moments — directly to your inbox or feed.
        </p>

        {/* Email Subscription Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
            required
          />
          <button
            type="submit"
            className="bg-[#D32F2F] hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Subscribe
          </button>
        </form>

        {/* YouTube CTA */}
        <div className="mt-8">
          <p className="text-gray-700 mb-2">Prefer YouTube?</p>
          <Link
            href="https://youtube.com/@jcrmchannel" // 🔁 replace with actual channel URL
            target="_blank"
            className="inline-flex items-center gap-2 text-[#D32F2F] hover:underline font-medium"
          >
            <Youtube size={20} />
            Follow JCRM on YouTube
          </Link>
        </div>
      </div>
    </section>
  );
}
