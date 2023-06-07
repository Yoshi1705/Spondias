import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";

import img1 from "./images/image_625d3a57b6.jpg"; // Hosting
import img2 from "./images/image_625d3a6ee7.jpg"; // Programming
import img3 from "./images/image_625d3a8097.jpg"; // Design
import img4 from "./images/image_625d3db74e.jpg"; // Database optimization
import img5 from "./images/image_625d3dfd5a.jpg"; // Security
import img6 from "./images/image_625d3e3ed1.jpg"; // Graphic design
import img7 from "./images/image_625d3e74em.jpg"; // National ID cards

const It = () => {
  const images = [
    { src: img1, title: "Hosting" },
    { src: img2, title: "Programming" },
    { src: img3, title: "Design" },
    { src: img4, title: "Database optimization" },
    { src: img5, title: "Security" },
    { src: img6, title: "Graphic design" },
    { src: img7, title: "National ID cards" },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials"
      style={{ padding: "60px 0", overflow: "hidden" }}
    >
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: "black", marginBottom: "10px" }}>
            IT Consulting Services
          </h2>
          <div className="underline mx-auto"></div>
        </div>
        <div className="testimonials-slider">
          <Carousel
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            {images.map((image, index) => (
              <div className="d-flex flex-row ">
                <div
                  key={index}
                  className="slider-slide d-flex flex-row "
                  style={{ width: "380px" }}
                >
                  <div className="testimonial-wrap">
                    <div
                      className="testimonial-item"
                      style={{ boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.08)" }}
                    >
                      <img
                        src={image.src}
                        className="testimonial-img"
                        alt=""
                        style={{ width: "300px" }}
                      />
                      <h1
                        style={{
                          fontSize: "25px",
                          color: "black",
                          marginTop: "18px",
                          fontFamily: "400",
                        }}
                      >
                        {image.title}
                      </h1>
                    </div>
                  </div>
                </div>

                <div
                  key={index + 1}
                  className="slider-slide d-flex flex-row"
                  style={{ width: "380px" }}
                >
                  <div className="testimonial-wrap">
                    <div
                      className="testimonial-item"
                      style={{ boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.08)" }}
                    >
                      <img
                        src={image.src}
                        className="testimonial-img"
                        alt=""
                        style={{ width: "300px" }}
                      />
                      <h1
                        style={{
                          fontSize: "25px",
                          color: "black",
                          marginTop: "18px",
                          fontFamily: "400",
                        }}
                      >
                        {image.title}
                      </h1>
                    </div>
                  </div>
                </div>

                <div
                  key={index + 2}
                  className="slider-slide d-flex flex-row"
                  style={{ width: "380px" }}
                >
                  <div className="testimonial-wrap">
                    <div
                      className="testimonial-item"
                      style={{ boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.08)" }}
                    >
                      <img
                        src={image.src}
                        className="testimonial-img"
                        alt=""
                        style={{ width: "300px" }}
                      />
                      <h1
                        style={{
                          fontSize: "25px",
                          color: "black",
                          marginTop: "18px",
                          fontFamily: "400",
                        }}
                      >
                        {image.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default It;
