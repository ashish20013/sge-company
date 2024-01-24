import React from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Apeedalogo from '../images/apeedalogo.png';
import Fssailogo from '../images/fssailogo.png';
import Organicindialogo from '../images/organicindialogo.png';
import Isologo from '../images/isologo.jpeg';
const Certificate = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    touchMove: false,
  };
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="main-heading ">Our Certifications<br /> <span className=" text-black">(Under Process)</span></h2>
              <div className="underline mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="overflow-hidden shadow" style={{ marginBottom: '40px', }}>
              <Slider {...settings}>
                <div style={{ paddingLeft: '20px' }}>
                  <img className=' overflow-auto img-fluid ps-3' src={Apeedalogo} alt="Apeeda Logo" width="220" height="120" loading="lazy" />
                </div>
                <div style={{ marginRight: '20px' }}>
                  <img className='overflow-auto img-fluid ps-3' src={Fssailogo} alt="FSSAI Logo" width="220" height="120" loading="lazy" />
                </div>
                <div style={{ marginRight: '20px' }}>
                  <img className='overflow-auto img-fluid ps-3' src={Organicindialogo} alt="Organic India Logo" width="220" height="120" loading="lazy" />
                </div>
                <div style={{ marginRight: '20px' }}>
                  <img className='overflow-auto img-fluid ps-3' src={Isologo} alt="ISO Logo" width="220" height="120" loading="lazy" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Certificate;
