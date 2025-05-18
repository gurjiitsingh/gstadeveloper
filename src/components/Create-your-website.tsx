import React from "react";

const CreateWebsite = () => {
  return (
    <section id="create-website-section">
      <div id="main-32" className="w-full bg-slate-200 px-4 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col  ">
          <div className="flex flex-col gap-3 ">
            <div className="title">
              <h1>
                Let's
              
                create
                <br />
                your
               
                website
              </h1>
            </div>
            <div className="subtitle">
              <h2>It is very easy to create a website, there are few steps.</h2>
              <h2>&nbsp;</h2>
            </div>
          </div>

          <div className="main-32-inner">
            <div className="main-32-l-inner clearfix">
              <div className="flex gap-2">

                <div className="flex flex-col flex-1 gap-2 md:border-r border-dotted border-gray-300 pl-4">
                  <div className="container-m" data-aos="fade-right">
                    <div className="card1">
                      <div className="top-img">
                        <img
                          src="/mobile.jpg"
                          alt="Mobile"
                          className="testimonial-image"
                        />
                      </div>
                      <div className="card1-body">
                        <div className="block">
                          <h4>Call us</h4>
                          <p>
                            Discus about your website or project requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 md:border-r border-dotted border-gray-300 pl-4">
                  <div className="container-m" data-aos="fade-down">
                    <div className="card1">
                      <div className="top-img">
                        <img
                          src="/dollar-sign-150.jpg"
                          alt="Dollar sign"
                          className="testimonial-image"
                        />
                      </div>
                      <div className="card1-body">
                        <div className="block">
                          <h4>Just pay token money.</h4>
                          <p>
                            We will start project work, develop a prototype, and
                            show you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="container-m" data-aos="fade-left">
                    <div className="card1">
                      <div className="top-img">
                        <img
                          src="/lapto-150.jpg"
                          alt="Laptop"
                          className="testimonial-image"
                        />
                      </div>
                      <div className="card1-body">
                        <div className="block">
                          <h4>Your review</h4>
                          <p>
                            After taking your reviews we modify or make changes
                            to the design and backend software (functionality)
                            of the website project
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateWebsite;
