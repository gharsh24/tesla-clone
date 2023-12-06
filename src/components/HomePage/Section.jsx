import React from 'react';
import Button from 'react-bootstrap/Button';

import "../../css/section.css";


function Section (props){
    const divStyle = {
        backgroundImage: `url(${props.url}`,
    };

    

    return <div className="car-section section" id={props.id} style={divStyle}>
        <h1>{props.heading}</h1>
        {(props.isLink )? <p style={{color:'grey'}}>{props.option}</p> :<a href='' style={{ color: 'black' , textDecorationSkipInk: 'none'}}>{props.option}</a>}
        
        {!(props.isEnabled)?<div className='button-container'><Button variant="dark" style={{ width: '250px' }} >Order Now</Button>
        <Button variant="secondary" style={{ width: '250px' }}>{props.btname}</Button></div>:
        <div className='button-container'><Button variant="dark" style={{ width: '250px' }} >{props.btname}</Button></div>
        }

        
    </div>
}

export default Section;




