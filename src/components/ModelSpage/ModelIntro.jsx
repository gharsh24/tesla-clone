import React from 'react';
import Button from 'react-bootstrap/Button';

import "../../css/models.css";


function ModelIntro (props){
    const divStyle = {
        backgroundImage: `url(${props.url})`,
    };

    

    return <div className="car-section section" style={divStyle}>
        <h1>{props.heading}</h1>
        <p style={{color:'black'}}>{props.option}</p> 
        
        <div className='specs'>
            <div className='feature'>
                <h3>{props.range}</h3>
                <p>Range (EPA est.)</p>
            </div>
            <div className='feature'>
                <h3>{props.pickup}</h3>
                <p>0-60 mph*</p>
            </div>
            <div className='feature'>
                <h3>{props.topSpeed}</h3>
                <p>Top Speed</p>
            </div>
            <div className='feature'>
                <h3>{props.hp}</h3>
                <p>Peak Power</p>
            </div>
        </div>

        <div className='model-button-container'>
        <Button variant="light" style={{ width: '250px' }} >Order Now</Button>
        <Button variant="outline-light" style={{ width: '250px' }}>{props.btname}</Button></div>

    </div>
}

export default ModelIntro;