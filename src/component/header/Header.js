import React from 'react';

import { Link } from 'react-router-dom';
import Gwallogs from '../images/gwallogos.png';


const Header = () => {



    return (

    

        <nav className="navbar navbar-expand-lg bg-body-tertiary mt-20 pb-0 shadow sticky-top">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand pt-.500 pb-.500">
                    <img src={Gwallogs} alt="Shri Gwal Logo" width="100" height="50" /> {/* Adjusted width */}
                </Link>
                <button className="navbar-toggler pt-0 pb-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse pt-0 pb-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-0 mb-lg-0" style={{ marginLeft: 'auto' }}>
                        <li className="nav-item">
                            <Link to='/' className="nav-link active-hover" style={{ marginLeft: '10px', marginRight: '20px' }} ><b>Home</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link active-hover" style={{ marginRight: '20px', marginLeft: '10px' }}><b>About Us</b></Link> {/* Added margin-right */}
                        </li>
                        <li className="nav-item">
                            <Link to='/product' className="nav-link active-hover" style={{ marginRight: '20px', marginLeft: '10px' }}><b>Our Products</b></Link> {/* Added margin-right */}
                        </li>
                        <li className="nav-item">
                            <Link to='/partner' className="nav-link active-hover" style={{ marginRight: '20px', marginLeft: '10px' }}><b>Our Partners</b></Link> {/* Added margin-right */}
                        </li>
                        <li className="nav-item">
                            <Link to='/Inqury' className="nav-link active" style={{ marginRight: '20px', marginLeft: '10px' }}>
                                <button type="button" className="btn btn-outline-success"><b>Send Buy Inquiry</b></button>
                            </Link> {/* Added margin-right */}
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link active" style={{ marginRight: '20px', marginLeft: '10px' }}>
                                <button type="button" className="btn btn-outline-primary"><b>Contact Us</b></button>
                            </Link> {/* Added margin-right */}
                        </li>


                    </ul>

                </div>
            </div>

        </nav>


    )
}

export default Header;