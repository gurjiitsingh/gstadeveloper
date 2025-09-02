// app/about/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GstaDeveloper",
  description:
    "Learn more about GstaDeveloper — building powerful Next.js online ordering apps and modern web solutions for restaurants and businesses.",
};

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">About Us</h1>

      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        At <strong>GstaDeveloper</strong>, we are passionate about building
        modern web solutions that empower restaurants and businesses. Our
        journey started with creating WordPress themes and plugins, but we soon
        realized the limitations in customization and flexibility.
      </p>

      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        This inspired us to transition into <strong>Next.js</strong>, where we
        began developing powerful management software, inventory systems, and
        fully customized web applications. Our turning point came when a
        restaurant owner asked us to build an online ordering web app —
        something fast, reliable, and tailored to their needs.
      </p>

      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Since then, we’ve focused on crafting{" "}
        <strong>Next.js online ordering platforms</strong> that combine
        scalability, performance, and modern design. These apps help restaurants
        streamline operations, enhance customer experience, and stay competitive
        in the digital age.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        Today, <strong>GstaDeveloper</strong> is dedicated to building
        innovative, user-friendly, and scalable online ordering solutions that
        truly make a difference for businesses.
      </p>
    </section>
  );
}
