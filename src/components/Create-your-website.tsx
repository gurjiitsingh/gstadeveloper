import React from "react";
import { FiPhoneCall, FiDollarSign, FiCheckCircle } from "react-icons/fi";

const CreateWebsite = () => {
  return (
    <section
      id="create-website-section"
      className="bg-gradient-to-b from-[#fdfcfb] via-[#f7f4f1] to-[#ece3da] text-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-snug">
            Let’s Create <br /> Your Website
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Getting your professional website live is{" "}
            <strong>simple and hassle-free</strong>. Just follow these three
            steps and we’ll handle the rest.
          </p>

          {/* Styled Cards List */}
          <div className="space-y-5">
            {/* Step 1 */}
            <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="bg-[#fcd681] text-[#8f8880] p-3 rounded-full">
                  <FiPhoneCall size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Call Us
                  </h3>
                  <p className="text-sm text-gray-600">
                    Discuss your website or project requirements with our team.
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-500">Step 1</span>
            </div>

            {/* Step 2 */}
            <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="bg-[#fcd681] text-[#8f8880] p-3 rounded-full">
                  <FiDollarSign size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Pay Token Money
                  </h3>
                  <p className="text-sm text-gray-600">
                    We’ll start work and share a prototype for your review.
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-500">Step 2</span>
            </div>

            {/* Step 3 */}
            <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="bg-[#fcd681] text-[#8f8880] p-3 rounded-full">
                  <FiCheckCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Review & Finalize
                  </h3>
                  <p className="text-sm text-gray-600">
                    We refine the design and backend until everything is perfect.
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-500">Step 3</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <img
            src="/how-create-your-web-app.jpg"
            alt="Website Creation Process"
            className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CreateWebsite;
