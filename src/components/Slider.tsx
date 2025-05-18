"use client";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";

const Slider = () => {
  return (
    <div className="wrapper">
      <div className="slider-wraper">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <picture>
                <source media="(max-width: 576px)" srcSet="/slider/1-576.jpg" />
                <source media="(max-width: 1200px)" srcSet="/slider/1-992.jpg" />
                <source media="(max-width: 1500px)" srcSet="/slider/1-1200.jpg" />
                <img className="d-block w-100" src="/slider/1.jpg" alt="Slide 1" />
              </picture>
              <div className="carousel-caption carousel-caption-postion d-md-block">
                <h1>Gsta Developer solutions.</h1>
                <h2>IT solutions, CMS, Web Applications, Website Design.</h2>
              </div>
            </div>

            <div className="carousel-item">
              <picture>
                <source media="(max-width: 576px)" srcSet="/slider/2-576.jpg" />
                <source media="(max-width: 1200px)" srcSet="/slider/2-992.jpg" />
                <source media="(max-width: 1500px)" srcSet="/slider/2-1200.jpg" />
                <img className="d-block w-100" src="/slider/2.jpg" alt="Slide 2" />
              </picture>
              <div className="carousel-caption carousel-caption-postion d-md-block">
                <h1>Responsive web design</h1>
                <h2>Looks good on mobile and 4K resolution screens.</h2>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="slider-cover"></div>
        <div className="slider-cover2"></div>
      </div>
    </div>
  );
};

export default Slider;