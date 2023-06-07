import React, { useEffect } from 'react';
import img from './about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutSpond() {
  useEffect(() => {
    AOS.init();
  }, []);

  const columnStyles = {
    padding: '20px',
    marginTop: '58px'
  };

  return (
    <div>
      <section id="about-us" className="about-us">
        <div className="container aos-init aos-animate">
          <div className="row content">
            <div className="col-lg-6 box aos-init aos-animate" data-aos="fade-right" style={columnStyles}>
              <img
                src={img}
                alt="Left Side Image"
                style={{ width: '95%', paddingTop: '20px', paddingBottom: '60px' }}
              />
            </div>
            <div className="col-lg-6 pt-lg-0 aos-init aos-animate" data-aos="fade-left" style={columnStyles}>
              <h2 style={{ textTransform: 'uppercase', fontWeight: '600', marginBottom: '30px', color: 'black' }}>
                About Spondias
              </h2>
              <p style={{ textAlign: 'justify', color: 'black' }}>
                Spondias is a company dedicated to personal service, tailoring our expertise in
                Corporate Training & Project Consulting. We believe it is important to take the
                time to assess your specific requirements in order to provide the best solution for
                your needs. Spondias is committed to offering its customers exceptional services
                and cutting-edge technologies to enhance their revenue stream. Our team has
                extensive experience in Requirement Analysis, Designing, Planning, and project
                implementation, ensuring full control over the development process. We aim to
                provide one-stop solutions for all your customized requirements. Spondias' core
                portfolio includes Project Consulting, Skill Gap Analysis, Corporate Training, and
                Recruitment Solutions. We deliver a wide range of information technology and
                knowledge process outsourcing services to clients in the Manufacturing, Financial
                Services, Healthcare, Communications, Transportation, Retail industries, as well as
                Governments worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSpond;
