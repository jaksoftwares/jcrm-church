"use client";

import Image from "next/image";
import { useState } from "react";

export default function GivePage() {
  const [method, setMethod] = useState("mpesa");

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/give/hero.jpg"
          alt="Giving to JCRM"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Giving Makes a Difference</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Touch hearts with  JCRM to impact lives and spread the Gospel
            </p>
          </div>
        </div>
      </section>

      {/* Giving Methods */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Choose Your Giving Method</h2>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <button
              onClick={() => setMethod("mpesa")}
              className={`px-4 py-2 rounded-full border ${
                method === "mpesa"
                  ? "bg-[#0077C8] text-white border-[#0077C8]"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              M-Pesa Paybill
            </button>
            <button
              onClick={() => setMethod("bank")}
              className={`px-4 py-2 rounded-full border ${
                method === "bank"
                  ? "bg-[#0077C8] text-white border-[#0077C8]"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Bank Transfer
            </button>
            <button
              onClick={() => setMethod("card")}
              className={`px-4 py-2 rounded-full border ${
                method === "card"
                  ? "bg-[#0077C8] text-white border-[#0077C8]"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Online Card
            </button>
            <button
              onClick={() => setMethod("cash")}
              className={`px-4 py-2 rounded-full border ${
                method === "cash"
                  ? "bg-[#0077C8] text-white border-[#0077C8]"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Cash / In-person
            </button>
          </div>

          {/* Giving Details Display */}
          <div className="bg-gray-100 p-6 rounded-lg text-gray-800 text-center">
            {method === "mpesa" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">M-Pesa Paybill</h3>
                <p><strong>Paybill:</strong> <span className="font-mono">123456</span></p>
                <p><strong>Account:</strong> JCRM Giving</p>
              </div>
            )}
            {method === "bank" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Bank Transfer</h3>
                <p><strong>Bank:</strong> Kingdom Bank</p>
                <p><strong>Account Name:</strong> Jesus Christ Revealed Ministries</p>
                <p><strong>Account Number:</strong> 0123456789</p>
                <p><strong>Branch:</strong> Nairobi</p>
              </div>
            )}
            {method === "card" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Give Online</h3>
                <p>Use our secure online platform to give using your debit/credit card.</p>
                <a
                  href="https://example.com/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#D32F2F] text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
                >
                  Give Online
                </a>
              </div>
            )}
            {method === "cash" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Cash / In-person Giving</h3>
                <p>You can give during our services or visit the church office at:</p>
                <p className="mt-2">JCRM Headquarters, City Centre, Nairobi</p>
                <p>Open Mon - Fri, 9am - 5pm</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Give Form */}
      <section className="bg-[#fdfdfd] py-16 px-4">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Give Now</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
              required
            />
            <input
              type="number"
              placeholder="Amount (KES)"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
              required
            />
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
              required
            >
              <option value="">Select Giving Purpose</option>
              <option>Offering</option>
              <option>Tithe</option>
              <option>Partnership</option>
              <option>Project Support</option>
            </select>
            <button
              type="submit"
              className="w-full bg-[#D32F2F] text-white py-2 rounded-md font-semibold hover:bg-red-600 transition"
            >
              Submit Giving
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
