// app/components/Hero.tsx
'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Master WordPress with IT10x
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Step-by-step tutorials, code snippets, and best practices for customizing WordPress like a pro.
        </p>
        <a
          href="#posts"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          Explore Tutorials
        </a>
      </div>
    </section>
  );
}
