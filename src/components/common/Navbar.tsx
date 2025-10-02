"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navLinks } from "@/constants/navLinks";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white text-gray-800 shadow-sm h-20 md:h-24">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/jcrm-logo.png"
              alt="JCRM Logo"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <span className="text-lg md:text-2xl font-semibold">JCRM</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center text-base relative w-full justify-end">
          {navLinks.map((link) =>
            link.submenu ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center space-x-1 ${
                    pathname.startsWith(link.href)
                      ? "text-[#0077C8] font-semibold"
                      : "hover:text-[#0077C8] transition"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronDown size={16} className="text-gray-600" />
                </Link>

                              {/* Full-width Centered Dropdown */}
              <div className="absolute hidden group-hover:flex left-1/2 -translate-x-1/2 top-full w-[80vw] max-w-5xl bg-white py-6 shadow-xl border-t z-50 justify-center rounded-md">
                <div className="w-full px-6 flex justify-center gap-10">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      className={`text-base whitespace-nowrap ${
                        pathname === sublink.href
                          ? "text-[#0077C8] font-semibold"
                          : "hover:text-[#0077C8]"
                      } transition`}
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-[#0077C8] font-semibold"
                    : "hover:text-[#0077C8] transition"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/give"
            className="bg-[#D32F2F] hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
          >
            Give
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-gray-800 shadow-sm md:hidden">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.href}>
                    <button
                      className="w-full flex justify-between items-center text-left text-base hover:text-[#0077C8] transition font-medium"
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`text-gray-600 transition-transform ${
                          submenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {submenuOpen && (
                      <div className="mt-2 ml-4 space-y-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            onClick={() => setIsOpen(false)}
                            className={`block text-base ${
                              pathname === sublink.href
                                ? "text-[#0077C8] font-semibold"
                                : "hover:text-[#0077C8]"
                            } transition`}
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base hover:text-[#0077C8] transition ${
                    pathname === link.href ? "text-[#0077C8] font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/give"
              onClick={() => setIsOpen(false)}
              className="inline-block bg-[#D32F2F] hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition mt-4"
            >
              Give
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
