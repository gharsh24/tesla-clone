import React from 'react';
import carVideo from '../../assets/carVideo.mp4';
import Button from 'react-bootstrap/Button';
import "../../css/video.css";


function Video(){
    
    return <div>
        <div className='video-div'>
        <video src={carVideo} autoPlay loop muted/>
        </div>
        <div className='content'>
            <h1>Experience Tesla</h1>
            <p>Schedule a Demo Drive Today</p>
        </div>
        <div className='button-container'><Button variant="outline-light">Demo Drive</Button></div>
        </div>
}

export default Video;