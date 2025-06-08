"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import navItems from "../constants/navitems"; // adjust the path as needed

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="bg-white p-1 rounded-full z-10">
          <Image
            src="/images/jcrm-logo.png"
            alt="JCRM Logo"
            width={96}
            height={96}
            className="h-20 md:h-24 rounded-full -mb-14 hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-semibold">
          {navItems.map((item, i) => (
            <div key={i} className="relative group">
              <Link
                href={item.url}
                className={`py-2 px-1 transition-colors ${
                  item.isActive ? "text-red-600" : "text-gray-800 hover:text-red-500"
                }`}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown className="inline-block w-4 h-4 ml-1" />
                )}
              </Link>
              {item.dropdown && (
                <div className="absolute hidden group-hover:flex bg-white shadow-xl mt-1 rounded-lg w-64 z-20 left-1/2 transform -translate-x-1/2 dropdown-menu flex-col transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  <div className="grid gap-1 p-2">
                    {item.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.url}
                        className="flex items-center p-3 hover:bg-gray-50 rounded-lg"
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
                        <span className="text-gray-700">{sub.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            href="/donate"
            className="ml-4 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            DONATE
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-md text-gray-800 hover:text-red-500"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 z-50">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.url}
                    className={`block py-3 px-4 rounded-lg font-medium ${
                      item.isActive ? "text-red-600 bg-red-50" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() => toggleDropdown(i)}
                      className="p-3 focus:outline-none"
                      aria-expanded={openDropdown === i}
                    >
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openDropdown === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.dropdown && openDropdown === i && (
                  <ul className="ml-6 space-y-2 border-l-2 border-gray-100 pl-4">
                    {item.dropdown.map((sub, j) => (
                      <li key={j}>
                        <Link
                          href={sub.url}
                          className="flex items-center py-2 px-3 text-gray-600 hover:text-red-500 hover:bg-gray-50 rounded"
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
              className="block bg-red-600 hover:bg-red-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
            >
              DONATE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
