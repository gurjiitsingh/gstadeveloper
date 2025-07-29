import Link from "next/link";
import React from "react";

const ServicesSection = () => {
  return (
    <section className="service-area w-full " id="services">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div className="w-full text-2xl flex flex-start">
              <h1>SERVICES</h1>
            </div>
            <div className="mf">
              <h2 className="w-full lg:w-1/2">
                You can ask the question regarding the issues we will solve that
                together for sure
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-3">
            <div className="w-full md:w-[50%] lg:w-[30%]" data-aos="fade-up">
              <div className="service-wrap text-center">
                <div className="service-icon"></div>
                <h3>Restaurant Food App</h3>
                <p>
                  Ready-to-deploy ordering web app built with modern stack.
                  Great for restaurant websites.
                </p>
                <Link
                  href="/food-app"
                  className="text-blue-600 underline text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[50%] lg:w-[30%]" data-aos="fade-up">
              <div className="service-wrap text-center">
                <div className="service-icon"></div>
                <h3>E-commerce Web App</h3>
                <p>
                  Fully-featured online store platform with cart, checkout,
                  admin panel, and secure payments.
                </p>
                <Link
                  href="/ecommerce-app"
                  className="text-blue-600 underline text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[50%] lg:w-[30%]" data-aos="fade-left">
              <div className="service-wrap text-center">
                <div className="service-icon"></div>
                <h3>Management Software</h3>
                <p>
                  We develop custom management software according to your
                  requirements.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[50%] lg:w-[30%]" data-aos="fade-right">
              <div className="service-wrap text-center">
                <div className="service-icon"></div>
                <h3>Website design</h3>
                <p>
                  Website design which provides a gateway to your business on
                  the internet.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[50%] lg:w-[30%]" data-aos="fade-up">
              <div className="service-wrap text-center">
                <div className="service-icon"></div>
                <h3>Email Marketing Integration</h3>
                <p>
                  We integrate custom email marketing tools to help you send
                  campaigns, newsletters, and automated messages directly from
                  your app.
                </p>
                <Link
                  href="/email-marketing"
                  className="text-blue-600 underline text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[50%] lg:w-[30%]" data-aos="fade-right">
              <div className="service-wrap text-center">
                <div className="service-icon"></div>
                <h3>Custom Web Applications</h3>
                <p>
                  We build powerful web apps tailored to your business needs
                  using modern tech like Next.js, Node.js, and Express.
                </p>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
