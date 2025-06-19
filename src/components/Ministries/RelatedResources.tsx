// src/components/ministries/RelatedResources.tsx
import Link from "next/link";
import { CalendarCheck, Users, BookOpen } from "lucide-react";

const resources = [
  {
    title: "Ministry Events",
    description: "Stay up to date with upcoming outreach, worship nights, conferences, and training events.",
    href: "/events",
    icon: <CalendarCheck className="w-6 h-6 text-[#0077C8]" />,
  },
  {
    title: "Volunteer Portal",
    description: "Sign up to serve, manage your teams, or log hours as a JCRM ministry volunteer.",
    href: "/volunteer",
    icon: <Users className="w-6 h-6 text-[#0077C8]" />,
  },
  {
    title: "Training & Resources",
    description: "Access ministry guidelines, leadership materials, and teaching support tools.",
    href: "/resources",
    icon: <BookOpen className="w-6 h-6 text-[#0077C8]" />,
  },
];

export function RelatedResources() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Related Resources
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition bg-white"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-[#E3F2FD] rounded-full">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
