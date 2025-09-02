import { UseSiteContext } from "@/SiteContext/SiteContext";
import { FiMail } from "react-icons/fi";


export default function ContactButton() {
  const { toggleContactForm } = UseSiteContext();

  return (
    <button
      onClick={() => toggleContactForm(true)}
      className="inline-flex items-center gap-2 bg-[#aaabab] hover:bg-[#5f6161] text-white px-6 py-3 rounded-full text-lg font-medium transition"
    >  <FiMail className="text-xl" /> Contact Us</button>
  );
}