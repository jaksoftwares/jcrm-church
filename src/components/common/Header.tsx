"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import navItems from "../../constants/navitems";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-[100px] md:h-[120px]">
      {/* Navbar inner container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <Link href="/" className="z-50">
          <Image
            src="/images/jcrm-logo.png"
            alt="JCRM Logo"
            width={100}
            height={100}
            className="h-20 w-auto md:h-24 rounded-full hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-lg font-medium">
          {navItems.map((item, i) => (
            <div key={i} className="relative group">
              <Link
                href={item.url}
                className={`py-2 px-2 transition-colors ${
                  item.isActive ? "text-red-600" : "text-gray-800 hover:text-red-500"
                }`}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown className="inline-block w-4 h-4 ml-1" />
                )}
              </Link>

              {item.dropdown && (
                <div className="absolute hidden group-hover:flex flex-col bg-white shadow-xl mt-2 rounded-lg w-64 z-40 left-1/2 transform -translate-x-1/2 transition-all">
                  <div className="grid gap-1 p-3">
                    {item.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.url}
                        className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition"
                      >
                        <svg
                          className="w-5 h-5 text-red-500 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d={sub.icon}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{sub.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            href="/donate"
            className="ml-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition text-base"
          >
            DONATE
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden z-50 p-2 text-gray-800 hover:text-red-600"
        >
          {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[100px] md:top-[120px] bg-white z-40 transition-all duration-300 ease-in-out ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-4 overflow-y-auto h-[calc(100vh-100px)] md:h-[calc(100vh-120px)]">
          {navItems.map((item, i) => (
            <div key={i}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.url}
                  className={`block py-3 px-4 rounded-lg font-medium ${
                    item.isActive ? "text-red-600 bg-red-50" : "text-gray-800 hover:bg-gray-100"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <button
                    onClick={() => toggleDropdown(i)}
                    className="p-2"
                    aria-expanded={openDropdown === i}
                  >
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform ${
                        openDropdown === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.dropdown && openDropdown === i && (
                <ul className="ml-4 space-y-2 border-l-2 border-gray-100 pl-4">
                  {item.dropdown.map((sub, j) => (
                    <li key={j}>
                      <Link
                        href={sub.url}
                        className="flex items-center py-2 px-3 text-gray-600 hover:text-red-500 hover:bg-gray-50 rounded"
                        onClick={() => setMobileOpen(false)}
                      >
                        <svg
                          className="w-4 h-4 mr-3 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d={sub.icon}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <Link
            href="/donate"
            className="block bg-red-600 hover:bg-red-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition"
            onClick={() => setMobileOpen(false)}
          >
            DONATE
          </Link>
        </div>
      </div>
    </header>
  );
}
