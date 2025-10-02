import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Youtube, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {/* Logo & Mission */}
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative w-10 h-10">
              <Image
                src="/jcrm-logo.png"
                alt="JCRM Logo"
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-xl font-bold">JCRM</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Jesus Christ Reachout Ministries (JCRM) is a global ministry called to preach, disciple, and demonstrate the love of Christ to all people and nations.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: "About Us", href: "/about" },
              { label: "Sermons", href: "/sermons" },
              { label: "Events", href: "/events" },
              { label: "Gallery", href: "/gallery" },
              { label: "Give", href: "/give" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#64B5F6] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ministries */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ministries</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: "Children", href: "/ministries/children" },
              { label: "Youth", href: "/ministries/youth" },
              { label: "Women", href: "/ministries/women" },
              { label: "Men", href: "/ministries/men" },
              { label: "Worship", href: "/ministries/worship" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#64B5F6] transition-colors">
                  {link.label} Ministry
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
          <p className="flex items-start text-sm text-gray-300 gap-2 mb-2">
            <MapPin size={16} className="mt-1" /> JCRM Headquarters, Gospel Plaza, Nairobi, Kenya
          </p>
          <p className="flex items-start text-sm text-gray-300 gap-2 mb-2">
            <Clock size={16} className="mt-1" /> Sunday: 9AM - 12PM<br />Wednesday: 5PM - 7PM
          </p>
          <Link
            href="https://maps.google.com"
            target="_blank"
            className="text-sm text-blue-400 hover:underline"
          >
            View on Map
          </Link>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <p className="text-sm text-gray-300 mb-2">info@jcrm.org</p>
          <p className="text-sm text-gray-300 mb-4">+254 700 000000</p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-[#64B5F6]">
              <Facebook />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-[#64B5F6]">
              <Twitter />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-[#64B5F6]">
              <Youtube />
            </Link>
            <Link href="mailto:info@jcrm.org" className="hover:text-[#64B5F6]">
              <Mail />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400 px-4">
        © {new Date().getFullYear()} Jesus Christ Reachout Ministries. All rights reserved.
      </div>
    </footer>
  );
}
