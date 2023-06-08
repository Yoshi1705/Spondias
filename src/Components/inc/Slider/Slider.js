import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./slide/slide-1.jpg";
import image2 from "./slide/image_62610557e5.jpg";
import image3 from "./slide/image_6267da0688.jpg";
 
import "./Slider.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Slider() {

  useEffect(() => {
    AOS.init();
  }, []);


  const item = (img, tag1, tag2, p, btn) => {
    return (
      <Carousel.Item  >
         
        <div
          className="overlay-1"
          style={{ backgroundImage: `url(${img})` ,opacity:'0.5',width:'100%'}}
          data-aos="fade-up"
        >
          </div>
          <div className="carousel-container    ">
            <div className="carousel-content animate_animated animate_fadeInUp">
              <h2  className="animate-character">
                {tag1}
              </h2>
              <h2  className="animate-character"  >
                {tag2}
              </h2>
              <p className="sub-text" >
                {p}
              </p>
              <a
                className="text-center btn text-white"
                style={{
                  backgroundColor: "#29a9e2",
                  fontFamily: "Imprima, sans-serif",
                }}
                href="contact.php"
                 
              >
                {btn}
              </a>
            </div>
          </div>
         
        
      </Carousel.Item>
    );
  };

  return (
    <div> 
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#29a9e2",
        paddingTop: "5px",
        paddingLeft: "0",
        paddingRight: "0",
      }}
    >
      </div>
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
            image3,
            "Best Choice for",
            "Your Business",
            "Spondias is a company dedicated to personal service tailoring our expertise in Corporate Training & Project Consulting",
            "Let's Connect"
          )}
          {item(
            image2,
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
