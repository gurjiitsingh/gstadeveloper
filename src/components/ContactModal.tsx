"use client";

import { UseSiteContext } from "@/SiteContext/SiteContext";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import type ReCAPTCHAType from "react-google-recaptcha";

// --- Dynamic Import with forwardRef ---
const ReCAPTCHA = dynamic(
  () => import("react-google-recaptcha"),
  { ssr: false }
) as unknown as React.ForwardRefExoticComponent<
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm({ ...form, [e.target.name]: e.target.value });

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
              {/* inputs here... */}

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
