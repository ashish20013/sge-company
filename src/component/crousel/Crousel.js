import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        touchMove: false,
    };
    return (
            <div className="overflow-hidden shadow" style={{ marginBottom: '40px' }} >
                <Slider {...settings}>
                    <div className=""  >
                    <img
                        src={Wheatandflour}
                        className="d-block w-100 img-fluid"
                        srcSet={`${Wheatandflour} 500w, ${Wheatandflour} 1000w, ${Wheatandflour} 1500w`}
                        sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, 1500px"
                        alt="Wheat and flour" style={{ maxHeight: '650px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="main-heading btn btn-primary" type="button"><b> Wheat and Flour  </b></h2>
                    </div>  
                    </div>
                    <div className="">
                    <img
                        src={Rice}
                        className="d-block w-100 img-fluid"
                        srcSet={`${Rice} 500w, ${Rice} 1000w, ${Rice} 1500w`}
                        sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
                        alt="Rice" style={{ maxHeight: '650px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="main-heading btn btn-primary" type="button"><b>  Rice  </b></h2>
                    </div>
                    </div>
                    <div className="">
                    <img
                        src={Papaya}
                        className="d-block w-100 img-fluid"
                        srcSet={`${Papaya} 500w, ${Papaya} 1000w, ${Papaya} 1500w`}
                        sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
                        alt="Papaya" style={{ maxHeight: '650px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="main-heading btn btn-primary" type="button"><b>  Papaya  </b></h2>
                    </div>
                    </div>
                    <div className="">
                    <img
                        src={Foxnut}
                        className="d-block w-100 img-fluid"
                        srcSet={`${Foxnut} 500w, ${Foxnut} 1000w, ${Foxnut} 1500w`}
                        sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
                        alt="Fooxnut" style={{ maxHeight: '650px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="main-heading btn btn-primary" type="button"><b>  Foxnut  </b></h2>
                    </div>
                    </div>
                    <div className="">
                    <img
                        src={Gram}
                        className="d-block w-100 img-fluid"
                        srcSet={`${Gram} 500w, ${Gram} 1000w, ${Gram} 1500w`}
                        sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
                        alt="Gram" style={{ maxHeight: '650px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="main-heading btn btn-primary" type="button"><b>  Gram  </b></h2>
                    </div>  
                    </div>
                    <div className="">
                    <img
                        src={Potato}
                        className="d-block w-100 img-fluid"
                        srcSet={`${Potato} 500w, ${Potato} 1000w, ${Potato} 1500w`}
                        sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
                        alt="Potato" style={{ maxHeight: '650px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="main-heading btn btn-primary" type="button"><b>  Potato  </b></h2>
                    </div> 
                    </div>
                    <div className="">
                    <img
                        src={Greenandredchillies}
                        className="d-block w-100 img-fluid"
                        srcSet={`${Greenandredchillies} 500w, ${Greenandredchillies} 1000w, ${Greenandredchillies} 1500w`}
                        sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
                        alt="Green and Red Chillies" style={{ maxHeight: '650px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="main-heading btn btn-primary" type="button"><b>  Green and Red Chillies  </b></h2>
                    </div> 
                    </div>
                    <div className="">
                    <img
                        src={Ginger}
                        className="d-block w-100 img-fluid"
                        srcSet={`${Ginger} 500w, ${Ginger} 1000w, ${Ginger} 1500w`}
                        sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
                        alt="Ginger" style={{ maxHeight: '650px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="main-heading btn btn-primary" type="button"><b>  Ginger  </b></h2>
                    </div> 
                    </div>
                    <div className="">
                    <img
                        src={Gooseberry}
                        className="d-block w-100 img-fluid"
                        srcSet={`${Gooseberry} 500w, ${Gooseberry} 1000w, ${Gooseberry} 1500w`}
                        sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
                        alt="Gooseberry" style={{ maxHeight: '650px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="main-heading btn btn-primary" type="button"><b>  Gooseberry / Amla  </b></h2>
                    </div>
                    </div>
                    <div className="">
                    <img
                        src={Woodfruit}
                        className="d-block w-100 img-fluid"
                        srcSet={`${Woodfruit} 500w, ${Woodfruit} 1000w, ${Woodfruit} 1500w`}
                        sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
                        alt="Wood Fruit" style={{ maxHeight: '650px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="main-heading btn btn-primary" type="button"><b>  Mustard and Mustard oil  </b></h2>
                    </div> 
                    </div>
                    <div className="">
                    <img
                        src={Mustardandmustardoil}
                        className="d-block w-100 img-fluid"
                        srcSet={`${Mustardandmustardoil} 500w, ${Mustardandmustardoil} 1000w, `}
                        sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
                        alt="Mustard and Mustard oil" style={{ maxHeight: '650px' }}
                    />
                      <div className="carousel-caption d-none d-md-block">
                        <h2 className="main-heading btn btn-primary" type="button"><b>  Mustard and Mustard oil  </b></h2>
                     </div>
                    </div>
                </Slider>
            </div>
    )
}
export default Crousel;