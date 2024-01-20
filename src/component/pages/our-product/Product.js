import React from 'react';
import { Link } from 'react-router-dom';

import Wheatandflour from "../../images/wheatandflour.jpg";
import Rice from "../../images/rice.jpg";
import Gram from '../../images/gram.jpg';
import Potato from '../../images/potato.jpg';
import Greenandredchillies from "../../images/greenandredchillies.jpg";
import Ginger from '../../images/ginger.jpg';
import Woodfruit from "../../images/woodfruit.jpg";
import Papaya from '../../images/papaya.jpg';
import Gooseberry from "../../images/gooseberry.jpg";
import Foxnut from "../../images/foxnut.jpg";
import Mustardandmustardoil from "../../images/mustardandmustardoil.jpg";
const Product = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4" style={{ margin: '20px' }}>

            <div className="col shadow" style={{ padding: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                    <img src={Wheatandflour} className="card-img-top " alt="wheat_image" />
                    <div className="card-body">
                        <div className='col-md-12 text-center'>
                            <h2 className='main-heading text-danger'>Wheat and Flour</h2>
                        </div>
                        <p className="card-text">
                            Wheat, a staple crop worldwide, is a vital source of nutrition and a key ingredient in flour production. Its versatility makes it indispensable for various food products, from bread to pasta. Flour, the finely ground powder derived from wheat, serves as a cornerstone in baking and cooking, providing the foundation for countless recipes. As a global exporter, our high-quality wheat and flour contribute to nourishing populations worldwide.
                        </p>
                        <div className='col-md-12 text-center'>
                            <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Buy Now</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col shadow" style={{ padding: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                    <img src={Rice} className="card-img-top" alt="rice_image" />
                    <div className="card-body">
                        <div className='col-md-12 text-center'>
                            <h2 className='main-heading text-danger'>Rice</h2>
                        </div>
                        <p className="card-text">Rice, a staple food for over half of the world's population, is a versatile grain with a rich cultural and culinary history. As a global exporter, our company is proud to offer a diverse range of high-quality rice varieties, including long-grain, short-grain, and aromatic types. Our commitment to sustainable farming practices ensures that our rice is not only delicious but also environmentally responsible, meeting the needs of customers worldwide.
                        </p>
                        <div className='col-md-12 text-center'>
                            <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Buy Now</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col shadow" style={{ padding: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                    <img src={Gram} className="card-img-top" alt="gram_image" loading="lazy" />
                    <div className="card-body">
                        <div className='col-md-12 text-center'>
                            <h2 className='main-heading text-danger'>Gram</h2>
                        </div>
                        <p className="card-text">Grams Cereals, a leading name in the global export market, offers a diverse range of high-quality cereals, grains, and pulses. Our products are sourced from trusted suppliers and undergo rigorous quality checks to ensure premium quality. With a commitment to sustainability and customer satisfaction, we cater to diverse international markets, providing nutritious and delicious options that meet the highest standards.
                        </p>
                        <div className='col-md-12 text-center'>
                            <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Buy Now</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col shadow" style={{ padding: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                    <img src={Potato} className="card-img-top" alt="potato_image" loading="lazy" />
                    <div className="card-body">
                        <div className='col-md-12 text-center'>
                            <h2 className='main-heading text-danger'>Potato</h2>
                        </div>
                        <p className="card-text">Potatoes, a versatile and nutritious staple, are a vital crop for global food security. With a wide variety of culinary uses, from mashed and roasted to fries and chips, potatoes are a popular choice worldwide. Rich in vitamins, minerals, and fiber, they are a valuable addition to a balanced diet. As a leading global exporter, we provide high-quality potatoes to meet diverse market demands
                        </p>
                        <div className='col-md-12 text-center'>
                            <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Buy Now</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col shadow" style={{ padding: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                    <img src={Greenandredchillies} className="card-img-top" alt="chilli_image" loading="lazy" />
                    <div className="card-body">
                        <div className='col-md-12 text-center'>
                            <h2 className='main-heading text-danger'>Green and Red Chillies</h2>
                        </div>
                        <p className="card-text">Green and red chillies are vibrant additions to cuisines worldwide, known for their fiery flavors and vibrant colors. Green chillies, with their fresh, grassy notes, are popular in Asian and Mexican dishes, while red chillies, with their rich, smoky flavor, add depth to various cuisines globally.
                        </p>
                        <div className='col-md-12 text-center'>
                            <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Buy Now</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col shadow" style={{ padding: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                    <img src={Ginger} className="card-img-top" alt="ginger_image" loading="lazy" />
                    <div className="card-body">
                        <div className='col-md-12 text-center'>
                            <h2 className='main-heading text-danger'>Ginger</h2>
                        </div>
                        <p className="card-text">Ginger, known for its distinct flavor and medicinal properties, is a versatile spice widely used in culinary and medicinal applications worldwide. As a global exporter, we source premium quality ginger from trusted growers, ensuring freshness and superior taste. Our ginger is meticulously processed and packaged to preserve its natural goodness, making it an essential ingredient for chefs, food manufacturers, and health-conscious consumers worldwide
                        </p>
                        <div className='col-md-12 text-center'>
                            <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Buy Now</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col shadow" style={{ padding: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                    <img src={Woodfruit} className="card-img-top" alt="wood_fruit_image" loading="lazy" />
                    <div className="card-body">
                        <div className='col-md-12 text-center'>
                            <h2 className='main-heading text-danger'>Wood Fruit</h2>
                        </div>
                        <p className="card-text">Wood Fruit, a tropical delight, is renowned for its sweet, aromatic flavor and vibrant colors. Grown in lush orchards, this exotic fruit offers a unique taste experience. With its enticing fragrance and juicy texture, Wood Fruit captivates consumers worldwide. Packed with essential nutrients and antioxidants, it's a wholesome choice for health-conscious individuals.
                        </p>
                        <div className='col-md-12 text-center'>
                            <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Buy Now</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col shadow" style={{ padding: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                    <img src={Papaya} className="card-img-top" alt="papaya_image" loading="lazy" />
                    <div className="card-body">
                        <div className='col-md-12 text-center'>
                            <h2 className='main-heading text-danger'>Papaya</h2>
                        </div>
                        <p className="card-text">Papaya, known for its sweet taste and vibrant color, is a tropical fruit prized for its rich nutritional content. Packed with vitamins A, C, and E, as well as antioxidants and enzymes, it offers numerous health benefits. Our carefully selected papayas are sourced from trusted growers, ensuring premium quality for consumers worldwide.
                        </p>
                        <div className='col-md-12 text-center'>
                            <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Buy Now</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col shadow" style={{ padding: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                    <img src={Gooseberry} className="card-img-top" alt="gooseberry" loading="lazy" />
                    <div className="card-body">
                        <div className='col-md-12 text-center'>
                            <h2 className='main-heading text-danger'>Gooseberry</h2>
                        </div>
                        <p className="card-text">Gooseberry are a versatile fruit prized in culinary traditions worldwide. Packed with vitamins and antioxidants, these berries are a popular choice for jams, desserts, and sauces. Our globally sourced gooseberries are carefully harvested and processed to preserve their natural goodness, making them a delightful addition to any international market.
                        </p>
                        <div className='col-md-12 text-center'>
                            <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Buy Now</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col shadow" style={{ padding: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                    <img src={Foxnut} className="card-img-top" alt="foxnut_image" loading="lazy" />
                    <div className="card-body">
                        <div className='col-md-12 text-center'>
                            <h2 className='main-heading text-danger'>Foxnut</h2>
                        </div>
                        <p className="card-text">Foxnut, also known as "makhana" or "gorgon nut," is a nutrient-rich seed harvested from the Euryale ferox plant native to Asia. Renowned for its delicate flavor and crunchy texture, foxnut is a popular ingredient in both savory and sweet dishes. With its high nutritional value and versatility, foxnut presents an enticing opportunity for global export, appealing to health-conscious consumers seeking natural, wholesome foods.
                        </p>
                        <div className='col-md-12 text-center'>
                            <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Buy Now</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col shadow" style={{ padding: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                    <img src={Mustardandmustardoil} className="card-img-top" alt="mustard_oil_image" loading="lazy" />
                    <div className="card-body">
                        <div className='col-md-12 text-center'>
                            <h2 className='main-heading text-danger'>Mustard and Mustard Oil</h2>
                        </div>
                        <p className="card-text">Mustard, a versatile condiment, is derived from the seeds of the mustard plant. Its pungent flavor and aroma make it a popular ingredient in various cuisines worldwide. Mustard oil, extracted from mustard seeds, is renowned for its culinary and medicinal uses. Rich in monounsaturated fats and antioxidants, it's prized for cooking and as a massage oil in traditional medicine.
                        </p>
                        <div className='col-md-12 text-center'>
                            <Link to="/Inqury"><button type="button" className="btn btn-outline-success"><b>Buy Now</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Product;