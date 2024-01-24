import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className='bg-dark text-white pt-0 pb-1'>
      <div className='container text-center text-md-left'>
        <div className='row text-center text-md-left'>
          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
            <h4 className='text-uppercase mb-4 font-weight-bold text-warning'>Our Vision</h4>
            <p>
              Our source of inspiration is to become an authentic and respected organization in the agriculture industry, providing good food to society and meeting the growing global demand for safe, nutritious, and responsibly produced food through ethical practices, thus creating value for all stakeholders.
            </p>
          </div>
          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Get in Touch</h5>
            <p>
              <i className="bi bi-envelope" style={{ marginRight: '5px' }}></i> info@shrigwalexim.com
            </p>
            <p>
              <i className="bi bi-houses" style={{ marginRight: '5px' }}></i> New Delhi, India
            </p>
            <p>
              <i className="bi bi-telephone" style={{ marginRight: '5px' }}></i> +91 9350132742
            </p>
            <p>
              <i className="bi bi-headset" style={{ marginRight: '5px' }}></i> +91 8576891104
            </p>
          </div>
          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Registered Office</h5>
            <p>
              <i className="bi bi-buildings" style={{ marginRight: '5px' }}></i>
              Plot No 10, Sainik Vihar, PH 3, Mohan Garden,
              Uttam Nagar, Delhi, 110059, India
            </p>
            <span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5533522807077!2d77.0302433752895!3d28.643145675658925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051cc7407c47%3A0x6e8c34d35d0906eb!2sShri%20Gwal%20Exim%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1704677359302!5m2!1sen!2sin"
                width="330"
                height="230"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"

              ></iframe>
            </span>
          </div>
        </div>
        <hr className='mb-4'></hr>
        <div className='row align-items-center'>
          <div className='col-md-7 col-lg-8'>
            <ul className='list-unstyled list-inline'>
              <li className='list-inline-item'>
                <a href='/' className='btn-floating btn-sm text-white' style={{ marginLeft: '23px' }}><i className="bi bi-facebook" style={{ fontSize: '30px' }} ></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='/' className='btn-floating btn-sm text-white' style={{ marginLeft: '23px' }}><i className="bi bi-instagram" style={{ fontSize: '30px' }}></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='/' className='btn-floating btn-sm text-white' style={{ marginLeft: '23px' }}><i className="bi bi-youtube" style={{ fontSize: '30px' }}></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='/' className='btn-floating btn-sm text-white' style={{ marginLeft: '23px' }}><i className="bi bi-linkedin" style={{ fontSize: '30px' }}></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='/' className='btn-floating btn-sm text-white' style={{ marginLeft: '23px' }}><i className="bi bi-twitter-x" style={{ fontSize: '30px' }}></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='/' className='btn-floating btn-sm text-white' style={{ marginLeft: '23px' }}><i className="bi bi-pinterest" style={{ fontSize: '30px' }}></i></a>
              </li>
            </ul>
          </div>
          <div className='col-md-5 col-lg-4'>
            <div className='text-center text-md-right'>
              <p>Copyright © 2024. All rights reserved. <small className='text-warning'>Shri Gwal Exim Pvt. Ltd.</small></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
