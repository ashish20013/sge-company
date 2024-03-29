import React from 'react';
import { useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Gwallogs from '../images/gwallogos.png';


const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const closeNav = () => setIsNavCollapsed(true); // Function to close the navbar
    return (

        <header className="navbar navbar-expand-lg bg-body-tertiary pt-0 pb-0 shadow sticky-top">
            <nav className="container-fluid">
                <Link to='/' className="navbar-brand pt-.500 pb-.500">
                    <img src={Gwallogs} alt="Shri Gwal Logo" width="100" height="50" />
                </Link>
                <button
                    className="navbar-toggler pt-0 pb-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse pt-0 pb-0`} id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto mb-0 mb-lg-0" style={{ marginLeft: 'auto' }}>
                        <li className="nav-item">
                            <Link to='/' className="nav-link active-hover" style={{ marginLeft: '10px', marginRight: '20px' }} onClick={closeNav} ><b>Home</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link active-hover" style={{ marginRight: '20px', marginLeft: '10px' }} onClick={closeNav}><b>About Us</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/product' className="nav-link active-hover" style={{ marginRight: '20px', marginLeft: '10px' }} onClick={closeNav}><b>Our Products</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/partner' className="nav-link active-hover" style={{ marginRight: '20px', marginLeft: '10px' }} onClick={closeNav}><b>Our Partners</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Inqury' className="nav-link active" style={{ marginRight: '20px', marginLeft: '10px' }} onClick={closeNav}>
                                <button type="button" className="btn btn-outline-success"><b>Send Buy Inquiry</b></button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link active" style={{ marginRight: '20px', marginLeft: '10px' }} onClick={closeNav}>
                                <button type="button" className="btn btn-outline-primary"><b>Contact Us</b></button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Header;