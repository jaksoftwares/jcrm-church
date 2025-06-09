'use client';

import React, { useState } from 'react';


export default function DonatePage() {
  const [giftFrequency, setGiftFrequency] = useState<'monthly' | 'one_time'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<string>('500');

  const handleFrequencyChange = (frequency: 'monthly' | 'one_time') => {
    setGiftFrequency(frequency);
  };

  const handleAmountChange = (amount: string) => {
    setSelectedAmount(amount);
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <div className="relative bg-cover bg-center h-[620px]" style={{ backgroundImage: "url('/images/donate/background.png')" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">HELP US DO MORE THROUGH GIVING</h1>
          <p className="text-2xl md:text-4xl">Transforming Lives Through Faith & Action</p>
        </div>
      </div>

      {/* Why Donate */}
      <div className="bg-white py-16 px-6 lg:px-20 flex flex-col items-center text-center gap-6">
        <h2 className="text-4xl lg:text-6xl font-bold capitalize">Why Donate</h2>
        <p className="text-lg lg:text-xl max-w-5xl text-gray-700">
          At JCRM we are dedicated to spreading the love of Christ, uplifting communities, and providing hope to those in need.
          Through our outreach programs, we support the less fortunate by offering food, shelter, and essential resources.
          We also empower individuals through education, skill-building initiatives, and spiritual guidance, ensuring they have
          the tools to build a better future. By sharing the Gospel and offering counseling, we bring comfort and strength to those
          facing life’s challenges.
        </p>
      </div>

      {/* Donate Form & Info */}
      <div className="bg-gray-100 rounded-lg shadow-lg mx-6 lg:mx-32 my-12 p-6 lg:p-12 flex flex-col lg:flex-row gap-10">
        {/* Info Section */}
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-semibold">Help us do more</h3>
          <p className="text-gray-700">
            Your support fuels our efforts and ensures that we can continue to serve those who need it most.
            Click the Donate Now button to make a difference today.
          </p>
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Purchase an E-book
          </h3>
          <p className="text-gray-700">
            Each eBook is thoughtfully created to inspire, educate, and deepen your understanding of God’s Word.
            By buying an eBook, you are not only investing in your spiritual growth but also directly contributing
            to our outreach efforts.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-3xl font-bold">Learn more</button>
        </div>

        {/* Donation Form */}
        <form className="flex-1 space-y-6 w-full max-w-lg" onSubmit={(e) => e.preventDefault()}>
          {/* Gift Frequency */}
          <div>
            <label className="block font-semibold mb-2">Select gift frequency</label>
            <div className="flex bg-blue-500 p-1 rounded-full w-fit">
              {['monthly', 'one_time'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleFrequencyChange(type as 'monthly' | 'one_time')}
                  className={`px-4 py-2 rounded-full transition duration-200 ${
                    giftFrequency === type
                      ? 'bg-blue-400 text-white font-bold'
                      : 'text-white'
                  }`}
                >
                  {type === 'monthly' ? 'Monthly' : 'One Time'}
                </button>
              ))}
            </div>
          </div>

          {/* Amount Selection */}
          <div>
            <label className="block font-semibold mb-2">Select amount (in Kenyan Shillings)</label>
            <div className="flex flex-wrap gap-2">
              {['500', '1000', '5000', 'other'].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountChange(amount)}
                  className={`px-4 py-2 rounded-full focus:outline-none transition-all ${
                    selectedAmount === amount
                      ? 'bg-red-500 text-white'
                      : 'bg-white border border-blue-500 text-blue-500'
                  }`}
                >
                  {amount === 'other' ? 'Other' : `Ksh. ${amount}`}
                </button>
              ))}
            </div>
          </div>

          {/* Name Input */}
          <div>
            <label className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
              required
            />
          </div>

          {/* Hidden Inputs */}
          <input type="hidden" name="gift_frequency" value={giftFrequency} />
          <input type="hidden" name="amount" value={selectedAmount} />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
}
