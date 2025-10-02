"use client";

import { CalendarDays, Download } from "lucide-react";
import Link from "next/link";

export default function EventsCalendar() {
  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Full Events Calendar
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Stay up to date with everything happening at JCRM. View our full calendar or download a printable schedule for upcoming events.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Google Calendar Embed Preview */}
          <div className="w-full md:w-2/3 h-[500px] rounded-md overflow-hidden shadow-md">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=your_calendar_id%40group.calendar.google.com&ctz=Africa%2FNairobi"
              className="w-full h-full border-0"
              frameBorder="0"
              scrolling="no"
              title="JCRM Events Calendar"
            ></iframe>
          </div>

          {/* PDF Download Card */}
          <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <CalendarDays size={48} className="text-[#0077C8] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Download Full Schedule</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Download our printable events calendar for offline viewing or sharing.
            </p>
            <Link
              href="/downloads/jcrm-events-calendar.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#0077C8] text-white px-5 py-2 rounded-full font-medium hover:bg-[#005fa3] transition"
            >
              <Download size={18} />
              Download PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
