"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const countries = ["India", "Germany", "USA", "UK"]; // add more as needed

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const token = recaptchaRef.current?.getValue(); // ✅ works for Checkbox
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
    recaptchaRef.current?.reset(); // reset checkbox after success
  } else {
    alert("reCAPTCHA failed, please try again.");
  }
};


  return (
    <section id="contact-us" className="bg-[#333] py-12 border-t border-black/10">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Send your message in just{" "}
          <span className="text-[#0BD3B5]">1 minutes</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#222] p-6 rounded-xl shadow-lg space-y-4"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-gray-300 text-base rounded focus:outline-none focus:ring-2 focus:ring-[#0BD3B5]"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-gray-300 text-base rounded focus:outline-none focus:ring-2 focus:ring-[#0BD3B5]"
          />

          {/* Country */}
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

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number (optional)"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-gray-300 text-base rounded focus:outline-none focus:ring-2 focus:ring-[#0BD3B5]"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your message here..."
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-gray-300 text-base rounded focus:outline-none focus:ring-2 focus:ring-[#0BD3B5]"
          />

            <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-32 h-10 bg-[#0BD3B5] text-black font-semibold rounded hover:bg-[#0ab19a] transition-all"
          >
            Submit
          </button>

      
        
        </form>
      </div>
    </section>
  );
}
