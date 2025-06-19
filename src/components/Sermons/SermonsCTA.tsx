// src/components/sermons/SermonSubscriptionCTA.tsx
"use client";

import { Youtube } from "lucide-react";
import { useState } from "react";

export default function SermonSubscriptionCTA() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          📩 Get Weekly Sermons in Your Inbox
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Subscribe to receive weekly inspiration, teachings, and prophetic messages from JCRM directly in your inbox — or follow us on YouTube.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-3 w-full sm:w-80 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077C8] transition"
            required
          />
          <button
            type="submit"
            className="bg-[#D32F2F] hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Subscribe
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          Or{" "}
          <a
            href="https://www.youtube.com/@JCRMChurch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#D32F2F] font-medium hover:underline"
          >
            <Youtube size={16} />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
