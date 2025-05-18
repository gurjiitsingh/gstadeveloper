// components/WhyChooseUs.tsx

export default function WhyChooseUs() {
  return (
    <section id="features-2" className="">
      <div className="w-full px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto  block  my-10">
        <div className="w-full">
          <div className="row">
            <div className="col-md-6">
              <div className="title">
                <h1>Why choose us</h1>
              </div>
              <div
                className="subtitle aos-init aos-animate"
                data-aos="fade-down"
              >
                <p>
                  There are a few things we should consider before designing or
                  developing a website. As a website is an image of our brand
                  and our storefront on internet.
                </p>
              </div>
              <div className="mf">
                <h5>
                  We consider the following things when developing a website.
                </h5>
              </div>
            </div>
            <div className="col-md-6 s"></div>
          </div>
        </div>

        <div className="section-content container">
          <div className="row">
            <div className="col">
              {/* Feature 1 */}
              <div className="feature-box icon-left">
                <div className="icon">
                  <div
                    className="dot aos-init aos-animate"
                    data-aos="fade-left"
                  ></div>
                </div>
                <div className="content">
                  <h6>Minimal Design</h6>
                  <div className="subtitle">
                    A design that is simple but attractive, and easy to
                    navigate.
                  </div>
                  <p>
                    Easy navigation is required quality because users leave a
                    website and never revisit again when they think it is
                    difficult to find the required information.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="feature-box icon-left">
                <div className="icon">
                  <div
                    className="dot aos-init aos-animate"
                    data-aos="fade-left"
                  ></div>
                </div>
                <div className="content">
                  <h6>Website Design</h6>
                  <div className="subtitle">
                    Includes solid graphic design skills.
                  </div>
                  <p>
                    Pictures and high-end programming website application. To
                    achieve these functionalities, we work together and ensure
                    your satisfaction no matter what your needs.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="feature-box icon-left">
                <div className="icon">
                  <div
                    className="dot aos-init aos-animate"
                    data-aos="fade-left"
                  ></div>
                </div>
                <div className="content">
                  <h6>Responsive Website Design</h6>
                  <div className="subtitle">Mobile to Full HD and 4k</div>
                  <p>
                    Responsive website design that renders according to device
                    type and size.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {/* Feature 4 */}
              <div className="feature-box icon-left">
                <div className="icon">
                  <div
                    className="dot aos-init aos-animate"
                    data-aos="fade-left"
                  ></div>
                </div>
                <div className="content">
                  <h6>Brand Visibility</h6>
                  <div className="subtitle">
                    Encourages and motivates the customer to look at service and
                    the product.
                  </div>
                  <p>
                    Work with you on a website design that matches your business
                    image to enhance your company's visibility on the web.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="feature-box icon-left">
                <div className="icon">
                  <div className="dot aos-init" data-aos="fade-left"></div>
                </div>
                <div className="content">
                  <h6>No Templates</h6>
                  <div className="subtitle">
                    Create a unique and creative website design.
                  </div>
                  <p>
                    Develop a custom WordPress theme and plugin which are
                    developed according to your requirements.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="feature-box icon-left">
                <div className="icon">
                  <div className="dot aos-init" data-aos="fade-left"></div>
                </div>
                <div className="content">
                  <h6>Balance</h6>
                  <div className="subtitle">
                    Balance between good-quality and simple design.
                  </div>
                  <p>
                    Strike a balance between good-quality images and simple
                    design which does not look cluttered and confusing.
                  </p>
                </div>
              </div>

              {/* Feature 7 */}
              <div className="feature-box icon-left">
                <div className="icon">
                  <div className="dot aos-init" data-aos="fade-left"></div>
                </div>
                <div className="content">
                  <h6>Fast Download</h6>
                  <div className="subtitle">Ensure fast download time.</div>
                  <p>
                    Because visitors will not stick around to view a website
                    that takes too long to load.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
