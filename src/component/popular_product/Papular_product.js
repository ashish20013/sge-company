import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Wheatandflour from "../images/wheatandflour.jpg";
import Rice from "../images/rice.jpg";
import Gram from "../images/gram.jpg";
import Potato from "../images/potato.jpg";
import Greenandredchillies from "../images/greenandredchillies.jpg";
import Ginger from "../images/ginger.jpg";
import Woodfruit from "../images/woodfruit.jpg";
import Papaya from "../images/papaya.jpg";
import Gooseberry from "../images/gooseberry.jpg";
import Foxnut from "../images/foxnut.jpg";
import Mustardandmustardoil from "../images/mustardandmustardoil.jpg";
const Papular_product = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <span class="main-heading btn btn-primary" type="button"><b>---  Our Popular Products  ---</b></span>

            </div>
          </div>
        </div>
      </section>
      <div className="grid gap-3 shadow" style={{ marginBottom: '40px' }} >

        <Slider {...settings}>
          <div className=""  >
            <img className='img-fluid ps-3' src={Papaya} alt="papaya_image" />
            <div className="card-body">
              <div className='col-md-12 text-center'>
                <h2 className='main-heading text-primary'>Papaya</h2>
              </div>
              <div className='col-md-12 text-center'>
                <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Order Now</b></button></Link>
              </div>
            </div>
          </div>
          <div className="">
            <img className='img-fluid ps-3' src={Rice} alt="rice_image" />
            <div className="card-body">
              <div className='col-md-12 text-center'>
                <h2 className='main-heading text-primary'>Rice</h2>
              </div>
              <div className='col-md-12 text-center'>
                <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Order Now</b></button></Link>
              </div>
            </div>
          </div>
          <div className="">
            <img className='img-fluid ps-3' src={Gram} alt="gram_image" loading="lazy" />
            <div className="card-body">
              <div className='col-md-12 text-center'>
                <h2 className='main-heading text-primary'>Gram</h2>
              </div>
              <div className='col-md-12 text-center'>
                <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Order Now</b></button></Link>
              </div>
            </div>
          </div>
          <div className="">
            <img className='img-fluid ps-3' src={Potato} alt="potato_image" loading="lazy" />
            <div className="card-body">
              <div className='col-md-12 text-center'>
                <h2 className='main-heading text-primary'>Potato</h2>
              </div>
              <div className='col-md-12 text-center'>
                <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Order Now</b></button></Link>
              </div>
            </div>
          </div>
          <div className="">
            <img className='img-fluid ps-3' src={Greenandredchillies} alt="chilli_image" loading="lazy" />
            <div className="card-body">
              <div className='col-md-12 text-center'>
                <h2 className='main-heading text-primary'>Chillies</h2>
              </div>
              <div className='col-md-12 text-center'>
                <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Order Now</b></button></Link>
              </div>
            </div>
          </div>
          <div className="">
            <img className='img-fluid ps-3' src={Ginger} alt="ginger_image" loading="lazy" />
            <div className="card-body">
              <div className='col-md-12 text-center'>
                <h2 className='main-heading text-primary'>Ginger</h2>
              </div>
              <div className='col-md-12 text-center'>
                <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Order Now</b></button></Link>
              </div>
            </div>
          </div>
          <div className="">
            <img className='img-fluid ps-3' src={Woodfruit} alt="woodfruit_image" loading="lazy" />
            <div className="card-body">
              <div className='col-md-12 text-center'>
                <h2 className='main-heading text-primary'>Woodfruit</h2>
              </div>
              <div className='col-md-12 text-center'>
                <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Order Now</b></button></Link>
              </div>
            </div>
          </div>
          <div className="">
            <img className='img-fluid ps-3' src={Wheatandflour} alt="wheat_image" loading="lazy" />
            <div className="card-body">
              <div className='col-md-12 text-center'>
                <h2 className='main-heading text-primary'>Wheat & Flour</h2>
              </div>
              <div className='col-md-12 text-center'>
                <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Order Now</b></button></Link>
              </div>
            </div>
          </div>
          <div className="">
            <img className='img-fluid ps-3' src={Gooseberry} alt="avla_image" loading="lazy" />
            <div className="card-body">
              <div className='col-md-12 text-center'>
                <h2 className='main-heading text-primary'>Gooseberry / Amla</h2>
              </div>
              <div className='col-md-12 text-center'>
                <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Order Now</b></button></Link>
              </div>
            </div>
          </div>
          <div className="">
            <img className='img-fluid ps-3' src={Foxnut} alt="foxnut_image" loading="lazy" />
            <div className="card-body">
              <div className='col-md-12 text-center'>
                <h2 className='main-heading text-primary'>Foxnut</h2>
              </div>
              <div className='col-md-12 text-center'>
                <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Order Now</b></button></Link>
              </div>
            </div>
          </div>
          <div className="">
            <img className='img-fluid ps-3' src={Mustardandmustardoil} alt="musterdoil_image" loading="lazy" />
            <div className="card-body">
              <div className='col-md-12 text-center'>
                <h2 className='main-heading text-primary'>Mustard & oil</h2>
              </div>
              <div className='col-md-12 text-center'>
                <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Order </b></button></Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}
export default Papular_product;