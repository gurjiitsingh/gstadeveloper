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
          <div className="w-full md:w-[50%] lg:w-[30%]" data-aos="fade-right">
            <div className="service-wrap text-center">
              <div className="service-icon"></div>
              <h3>Website design</h3>
              <p>
                Website design which provides a gateway to your business on the
                internet.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[50%] lg:w-[30%]" data-aos="fade-right">
            <div className="service-wrap text-center">
              <div className="service-icon"></div>
              <h3>Web application</h3>
              <p>
                We use Node.js and Express to develop management software and
                other applications.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[50%] lg:w-[30%]" data-aos="fade-down">
            <div className="service-wrap text-center">
              <div className="service-icon"></div>
              <h3>Next.js</h3>
              <p>
                Next.js application for web applications, and e-commerce
                websites.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[50%] lg:w-[30%]" data-aos="fade-right">
            <div className="service-wrap text-center">
              <div className="service-icon"></div>
              <h3>React.js</h3>
              <p>We use React.js for front-end development.</p>
            </div>
          </div>

          <div className="w-full md:w-[50%] lg:w-[30%]" data-aos="fade-down">
            <div className="service-wrap text-center">
              <div className="service-icon"></div>
              <h3>WordPress</h3>
              <p>
                We use WordPress for CMS and develop custom themes and plugins.
              </p>
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
        </div>
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;
