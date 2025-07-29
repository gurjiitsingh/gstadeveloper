"use client";

import Link from "next/link";
import {
  FaUtensils,
  FaListAlt,
  FaChartLine,
  FaMoneyCheckAlt,
  FaTruck,
  FaPaintBrush,
  FaMobileAlt,
  FaPercent,
} from "react-icons/fa";

export default function FoodAppLandingPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-800 p-4 md:p-10">
      <section id="food-app" className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
          Food Ordering Web App for Restaurants
        </h1>

        <p className="text-lg md:text-xl text-gray-600">
          Modern, Fast & Easy-to-Use Ordering System for Your Restaurant
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-2">
              <FaUtensils className="text-slate-600" /> Online Ordering
            </li>
            <li className="flex items-center gap-2">
              <FaListAlt className="text-slate-600" /> Menu Management
            </li>
            <li className="flex items-center gap-2">
              <FaChartLine className="text-slate-600" /> Real-Time Order Dashboard
            </li>
            <li className="flex items-center gap-2">
              <FaMoneyCheckAlt className="text-slate-600" /> Multiple Payment Options
            </li>
            <li className="flex items-center gap-2">
              <FaTruck className="text-slate-600" /> Delivery & Pickup Options
            </li>
            <li className="flex items-center gap-2">
              <FaPaintBrush className="text-slate-600" /> Customizable UI
            </li>
            <li className="flex items-center gap-2">
              <FaMobileAlt className="text-slate-600" /> Mobile-Optimized
            </li>
            <li className="flex items-center gap-2">
              <FaPercent className="text-slate-600" /> No Commission
            </li>
          </ul>

          <div className="bg-gray-100 p-6 rounded-2xl shadow space-y-4">
            <h2 className="text-xl font-semibold text-slate-700">
              Why Choose Our App?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Modern tech: Next.js, Firebase, Tailwind</li>
              <li>Hosted on your own domain</li>
              <li>Fast, secure & scalable</li>
              <li>User-friendly for all staff</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="https://food.it10x.com/"
            target="_blank"
            className="inline-block bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
          >
            Try Live Demo
          </Link>
        </div>

        {/* <div className="mt-8 text-base space-y-2 text-gray-700">
          <p>
            Email:{" "}
            <a
              href="mailto:contact@gstadeveloper.com"
              className="text-slate-700 underline"
            >
              contact@gstadeveloper.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+91XXXXXXXXXX"
              className="text-slate-700 underline"
            >
              +91-XXXXXXXXXX
            </a>
          </p>
        </div> */}

        {/* <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
          <Link
            href="https://your-order-link.com"
            className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-lg"
          >
            Order Now
          </Link>
          <Link
            href="https://wa.me/91XXXXXXXXXX"
            className="bg-neutral-700 hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-lg"
          >
            WhatsApp Us
          </Link>
        </div> */}

        <div className="mt-10 border-t pt-6 text-sm text-gray-500">
          <p>
            Also included: Setup + 1 Month Support, Admin Access Panel, Basic Logo & Color Customization
          </p>
        </div>
      </section>
    </main>
  );
}
