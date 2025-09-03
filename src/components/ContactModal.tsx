"use client";

import { UseSiteContext } from "@/SiteContext/SiteContext";
import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";

const countries = ["India", "Germany", "USA", "UK"];

// ✅ load dynamically (client-side only)
import type ReCAPTCHAType from "react-google-recaptcha";

// ✅ dynamic import but cast to forwardRef component
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
}) as unknown as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof ReCAPTCHAType> &
    React.RefAttributes<ReCAPTCHAType>
>;

export default function ContactModal() {
  const { openContactForm, toggleContactForm } = UseSiteContext();
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const recaptchaRef = useRef<ReCAPTCHAType>(null);

  // ✅ ensures no hydration mismatch
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, token }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", country: "", phone: "", message: "" });
      recaptchaRef.current?.reset();
      toggleContactForm(false);
    } else {
      alert("reCAPTCHA failed, please try again.");
    }
  };

  if (!openContactForm) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#333] rounded-xl w-full max-w-2xl mx-4 relative">
        <button
          onClick={() => toggleContactForm(false)}
          className="absolute top-3 right-3 text-white text-lg font-bold"
        >
          ✕
        </button>

        <section id="contact-us" className="py-12">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              Send your message in just{" "}
              <span className="text-[#0BD3B5]">1 minutes</span>
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-[#222] p-6 rounded-xl shadow-lg space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-gray-300 text-base rounded focus:outline-none focus:ring-2 focus:ring-[#0BD3B5]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-gray-300 text-base rounded focus:outline-none focus:ring-2 focus:ring-[#0BD3B5]"
              />

              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-transparent border border-white text-white text-base rounded focus:outline-none focus:ring-2 focus:ring-[#0BD3B5]"
              >
                <option value="" disabled className="bg-[#222] text-gray-300">
                  Select your country
                </option>
                {countries.map((c) => (
                  <option key={c} value={c} className="bg-[#222] text-white">
                    {c}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number (optional)"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-gray-300 text-base rounded focus:outline-none focus:ring-2 focus:ring-[#0BD3B5]"
              />

              <textarea
                name="message"
                placeholder="Your message here..."
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-gray-300 text-base rounded focus:outline-none focus:ring-2 focus:ring-[#0BD3B5]"
              />

              {/* ✅ render ReCAPTCHA only on client */}
              {isClient && (
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                />
              )}

              <button
                type="submit"
                className="w-32 h-10 bg-[#0BD3B5] text-black font-semibold rounded hover:bg-[#0ab19a] transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
