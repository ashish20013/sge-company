import React from 'react'
import Wheatandflour from "../images/wheatandflour.jpg";
import Rice from "../images/rice.jpg";
import Gram from '../images/gram.jpg';
import Potato from '../images/potato.jpg';
import Greenandredchillies from "../images/greenandredchillies.jpg";
import Ginger from '../images/ginger.jpg';
import Woodfruit from "../images/woodfruit.jpg";
import Papaya from '../images/papaya.jpg';
import Gooseberry from "../images/gooseberry.jpg";
import Foxnut from "../images/foxnut.jpg";
import Mustardandmustardoil from "../images/mustardandmustardoil.jpg";

const Crousel = () => {
  return (
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                  <img src={Wheatandflour} className="d-block w-100 img-fluid" style={{ height: '650px' }} alt="Wheat_and_flour_image"/>
                  <div class="carousel-caption d-none d-md-block"> 
                      <h2 class="main-heading btn btn-primary" type="button"><b>  Wheat and Flour  </b></h2>
                  </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                  <img src={Rice} className="d-block w-100 h-60 img-fluid" alt="rice_image" style={{ height: '650px' }} />
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="main-heading btn btn-primary" type="button"><b>  Rice  </b></h2>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src={Gram} className="d-block w-100 h-60 img-fluid" alt="gram_image" style={{ height: '650px' }} />
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="main-heading btn btn-primary" type="button"><b>  Gram  </b></h2>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src={Potato} className="d-block w-100 h-60 img-fluid" alt="potato_image" style={{ height: '650px' }} />
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="main-heading btn btn-primary" type="button"><b>  Potato  </b></h2>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src={Greenandredchillies} className="d-block w-100 img-fluid" alt="chilli_image" style={{ height: '650px' }} />
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="main-heading btn btn-primary" type="button"><b>  Green and Red Chillies  </b></h2>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src={Ginger} className="d-block w-100 img-fluid" alt="ginger_image" style={{ height: '650px' }} />
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="main-heading btn btn-primary" type="button"><b>  Ginger  </b></h2>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src={Woodfruit} className="d-block w-100 img-fluid" alt="wood_fruit_image" style={{ height: '650px' }} />
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="main-heading btn btn-primary" type="button"><b>  Wood Fruit  </b></h2>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src={Papaya} className="d-block w-100 img-fluid" alt="papaya_image" style={{ height: '650px' }} />
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="main-heading btn btn-primary" type="button"><b>  Papaya  </b></h2>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src={Gooseberry} className="d-block w-100 img-fluid" alt="Gooseberry_image" style={{ height: '650px' }} />
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="main-heading btn btn-primary" type="button"><b>  Gooseberry / Amla  </b></h2>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src={Foxnut} className="d-block w-100 img-fluid" alt="foxnut_image" style={{ height: '650px' }} />
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="main-heading btn btn-primary" type="button"><b>  Foxnut  </b></h2>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src={Mustardandmustardoil} className="d-block w-100 img-fluid" alt="Mustard_and_mustard_oil_image" style={{ height: '650px' }} />
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="main-heading btn btn-primary" type="button"><b>  Mustard and Mustard oil  </b></h2>
                  </div>
              </div>
              
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden"></span>
          </button>
      </div>
  )
}

export default Crousel;