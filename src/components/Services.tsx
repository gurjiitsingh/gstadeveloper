import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FaUtensils,
  FaShoppingCart,
  FaCogs,
  FaPalette,
  FaEnvelopeOpenText,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    title: "Restaurant Food App",
    desc: "Ready-to-deploy ordering web app built with modern stack. Great for restaurant websites.",
    link: "/food-app",
    icon: <FaUtensils className="text-2xl" />,
    rating: 4.8,
  },
  {
    title: "E-commerce Web App",
    desc: "Fully-featured online store platform with cart, checkout, admin panel, and secure payments.",
    link: "/ecommerce-app",
    icon: <FaShoppingCart className="text-2xl" />,
    rating: 4.7,
  },
  {
    title: "Management Software",
    desc: "We develop custom management software according to your requirements.",
    icon: <FaCogs className="text-2xl" />,
    rating: 4.6,
  },
  {
    title: "Website Design",
    desc: "Website design which provides a gateway to your business on the internet.",
    icon: <FaPalette className="text-2xl" />,
    rating: 4.5,
  },
  {
    title: "Email Marketing Integration",
    desc: "We integrate custom email marketing tools to help you send campaigns, newsletters, and automated messages directly from your app.",
    link: "/email-marketing",
    icon: <FaEnvelopeOpenText className="text-2xl" />,
    rating: 4.7,
  },
  {
    title: "Custom Web Applications",
    desc: "We build powerful web apps tailored to your business needs using modern tech like Next.js, Node.js, and Express.",
    icon: <FaLaptopCode className="text-2xl" />,
    rating: 4.9,
  },
];

const ServicesSection = () => {
  return (
    <section className="service-area w-full bg-gradient-to-b from-[#f8fafc] to-[#eef2f3] my-0 py-10" id="services-1">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 ">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">SERVICES</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            We build modern, responsive, and user-friendly apps for your business needs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Balanced Layout */}
          <div className="flex flex-col justify-between h-full gap-8" data-aos="fade-right">
          
              <h2 className="font-bold text-2xl ">Custom Web Applications</h2>
              <p className="text-gray-600 mt-2 text-md">
                We build powerful web apps tailored to your business needs using modern tech like Next.js, Node.js, and Express.
              </p>
           <div className="w-full flex justify-center md:justify-start">
            <Image
              src="/our-services.jpg"
              alt="Services Overview"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg"
            />
            </div>
          </div>

          {/* Right - Services List */}
          <div className="flex flex-col gap-4" data-aos="fade-left">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex items-center justify-between gap-4 bg-[#c7b9a5] shadow-md rounded-2xl px-6 py-5 transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-[#c7b9a5] duration-300"
              >
                {/* Left Side - Icon + Text */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#b9a17c] rounded-full group-hover:bg-white transition">
                    {React.cloneElement(service.icon, {
                      className:
                        "text-2xl text-[#269aee] group-hover:text-[#00897b] group-hover:scale-110 transition-transform",
                    })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-100">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Right Side - Badge */}
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full shadow-sm group-hover:bg-white transition">
                  <span className="font-semibold text-sm group-hover:text-[#00897b]">
                    {service.rating.toFixed(1)}
                  </span>
                  <span className="text-[#00897b] group-hover:text-yellow-400">★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
