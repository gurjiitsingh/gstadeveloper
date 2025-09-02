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
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaUserFriends,
  FaRocket,
  FaPlay,
  FaEnvelope,
  FaMoneyBillWave,
  FaHandshake,
  FaShoppingBag,
  FaTag,
  FaArrowRight,
} from "react-icons/fa";
import { posts } from "@/lib/posts";
import { Poppins } from "next/font/google";
import {
  FiArrowRight,
  FiBell,
  FiGrid,
  FiLayout,
  FiMail,
  FiMonitor,
  FiPrinter,
  FiSmartphone,
  FiTrash2,
  FiUsers,
} from "react-icons/fi";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function FoodAppLandingPage() {
  const featuredIds = [1, 2, 3, 4]; // replace with the IDs you want to display
  const featuredPosts = posts.filter((post) => featuredIds.includes(post.id));

  return (
    <main className="min-h-screen ">
      <section
        id="food-app"
        className="bg-gradient-to-b from-[#fdfcfb] via-[#f7f4f1] to-[#ece3da] text-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text + Features */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
              Food Ordering <span className="text-[#d8a97c]">Web App</span> for
              Restaurants
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              A modern, fast & easy-to-use ordering system that helps your
              restaurant take orders online with zero commission.
            </p>

            {/* Feature List */}
            <ul className="grid gap-3">
              <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
                <FaUtensils className="text-[#d8a97c] text-xl" />
                <span>Online Ordering</span>
              </li>
              <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
                <FaListAlt className="text-[#d8a97c] text-xl" />
                <span>Menu Management</span>
              </li>
              <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
                <FaChartLine className="text-[#d8a97c] text-xl" />
                <span>Real-Time Order Dashboard</span>
              </li>
              <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
                <FaMoneyCheckAlt className="text-[#d8a97c] text-xl" />
                <span>Multiple Payment Options</span>
              </li>
              <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
                <FaTruck className="text-[#d8a97c] text-xl" />
                <span>Delivery & Pickup Options</span>
              </li>
              <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
                <FaPaintBrush className="text-[#d8a97c] text-xl" />
                <span>Customizable UI</span>
              </li>
              <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
                <FaMobileAlt className="text-[#d8a97c] text-xl" />
                <span>Mobile-Optimized</span>
              </li>
              {/* <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
          <FaPercent className="text-[#d8a97c] text-xl" />
          <span>No Commission Fees</span>
        </li> */}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <Link
                href="https://food.it10x.com/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-full text-lg font-medium transition"
              >
                Try Live Demo <FiArrowRight className="text-xl" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#aaabab] hover:bg-[#5f6161] text-white px-6 py-3 rounded-full text-lg font-medium transition"
              >
                <FiMail className="text-xl" /> Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center relative">
            <img
              src="/food-app-setup.jpg"
              alt="Food Ordering App Preview"
              className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="max-w-6xl mx-auto mt-12 border-t pt-6 text-sm text-gray-500 text-center">
          <p>
            Also included: Setup + 1 Month Support, Admin Access Panel, Basic
            Logo & Color Customization
          </p>
        </div>
      </section>

      <section
        id="why-choose-app"
        className="bg-gradient-to-b from-[#fdfcfb] via-[#f7f4f1] to-[#ece3da] text-neutral-800"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-10 py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Image */}
          <div className="flex justify-center">
            <Image
              src="/fast-setup.jpg"
              alt="Why choose our web app"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Right side: Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-snug">
              Why Choose Our<span className="text-[#e4af67]"> web app </span> ?
            </h2>

            <p className="text-lg md:text-xl text-gray-600">
              We built this app with <strong>modern technologies</strong> to
              make your restaurant ordering system fast, reliable, and easy to
              use — both for you and your customers.
            </p>

            {/* Features List */}
            <ul className="space-y-4 text-base text-slate-700">
              <li className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                <FaRocket className="text-slate-700" /> Built with Next.js for
                lightning speed
              </li>
              <li className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                <FaCloud className="text-slate-700" /> Cloud database for
                security & scalability
              </li>
              <li className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                <FaShieldAlt className="text-slate-700" /> Secure &
                commission-free ordering
              </li>
              <li className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                <FaCogs className="text-slate-700" /> Customizable UI to match
                your brand
              </li>
              <li className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                <FaUserFriends className="text-slate-700" /> Easy-to-use for
                staff & customers
              </li>
            </ul>

            {/* CTA Buttons */}

            <div className="flex gap-4 mt-6">
              <Link
                href="https://food.it10x.com/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
              >
                <FaPlay className="text-white" /> Try Live Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#aaabab] hover:bg-[#5f6161] text-white px-6 py-3 rounded-full text-lg shadow-md transition"
              >
                <FaEnvelope className="text-white" /> Contact Us
              </Link>
            </div>
            {/* <div className="flex flex-wrap gap-4 pt-6">
            <Link
              href="https://food.it10x.com/"
              target="_blank"
              className="inline-block bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
            >
              Try Live Demo
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-[#00897b] text-[#00897b] hover:bg-[#00897b] hover:text-white px-6 py-3 rounded-full text-lg shadow-md transition"
            >
              Contact Us
            </Link>
          </div> */}
          </div>
        </div>
      </section>

      <section
        id="discounts"
        className="bg-gradient-to-b from-[#fdfcfb] via-[#f7f4f1] to-[#ece3da] text-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Image */}

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Boost Sales with <span className="text-[#1676aa]">Smart Discounts</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Our food ordering web app comes with built-in discount options,
              helping you attract more customers while saving commission costs.
            </p>

            <ul className="space-y-4 text-base text-slate-700">
              <li className="flex items-center gap-3">
                <FaTag className="text-slate-600 text-lg" /> Flat Discounts on
                Food
              </li>
              <li className="flex items-center gap-3">
                <FaShoppingBag className="text-slate-600 text-lg" /> Special
                Discounts for Pickup Orders
              </li>
              <li className="flex items-center gap-3">
                <FaArrowTrendUp className="text-slate-600 text-lg" /> Increase
                Sales by Offering Incentives
              </li>
              <li className="flex items-center gap-3">
                <FaHandshake className="text-slate-600 text-lg" /> Build Loyalty
                by Rewarding Customers
              </li>
              <li className="flex items-center gap-3">
                <FaMoneyBillWave className="text-slate-600 text-lg" /> Save
                Commission – Give Back to Customers
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <Link
                href="https://food.it10x.com/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
              >
                <FaPlay className="text-white" /> Try Live Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#aaabab] hover:bg-[#5f6161] text-white px-6 py-3 rounded-full text-lg shadow-md transition"
              >
                <FaEnvelope className="text-white" /> Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex justify-center">
            <img
              src="/discounts-setup.jpg" // replace with your actual image
              alt="Discounts and Offers"
              className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>

      <section id="web-food-app" className="bg-[#faeee2] text-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="flex justify-center relative">
            <img
              src="/order-managemnet-2.jpg"
              alt="Food Ordering App Preview"
              className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              {/* <span className="text-red-600">Real Time</span> Order Alerts */}
              <span className="text-[#d2572e]">Smart Order</span> Management for
              Restaurants
            </h2>
            <p className="text-lg text-gray-700">
              Stay on top of every order — whether on desktop or mobile. Your
              restaurant team gets instant updates to deliver faster and better.
            </p>
            <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
              Streamline your operations with real-time order updates, instant
              alerts, and powerful tools designed to keep your kitchen running
              smoothly.
            </p>

            {/* Feature List */}
            <ul className="grid gap-3">
              <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
                <FiBell className="text-red-600 text-xl" />
                <span>Instant order notifications</span>
              </li>
              <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
                <FiPrinter className="text-red-600 text-xl" />
                <span>Direct printing for smooth kitchen workflow</span>
              </li>
              <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
                <FiUsers className="text-red-600 text-xl" />
                <span>Full customer + payment details</span>
              </li>
              <li className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2">
                <FiTrash2 className="text-red-600 text-xl" />
                <span>Manage or delete test orders anytime</span>
              </li>
            </ul>

            {/* Buttons */}
               <div className="flex gap-4 mt-6">
              <Link
                href="https://food.it10x.com/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
              >
                <FaPlay className="text-white" /> Try Live Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#aaabab] hover:bg-[#5f6161] text-white px-6 py-3 rounded-full text-lg shadow-md transition"
              >
                <FaEnvelope className="text-white" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="responsive-web-app"
        className="bg-gradient-to-b from-[#fdfcfb] via-[#f7f4f1] to-[#ece3da] text-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Right Side: Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-snug">
              Beautiful & Fully Responsive
            </h2>

            <p className="text-lg md:text-xl text-gray-600">
              Your food ordering web app adapts seamlessly to{" "}
              <strong>mobile, tablet, and desktop</strong>. A modern design
              ensures customers enjoy a smooth experience anywhere.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 text-base text-slate-700">
              <li className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                <FiSmartphone className="text-green-600 text-xl" />
                Optimized for mobile-first experience
              </li>
              <li className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                <FiMonitor className="text-green-600 text-xl" />
                Perfectly scaled for tablets & desktops
              </li>
              <li className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                <FiLayout className="text-green-600 text-xl" />
                Clean, modern, user-friendly design
              </li>
              <li className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                <FiGrid className="text-green-600 text-xl" />
                Consistent look across all devices
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-6">
              <Link
                href="https://food.it10x.com/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
              >
                <FaPlay className="text-white" /> Try Live Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#aaabab] hover:bg-[#5f6161] text-white px-6 py-3 rounded-full text-lg shadow-md transition"
              >
                <FaEnvelope className="text-white" /> Contact Us
              </Link>
            </div>
          </div>
          {/* Left Side: Image */}
          <div className="flex justify-center">
            <img
              src="/responsive.jpg"
              alt="Responsive Food Ordering App"
              className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* <section
        id="web-food-app"
        className="bg-gradient-to-b from-[#fdfcfb] via-[#f7f4f1] to-[#ece3da] text-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 grid md:grid-cols-2 gap-10 items-center">
        
          <div className="flex justify-center">
            <img
              src="/responsive.jpg"
              alt="Food Ordering App Preview"
              className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg"
            />
          </div>

         
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Your Own Food Ordering Web App
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              A powerful, fully customizable ordering system built for
              restaurants, cafes, and food businesses.
            </p>
            <ul className="space-y-4 text-base text-slate-700">
              <li className="flex items-center gap-2">
                ✅ Fully responsive & mobile-first
              </li>
              <li className="flex items-center gap-2">
                ✅ Easy menu & order management
              </li>
              <li className="flex items-center gap-2">
                ✅ No commission – full ownership
              </li>
              <li className="flex items-center gap-2">
                ✅ Scalable & secure hosting
              </li>
            </ul>
            <Link
              href="https://food.it10x.com/"
              target="_blank"
              className="inline-block bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
            >
              Try Live Demo
            </Link>
          </div>
        </div>
      </section> */}

   
