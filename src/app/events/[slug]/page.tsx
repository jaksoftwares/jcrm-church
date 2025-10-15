import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { events } from "@/constants/events";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const event = events.find(
    (e) =>
      e.slug === slug ||
      e.title.toLowerCase().replace(/\s+/g, "-") === decodeURIComponent(slug)
  );

  if (!event)
    return {
      title: "Event Not Found | Jesus Come Revival Ministries",
      description: "The event you’re looking for could not be found.",
    };

  return {
    title: `${event.title} | Events | Jesus Come Revival Ministries`,
    description: event.description.slice(0, 150),
    openGraph: {
      title: event.title,
      description: event.description,
      images: [event.image],
    },
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const event = events.find(
    (e) =>
      e.slug === slug ||
      e.title.toLowerCase().replace(/\s+/g, "-") === decodeURIComponent(slug)
  );

  if (!event) return notFound();

  const start = new Date(event.startDate);
  const end = new Date(event.endDate);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).formatRange(start, end);

  const formattedTime = `${start.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })} – ${end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <section className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-3">
            {event.title}
          </h1>
          <p className="max-w-2xl text-gray-200">
            {event.description.substring(0, 150)}...
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-10 px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 animate-fadeIn">
          <div className="flex flex-wrap gap-6 text-gray-700 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="text-[#0077C8] w-5 h-5" />
              <span>{formattedDate}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="text-[#0077C8] w-5 h-5" />
              <span>{formattedTime}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="text-[#0077C8] w-5 h-5" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">{event.description}</p>

          <div className="pt-6">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-[#0077C8] hover:bg-[#005fa3] text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
