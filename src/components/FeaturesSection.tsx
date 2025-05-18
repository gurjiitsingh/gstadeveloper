"use client";

import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-left">
                Let's create your website
              </h1>
              <h2 className="text-lg text-left text-gray-600">
                It is very easy to create a website, there are few steps.
              </h2>
            </div>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-right">
            <div className="relative w-full h-56">
              <Image
                src="/mobile.jpg"
                alt="Call us"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Call us</h4>
              <p className="text-gray-600">
                Discuss about your website or project requirements.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-dotted border-2 border-gray-300" data-aos="fade-down">
            <div className="relative w-full h-56">
              <Image
                src="/dollar-sign-150.jpg"
                alt="Token Payment"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Just pay token money</h4>
              <p className="text-gray-600">
                We will start project work, develop a prototype, and show you.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-left">
            <div className="relative w-full h-56">
              <Image
                src="/lapto-150.jpg"
                alt="Your review"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Your review</h4>
              <p className="text-gray-600">
                After taking your reviews we modify or make changes to the design
                and backend software (functionality) of the website project.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;