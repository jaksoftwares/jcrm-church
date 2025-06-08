// components/Events.tsx

import Image from 'next/image'

const events = [
  {
    title: '100 RANDOM ACTS OF KINDNESS',
    date: '20',
    month: 'JULY',
    image: '/images/image3.png',
  },
  {
    title: '100 RANDOM ACTS OF KINDNESS',
    date: '20',
    month: 'JULY',
    image: '/images/image2.png',
  },
  {
    title: '100 RANDOM ACTS OF KINDNESS',
    date: '20',
    month: 'JULY',
    image: '/images/image1.png',
  },
  {
    title: '100 RANDOM ACTS OF KINDNESS',
    date: '20',
    month: 'JULY',
    image: '/images/devotion.png',
  },
]

export default function Events() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">UPCOMING EVENTS</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {events.map((event, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4 text-left relative">
            <span className="absolute top-2 left-3 text-sm text-sky-600 font-semibold">UPCOMING EVENT</span>
            <span className="absolute top-2 right-3 text-red-600 font-bold text-lg">
              {event.date} <br /> {event.month}
            </span>
            <h3 className="text-lg font-semibold mt-6">{event.title}</h3>
            <Image
              src={event.image}
              alt="Church Event"
              width={400}
              height={300}
              className="rounded-lg mt-4 shadow-md w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