<section id="web-food-app" className="bg-[#faeee2] text-neutral-900">
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
    {/* Left Side: Image */}
    <div className="flex justify-center relative">
    <Image
        src="/food-ordering-app-2.jpg"
        alt="Restaurant Online Food Ordering App"
        width={600}
        height={400}
        className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg"
        priority
      />
    </div>

    {/* Right Side: Text Content */}
    <div className="space-y-6 text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-extrabold">
        Why         {/* Your Restaurant  */}          Need 
        {/* Its */}
         <span className="text-[#e2c07c]"> Own Online </span>Food Ordering Web App
      </h2>
      <p className="text-lg text-gray-700">
        Stop losing margins to third-party marketplaces. Take back control of your 
        customer data, brand, and profits with your own online ordering system.
      </p>
      <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
        With a Next.js powered web app, you get speed, SEO benefits, and full ownership of 
        your platform—without the restrictions of Android/iOS marketplaces or WordPress plugins.
      </p>

      {/* Feature List */}
      <ul className="grid gap-3">
        {featuredPosts.map((post) => (
          <li
            key={post.id}
            className="flex items-center gap-3 bg-white/80 shadow-sm rounded-lg px-4 py-2"
          >
            <div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm hover:underline pl-1"
              >
                {post.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
        <Link
          href="https://food.it10x.com/"
          target="_blank"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium transition"
        >
          Try Live Demo <FiArrowRight className="text-xl" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#aaabab] hover:bg-[#5f6161] text-white px-6 py-3 rounded-full text-lg font-medium transition"
        >
          <FiMail className="text-xl" /> Contact Us
        </Link>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}

{
  /* <section
        id="food-app"
        className="bg-gradient-to-b from-[#fdfcfb] via-[#f7f4f1] to-[#ece3da] text-neutral-800  "
      >
        <div className="max-w-6xl  p-4 md:p-10 mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 text-left">
            Food Ordering Web App for Restaurants
          </h1>

          <p className="text-lg md:text-xl text-gray-600">
            Modern, Fast & Easy-to-Use Ordering System for Your Restaurant
          </p>

          <div className="flex gap-6 text-left mt-8">
            <ul className="space-y-5 text-base w-[30%] p-6">
              <li className="flex items-center gap-2">
                <FaUtensils className="text-slate-600" /> Online Ordering
              </li>
              <li className="flex items-center gap-2">
                <FaListAlt className="text-slate-600" /> Menu Management
              </li>
              <li className="flex items-center gap-2">
                <FaChartLine className="text-slate-600" /> Real-Time Order
                Dashboard
              </li>
              <li className="flex items-center gap-2">
                <FaMoneyCheckAlt className="text-slate-600" /> Multiple Payment
                Options
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

               <div className="flex justify-center">
                  <img
                    src="/food-ordering-app-2.jpg"
                    alt="Food Ordering App Preview"
                    className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg"
                  />
                </div>
              </div>
         

          <div className="flex justify-between mt-10">
            <div>
              <h2 className="text-xl bold max-w-[300px] text-left">
                <Link
                  href={`/blog/launch-food-web-app-guide`}
                  className="text-[#d8a97c] hover:underline"
                >
                  Steps: To Launch your Own Food Web App
                </Link>
              </h2>
            </div>
            <div>
      
            </div>
          </div>

          <div className="mt-10 border-t pt-6 text-sm text-gray-500">
            <p>
              Also included: Setup + 1 Month Support, Admin Access Panel, Basic
              Logo & Color Customization
            </p>
          </div>
        </div>
      </section> */
}

{
  /* <section
        id="food-app"
        className="bg-gradient-to-b from-[#fdfcfb] via-[#f7f4f1] to-[#ece3da] text-neutral-800  "
      >
        <div className="max-w-6xl  p-4 md:p-10 mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 text-left">
            Food Ordering Web App for Restaurants
          </h1>

          <p className="text-lg md:text-xl text-gray-600">
            Modern, Fast & Easy-to-Use Ordering System for Your Restaurant
          </p>

          <div className="flex gap-6 text-left mt-8">
            <ul className="space-y-5 text-base w-[30%] p-6">
              <li className="flex items-center gap-2">
                <FaUtensils className="text-slate-600" /> Online Ordering
              </li>
              <li className="flex items-center gap-2">
                <FaListAlt className="text-slate-600" /> Menu Management
              </li>
              <li className="flex items-center gap-2">
                <FaChartLine className="text-slate-600" /> Real-Time Order
                Dashboard
              </li>
              <li className="flex items-center gap-2">
                <FaMoneyCheckAlt className="text-slate-600" /> Multiple Payment
                Options
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

            <div className="bg-gradient-to-br from-white/40 to-slate-200/30 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-xl space-y-4">
              <h2
                className={`{poppins.className} text-xl font-semibold text-slate-800`}
              >
                Why Choose Our App?
              </h2>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Modern tech: Next.js, Cloud Database, Tailwind</li>
                  <li>Hosted on your own domain</li>
                  <li>Fast, secure & scalable</li>
                  <li>User-friendly for all staff</li>
                </ul>
                <Link
                  href="https://food.it10x.com/"
                  target="_blank"
                  className="inline-block bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-full text-md shadow-md transition"
                >
                  Try Live Demo
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <div>
              <h2 className="text-xl bold max-w-[300px] text-left">
                <Link
                  href={`/blog/launch-food-web-app-guide`}
                  className="text-[#d8a97c] hover:underline"
                >
                  Steps: To Launch your Own Food Web App
                </Link>
              </h2>
            </div>
            <div>
            
            </div>
          </div>

          <div className="mt-10 border-t pt-6 text-sm text-gray-500">
            <p>
              Also included: Setup + 1 Month Support, Admin Access Panel, Basic
              Logo & Color Customization
            </p>
          </div>
        </div>
      </section> */
}

{
  /* <section
  id="web-food-app"
  className="bg-gradient-to-b from-[#fdfcfb] via-[#f7f4f1] to-[#ece3da] text-neutral-800"
>
  <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 grid md:grid-cols-2 gap-10 items-center">
   
    <div className="flex justify-center">
      <img
        src="/order-management-e.jpg"
        alt="Food Ordering App Preview"
        className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg"
      />
    </div>

  
    <div className="space-y-6 text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
        Smart Order Management for Restaurants
      </h2>
      <p className="text-lg md:text-xl text-gray-600">
        Streamline your restaurant operations with real-time orders, instant
        alerts, and easy management — all in one web app.
      </p>

      <ul className="space-y-4 text-base text-slate-700">
        <li className="flex items-center gap-2">⚡ Real-time order alerts on any device</li>
        <li className="flex items-center gap-2">🖨️ Direct printing for faster service</li>
        <li className="flex items-center gap-2">📋 Detailed order view with customer info</li>
        <li className="flex items-center gap-2">
          📊 Order list includes: Customer Name, Order No., Date, Status, Total,
          Payment, Discounts & Coupons
        </li>
        <li className="flex items-center gap-2">🗑️ Delete dummy/test orders anytime</li>
      </ul>

      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
        <Link
          href="https://food.it10x.com/"
          target="_blank"
          className="inline-block bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
        >
          Try Live Demo
        </Link>
        <Link
          href="/contact"
          className="inline-block bg-[#00897b] hover:bg-[#00796b] text-white px-6 py-3 rounded-full text-lg shadow-md transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
</section> */
}

{
  /* <section
  id="web-food-app"
  className="bg-[#faeee2] text-neutral-900"
>
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
 
    <div className="flex justify-center relative">
      <img
        src="/order-management-e.jpg"
        alt="Food Ordering App Preview"
        className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg"
      />
    </div>

   
    <div className="space-y-6 text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-extrabold">
        <span className="text-red-600">Smart Order</span> Management for Restaurants
      </h2>
      <p className="text-lg text-gray-700">
        Stay on top of every order — whether on desktop or mobile. 
        Your restaurant team gets instant updates to deliver faster and better.
      </p>

      <ul className="space-y-3 text-base text-gray-800">
        <li className="flex items-center gap-2">⚡ Instant order notifications</li>
        <li className="flex items-center gap-2">🖨️ Direct printing for smooth kitchen workflow</li>
        <li className="flex items-center gap-2">📋 Full customer + payment details</li>
        <li className="flex items-center gap-2">🗑️ Manage or delete test orders anytime</li>
      </ul>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
        <Link
          href="https://food.it10x.com/"
          target="_blank"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium transition"
        >
          Try Live Demo
        </Link>
        <Link
          href="/contact"
          className="inline-block bg-[#aaabab] hover:bg-[#5f6161] text-white px-6 py-3 rounded-full text-lg font-medium transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
</section> */
}
