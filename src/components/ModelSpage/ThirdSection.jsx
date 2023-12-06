import React from 'react';
import "../../css/third-section.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ThirdSection() {
    return <div className='third-section'>
        <div className='third-section-image' style={{ backgroundImage: `url(https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2800,c_fit,f_auto,q_auto:best/Model-S-Performance-Hero-Desktop-LHD)` }}>

            <div className='highlight'>
                <div className='feat'>
                    <h4>1,020 <span>hp</span></h4>
                    <p>Peak Power</p>
                </div>
                <div className='feat'>
                    <h4>9.23 <span>s</span></h4>
                    <p>@155 mph 1/4 mile</p>
                </div>
                <div className='feat'>
                    <h4>1.99 <span>s</span></h4>
                    <p>0-60 mph*</p>
                </div>
            </div>
        </div>

        <div className='order'>
            <div className='order-option'> 
            <h5>Plaid</h5>
            <h2>Beyond Ludicrous</h2>
        
            <div className='button'><Button variant="outline-dark" style={{ width: '170px' }} >Order Now</Button></div>
            <div className='button'><Button variant="light" style={{ width: '170px' }}>Compare Models</Button></div>

            </div>
            <div className='text-cont'>
            Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.
            </div>
        </div>
    </div>
}

export default ThirdSection;