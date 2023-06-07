import React from "react";

import img1 from "./clients/Dva.png";
import img2 from "./clients/euronext.jpg";
import img3 from "./clients/client8.png";
import img4 from "./clients/client7.png";
import img5 from "./clients/client6.png";
import img6 from "./clients/client5.png";
import img7 from "./clients/client4.png";
import img8 from "./clients/client3.png";
import img9 from "./clients/client1.png";

import './styles.css';

function Testimonials() {
  return (
    <section id="clients-data" className="clients-data">
      <div className="container aos-init aos-animate pt-8" data-aos="fade-up">
        <div className="section-title">
          <h2 style={{paddingBottom:'0',marginBottom:'0'}}>Clients</h2>
          <div className="underline mx-auto"></div>
        </div>
         
        <div className="row no-gutters clients-wrap clearfix aos-init aos-animate" data-aos="fade-up">
          <div className="col-lg-3 col-md-4 col-6">
            <a href="https://baardva.com/" target="_blank">
              <div class="client-logo">
                <img src={img1} style={{height:'57px',width:'100px'}} className="img-fluid"/>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="https://www.euronext.com/en" target="_blank">
              <div class="client-logo">
                <img src={img2}  style={{height:'57px',width:'100px'}} />
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="http://imvsomalia.com/ImvAdmin/login" target="_blank">
              <div class="client-logo">
                <img src={img3}  style={{height:'57px',width:'100px'}} />
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <a href=" https://www.gre.ac.uk/" target="_blank">
              <div class="client-logo">
                <img src={img4}  style={{height:'57px',width:'100px'}}/>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href=" #" target="_blank">
              <div class="client-logo">
                <img src={img5}  style={{height:'57px',width:'100px'}} />
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href=" https://taamsom.com/" target="_blank">
              <div class="client-logo">
                <img src={img6}  style={{height:'57px',width:'100px'}} />
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <a href=" https://3fiidshe.com/login.php" target="_blank">
              <div class="client-logo">
                <img src={img7}  style={{height:'57px',width:'100px'}} />
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href=" https://www.horngl.com/" target="_blank">
              <div class="client-logo">
                <img src={img8}   style={{height:'57px',width:'100px'}}/>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href=" https://proxyram.com/" target="_blank">
              <div class="client-logo">
                <img src={img9}   style={{height:'57px',width:'100px'}}/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
