import React from 'react'

const Value = () => {
    return (
        <div className="accordion container mt-5" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header bg-dark shadow">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <strong>About Us</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body ">
                        We are merchant exporters of foodstuffs and allied packaging materials. We deal in Grains and Cereals, Pulses, Spices, Edible oils, Fruits & Vegetables. <br />
                        We have a good supply chain network with farmers, producers, and suppliers of food items, as well as multiple joint ventures with some reliable organizations that produce very high-quality natural and organic food products of international quality standards.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header shadow">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <strong> Our Vision</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <p className="accordion-body">
                        Our source of inspiration is to become an authentic and respected organization in the agriculture industry, providing good food to society and meeting the growing global demand for safe, nutritious, and responsibly produced food through ethical practices, and creating value for all stakeholders.

                    </p>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header shadow">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>Our Mission</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        Shri Gwal Exim Private Limited, we are dedicated to supplying high-quality food materials to our consumers through revolutionizing the agriculture industry. We are committed to fostering partnerships and driving research and development.
                        <br />
                        Our mission is to empower farmers and the supply chain system of the agriculture industry and providing high-quality foodstuffs to global consumers.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Value;