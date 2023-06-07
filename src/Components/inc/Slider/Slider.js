import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./slide/slide-1.jpg";
import image2 from "./slide/slide-2.jpg";
import image3 from "./slide/slide-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Slider.css";

function Slider() {
  useEffect(() => {
    AOS.init();
  }, []);

  const item = (img, tag1, tag2, p, btn) => {
    return (
      <Carousel.Item style={{ backgroundColor: "#29a9e2" }}>
        <div
          className="overlay-1"
          style={{ backgroundImage: `url(${img})` }}
          data-aos="fade-up"
        >
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 className="animate-character" data-aos="fade-up">
                {tag1}
              </h2>
              <h2 className="animate-character" data-aos="fade-up">
                {tag2}
              </h2>
              <p className="sub-text" data-aos="fade-up">
                {p}
              </p>
              <a
                className="text-center btn text-white"
                style={{
                  backgroundColor: "#29a9e2",
                  fontFamily: "Imprima, sans-serif",
                }}
                href="contact.php"
                data-aos="fade-up"
              >
                {btn}
              </a>
            </div>
          </div>
        </div>
      </Carousel.Item>
    );
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#29a9e2",
        paddingTop: "5px",
        paddingLeft: "0",
        paddingRight: "0",
      }}
    >
      <section id="hero">
        <Carousel fade>
          {item(
            image1,
            "Welcome to",
            "Spondias",
            "Development services with the latest technology",
            "Let's Connect"
          )}
          {item(
            image2,
            "Best Choice for",
            "Your Business",
            "Spondias is a company dedicated to personal service, tailoring our expertise in Corporate Training & Project Consulting.",
            "Let's Connect"
          )}
          {item(
            image3,
            "Professional",
            "Software Services",
            "We offer a wide range of software solutions with the latest technologies",
            "Let's Connect"
          )}
        </Carousel>
      </section>
    </div>
  );
}

export default Slider;
