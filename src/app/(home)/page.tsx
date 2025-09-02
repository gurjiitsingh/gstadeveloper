"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWrench,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import ServicesSection from "@/components/Services";
import CreateWebsite from "@/components/Create-your-website";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseUs from "@/components/Why-choose-us";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import RecentProjects from "@/components/RecentProjects";

//import { usePathname } from "next/navigation";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const { bargerMenuToggle } = UseSiteContext();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    bargerMenuToggle(false);
  }, []);

 

  return (
    <div className="w-full mx-auto flex flex-col gap-0 my-0 py-0 text-gray-900 ">
      {/* Header */}

   
{/* <Slider /> */}
      {/* Our Services */}
      <ServicesSection />

      <CreateWebsite />
      {/* <FeaturesSection /> */}
      <WhyChooseUs />
      {/* <Testimonials /> */}
<RecentProjects />
      {/* Contact Us */}
     
   
    </div>
  );
}
