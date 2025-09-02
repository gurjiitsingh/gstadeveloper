"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    // <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24 px-4 md:px-10">
    <section className="bg-[#555555] text-white py-24 px-4 md:px-10 my-0">
      <div className="max-w-7xl mx-auto gap-2 flex flex-col-reverse md:flex-row items-center justify-between ">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            We Build <span className="text-blue-400">Powerful Web Apps</span>{" "}
            for Your Business
          </h1>
          <p className="text-lg text-white mb-8 max-w-xl mx-auto md:mx-0">
            Gstadeveloper specializes in modern web solutions using Next.js,
            Tailwind, and the latest technologies to grow your online presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            {/* <Link
              href="/#footer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
            >
              Contact Us
            </Link> */}
            <Link
              href="/#projects"
              className="border border-blue-400 hover:bg-blue-500 hover:text-white text-blue-400 font-semibold py-3 px-6 rounded-xl transition"
            >
              View Projects
            </Link>

            <Link
              href="/food-app/#food-app"
              className="bg-[#fb8410] hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition"
            >
              🍔 Food App for Restaurants
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 -mt-6 ">
          <Image
            src="/hero-3.jpg"
            alt="Developer working on a project"
            width={600}
            height={400}
            className=" w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
