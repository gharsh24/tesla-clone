import React from 'react';
import ModelIntro from './ModelIntro';
import CarouselSection from './CarouselSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


function ModelS(){
    return <div>
        <ModelIntro
            url="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Main-Hero-Desktop-LHD"
            heading="Model S"
            option="Plaid"
            btname="Demo Drive"
            range="396mi"
            pickup="1.99 s"
            topSpeed="200 mph"
            hp="1,020 hp"
        />
        <div className='fade-effect'></div>
        <div className='black-bg'>
            <h3>Interior of the Future</h3>
        </div>
        
        <div className='car-section' style={{backgroundImage: `url(https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Interior-Hero-Desktop-LHD)`}}></div>
        <CarouselSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        
    </div>
}

export default ModelS;