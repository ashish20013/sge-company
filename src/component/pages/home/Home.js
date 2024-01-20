import React from 'react'
import './Home.css';
import Crousel from '../../crousel/Crousel'
import Value from '../../value/Value';
import Certificate from '../../certificate/Certificate';
import Papular_product from '../../popular_product/Papular_product';


const Home = () => {
    return (
        <>
            <Crousel/>
            <Value/>
            <Papular_product/>
            <Certificate/>
            
            
        </>
    )
}

export default Home;


