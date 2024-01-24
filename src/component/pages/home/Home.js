import React from 'react';
import './Home.css';
import Crousel from '../../crousel/Crousel'
import Value from '../../value/Value';
import Certificate from '../../certificate/Certificate';
import Papularproduct from '../../popular-product/Papular-product';



const Home = () => {
    return (
        <div className='home'>
            <Crousel/>
            <Value/>
            <Papularproduct/>
            <Certificate />
        </div>
    )
}
export default Home;


