import React from 'react';
import { Helmet } from 'react-helmet';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Partner = () => {
    return (
        <main>
            <Helmet>
                <title>Our Partners - Shri Gwal Exim Pvt. Ltd.</title>
                <meta name="description" content="Proud partnership with farmers drives our global exports. Quality, collaboration ensure finest cereals, vegetables, fruits for worldwide customers" />
                <meta name="keywords" content=" Partnership, Global export, Quality commitment, Collaborative farming, Sustainable agriculture, Community growth, Fair trade, Premium products, Environmental sustainability, Organic vegetable exporter, Organic fruit exporter, Export partnerships, partners shri gwal exim, largest vegetable exporter in world, world's top grain exporters, world's top food exporters, world's largest food producers, world largest garlic exporter" />
            </Helmet>
            <div className="accordion container mt-5" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header bg-dark shadow">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <strong>Our Partners</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body ">
                            Shri Gwal Exim Pvt. Ltd., we take pride in our partnership with farmers, which forms the backbone of our global export business. Our commitment to quality begins with the source, and our collaboration with dedicated farmers ensures that we deliver the finest cereals, vegetables, and fruits to our customers worldwide.
                            <br />
                            Our partnership with farmers is built on mutual respect and trust. We work closely with them, providing support and resources to enhance agricultural practices and improve crop yields. By empowering farmers with knowledge and sustainable methods, we contribute to the growth of local communities and promote environment friendly farming practices.
                            <br />
                            We value the hard work and dedication of our farming partners, and we strive to create long-lasting relationships based on fair trade and shared success. Together, we aim to bring the best of nature's bounty to the global market, offering premium quality products that meet the diverse needs of our customers.
                            <br />
                            At Shri Gwal Exim Pvt. Ltd., our partnership with farmers is not just about business; it's about fostering a sustainable agricultural ecosystem that benefits everyone involved. Join us in our journey towards a greener, healthier planet.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Partner;