import React from 'react'
import Papaya from '../../images/papaya.jpg';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
            We are merchant exporters of foodstuffs and allied packaging materials. We deal in Grains and Cereals, Pulses, Spices, Edible oils, Fruits & Vegetables. <br />
            We have a good supply chain network with farmers, producers, and suppliers of food items, as well as multiple joint ventures with some reliable organizations that produce very high-quality natural and organic food products of international quality standards. <br />
              
          </p>

        </div>

        <div className="col-md-6">
          <h2>Our Vission</h2>
          <p>
            Our source of inspiration is to become an authentic and respected organization in the agriculture industry, providing good food to society and meeting the growing global demand for safe, nutritious, and responsibly produced food through ethical practices, and creating value for all stakeholders.
          </p>

        </div>


        <div className="col-md-6">
          <img src={Papaya} alt="papaya image" className="img-fluid" loading="lazy" />
        </div>

        
       

        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            Shri Gwal Exim Private Limited, we are dedicated to supplying high-quality food materials to our consumers through revolutionizing the agriculture industry. We are committed to fostering partnerships and driving research and development.
            <br />
            Our mission is to empower farmers and the supply chain system of the agriculture industry and providing high-quality foodstuffs to global consumers.
          </p>

        </div>
       

      </div>
    </div>
  )
}

export default About