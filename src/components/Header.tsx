'use client';

import React from "react";
import { FaBars } from "react-icons/fa";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import Image from "next/image";

const items = [
  { title: "Home", href: "/#home" },
  { title: "About", href: "/#about-us" },
  { title: "Services", href: "/#services" },
  { title: "Contact", href: "/#footer" },
];

export default function Header() {
  const { bargerMenuToggle } = UseSiteContext();

  return (
    <header className="w-full fixed top-0 z-50 border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-3 px-6 flex items-center justify-between">
        {/* Logo with background so white logo is visible */}
        <div className=" p-2 rounded">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain h-8 w-auto"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {items.map(({ title, href }) => (
            <a
              key={title}
              href={href}
              onClick={() => bargerMenuToggle(false)}
              className="text-sm font-medium text-gray-700 hover:text-black transition"
            >
              {title}
            </a>
          ))}
        </nav>

        {/* Mobile Burger */}
        <button
          onClick={() => bargerMenuToggle(true)}
          className="lg:hidden text-gray-800"
          aria-label="toggle burger menu"
        >
          <FaBars size={28} />
        </button>
      </div>
    </header>
  );
}
