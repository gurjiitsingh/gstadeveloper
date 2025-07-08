"use client";

import Link from "next/link";

export default function RecentProjects() {
  return (
    <section id="projects" className="px-4 md:px-10 ">
      <div className="max-w-[1280px] mx-auto ">
        <div className="flex flex-col">
          <div className="content-title">
            <h1> Recent Projects</h1>
          </div>

          {/* <h3 className="link-to-all">
            <Link
              className="main-nav-link"
              href="https://gstadeveloper.com/our-work/"
            >
              See more projects...
            </Link>
          </h3> */}

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="w-full sm:w-[48%] md:w-[50%] lg:w-[33%]">
              <div className="mx-auto p-1 border border-zinc-300 rounded-md img-wrapper">
                <a href="http://dhcluk.com">
                  <img
                    src="/dhcluk-1.jpg"
                    className="card-img-top rounded-md max-h-[300px] mx-auto"
                    alt="..."
                  />
                </a>
              </div>
              <div className="project-bot">
                <div className="title">
                  <h5>Dream Home Construction Ltd uk</h5>
                </div>
                <div className="project-link">
                  <p>
                    A UK-based construction company.
                    <br />
                    <a href="https://dhcluk.com">www.dhcluk.com</a>
                  </p>
                </div>
              </div>
            </div>

          

            <div className="w-full sm:w-[48%] md:w-[33%] lg:w-[33%]">
              <div className="mx-auto p-1 border border-zinc-300 rounded-md img-wrapper">
                <a href="http://masala-gf.de">
                  <img
                    src="/masala-gf-1.webp"
                    className="card-img-top rounded-md max-h-[300px] mx-auto"
                    alt="..."
                  />
                </a>
              </div>
              <div className="project-bot">
                <div className="title">
                  <h5>Masala </h5>
                </div>
                <div className="project-link">
                  <p>
                    German food app.
                    <br />
                    <a href="https://masala-gf.de">
                      www.masala-gf.de
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-[48%] md:w-[50%] lg:w-[33%] ">
              <div className="mx-auto p-1 border border-zinc-300 rounded-md img-wrapper ">
              <a href="https://manbrarconstruction.com/">
                <img
                  src="/manbrarconstruction-1.png"
                  className="card-img-top rounded-md max-h-[300px] mx-auto"
                  alt="..."
                />
                </a>
              </div>
              <div className="project-bot">
                <div className="title">
                  <h5>Construction Company</h5>
                </div>
                <div className="project-link">
                  <p>
                    Man Brar Construction Ltd. UK.
                    <br />
                    <a href="https://manbrarconstruction.com/">
                      www.manbrarconstruction.com/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
       
      </div>
   
    </section>
  );
}
