// src/app/demo/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const demos = [
  {
    name: "Food App (German - foodde)",
    url: "https://foodde.it10x.com",
    image: "/food-app-box.png",
  },
  {
    name: "Food App (English - fooden)",
    url: "https://fooden.it10x.com",
    image: "/food-app-rectangal.png",
  },
  {
    name: "Food App (food)",
    url: "https://food.it10x.com",
    image: "/food-app-round.png",
  },
];

export default function DemoPage() {
  return (
    <section id="demo">
    <div className=" bg-white dark:bg-zinc-900 flex flex-col items-center px-4 py-1">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-400">
        Food App Demo
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300  max-w-2xl">
        Explore our restaurant ordering system in multiple languages and layouts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-3 w-full max-w-6xl">
        {demos.map((demo, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center"
          >
             <Link
              href={demo.url}
              target="_blank"
              rel="nofollow"
              className="   transition"
            >
            <Image
              src={demo.image}
              alt={demo.name}
              width={300}
              height={500}
              className="rounded-xl border  dark:border-zinc-700"
            />
            {/* <h2 className="mt-4 text-md font-semibold text-gray-800 dark:text-gray-200 text-center">
              {demo.name}
            </h2> */}
            </Link>
            <Link
              href={demo.url}
              target="_blank"
              rel="nofollow"
              className="mt-3 inline-block px-6 py-2 rounded-full bg-slate-500 text-white font-medium hover:bg-[#00796b] transition"
            >
              View Demo
            </Link>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
