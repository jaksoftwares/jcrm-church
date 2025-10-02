// app/events/page.tsx
"use client";


import { useState } from "react";


import EventsHero from "@/components/Events/EventsHero";
// Future imports for additional sections
import EventsGrid from "@/components/Events/EventsGrid";
import EventSpotlight from "@/components/Events/EventSpotlight";
import EventGallery from "@/components/Events/EventGallery";
import EventTestimonials from "@/components/Events/EventTestimonials";
import EventsFilterPanel from "@/components/Events/EventsFilterPanel";
import EventsCalendar from "@/components/Events/EventsCalendar";
import EventsSubscriptionCTA from "@/components/Events/EventsSubscriotionCTA";




export default function EventsPage() {
  const [filters, setFilters] = useState({ category: "All", keyword: "" });
  return (
    <main className="min-h-screen">
      {/* Section 1: Hero */}
      <EventsHero />

      <EventsFilterPanel onFilterChange={setFilters} />

      {/* Section 2: Upcoming Events Grid */}
      <EventsGrid category={filters.category} keyword={filters.keyword} />

      {/* Section 3: Featured Event Spotlight */}
      <EventSpotlight />

      {/* Section 4: Gallery Carousel */}
      <EventGallery />

      {/* Section 5: Testimonies */}
      <EventTestimonials />


      {/* Section 7: Calendar or Downloads */}
      <EventsCalendar />

      {/* Section 8: Final Subscribe CTA */}
      <EventsSubscriptionCTA />
    </main>
  );
}























// 'use client'

// import Image from 'next/image'
// import { FC } from 'react'

// interface Event {
//   title: string
//   description: string
//   date: string
//   image_url: string
//   is_ongoing?: boolean
// }

// const events: Event[] = [
//   {
//     title: "Healing & Deliverance Crusade",
//     description: "Our recent Healing & Deliverance Crusade was a night of breakthroughs! Many experienced the power of God through healing, deliverance, and prophetic ministration. Testimonies of restoration and renewed faith filled the atmosphere as we witnessed God move mightily.",
//     date: "APR 22",
//     image_url: "/images/events/event1.png"
//   },
//   {
//     title: "Christmas Worship Celebration",
//     description: "The Christmas Worship Celebration was an unforgettable moment of joy, praise, and gratitude. Families and friends gathered to celebrate the birth of Christ through powerful worship, scripture readings, and acts of love within the community.",
//     date: "DEC 25",
//     image_url: "/images/events/event2.png"
//   },
//   {
//     title: "21 Days of Prayer & Fasting",
//     description: "Our 21 Days of Prayer & Fasting brought the congregation closer to God as we sought His will for the new season. The testimonies of spiritual renewal, answered prayers, and divine direction have been truly inspiring.",
//     date: "JAN 22",
//     image_url: "/images/events/event3.png",
//     is_ongoing: true,
//   },
//   {
//     title: "Healing & Deliverance Crusade",
//     description: "Our recent Healing & Deliverance Crusade was a night of breakthroughs! Many experienced the power of God through healing, deliverance, and prophetic ministration. Testimonies of restoration and renewed faith filled the atmosphere as we witnessed God move mightily.",
//     date: "FEB 13",
//     image_url: "/images/events/event4.png"
//   },
// ]

// const EventsPage: FC = () => {
//   return (
//     <div className="w-full">

//       {/* Hero Section */}
//       <div
//         className="w-full relative bg-center bg-cover"
//         style={{
//           backgroundImage: "url('/images/ministries/worshipImg.jpeg')",
//           height: '620px'
//         }}
//       >
//         <p
//           className="absolute left-1/2 transform -translate-x-1/2 text-white text-center uppercase"
//           style={{ top: '35%' }}
//         >
//           <span
//             className="block text-5xl md:text-8xl font-semibold text-transparent"
//             style={{ WebkitTextStroke: '2px white' }}
//           >
//             Events
//           </span>
//           <span className="text-xl md:text-4xl">Be part of the revival, experience the power of God</span>
//         </p>
//       </div>

//       {/* Events Section */}
//       <div className="bg-white flex flex-col items-center justify-center w-full py-12 lg:py-32 space-y-12">
//         {events.map((event, index) => {
//           const [month, day] = event.date.split(' ')
//           return (
//             <div
//               key={index}
//               className="w-11/12 lg:w-4/5 flex flex-col md:flex-row items-start p-4 md:p-8 bg-white gap-6"
//             >
//               {/* Event Image */}
//               <div className="relative w-full md:w-1/3 h-56">
//                 <Image
//                   src={event.image_url}
//                   alt="Event Image"
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//                 <div className="absolute top-6 right-6 bg-white uppercase text-black flex flex-col items-center justify-center p-2 w-24 h-36 rounded-tl-2xl shadow-lg">
//                   <span className="text-lg font-medium">{month}</span>
//                   <span className="text-5xl font-bold">{day}</span>
//                 </div>
//               </div>

//               {/* Event Details */}
//               <div className="w-full md:w-2/3 border-t border-gray-500 pt-4 md:pt-6">
//                 <div className="border-l border-gray-500 pl-4 md:pl-6">
//                   <div className="w-full flex flex-col md:flex-row justify-between">
//                     <h2 className="text-2xl md:text-3xl font-semibold capitalize">{event.title}</h2>
//                     {event.is_ongoing && (
//                       <p className="p-2 text-red-500 rounded-2xl text-xs md:text-sm uppercase font-semibold bg-blue-100">
//                         On-going
//                       </p>
//                     )}
//                   </div>
//                   <p className="text-sm md:text-lg text-gray-700 mt-2 md:mt-6">{event.description}</p>
//                   <div className="flex items-center text-red-500 text-sm font-semibold mt-4">
//                     <Image
//                       src="/images/events/locationpin.png"
//                       alt="location-pin"
//                       width={20}
//                       height={20}
//                       className="h-5 md:h-6"
//                     />
//                     <span className="ml-2">JCRM</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default EventsPage
