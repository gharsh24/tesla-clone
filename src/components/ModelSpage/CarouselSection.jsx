import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../../css/carousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


function CarouselSection(){
    
  return <div className='c-section'>
    <div className='carousel-part'>
    <Carousel>
      <Carousel.Item interval={2000}>
        <video autoPlay loop muted src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-1-Cinematic-Display-Desktop-Global.mp4">
         </video>

        <Carousel.Caption>
          <h3>Cinematic Experience</h3>
          <p>A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
  
        <video autoPlay loop muted src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Carousel-2-Yoke-Desktop.mp4" />
        <Carousel.Caption>
          <h3>Yoke Steering</h3>
          <p>A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <video autoPlay loop muted src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-3-Perfect-Environment-Desktop.mp4" />
        <Carousel.Caption>
          <h3>Perfect Environment</h3>
          <p>
          Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <video autoPlay loop muted src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-4-Second-Row-Desktop.mp4" />
        <Carousel.Caption>
          <h3>Redesigned Second Row</h3>
          <p>Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <video className='cons-vid' autoPlay loop muted src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Carousel-5-Gaming-Mobile.mp4" />
        <Carousel.Caption>
          <h3>Console-Grade Gaming</h3>
          <p>Up to 10 teraflops of processing power unlock in-car gaming on-par with today's newest consoles. Play from any seat with wireless controller and headset compatibility.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </div>

      <div class="container">
        <div class="right-text-container text-container">
          <h4>Stay Connected</h4>
          <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
        </div>
        <div class="left-image-container image-container">
          <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-A-Desktop" />
          </div>
      </div>

      <div class="container">
        <div class="left-text-container text-container">
          <h4>Immersive Sound</h4>
          <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
        </div>
        <div class="right-image-container image-container">
          <video src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Grid-2-Audio-Desktop.mp4" autoplay loop muted/>
          </div>
      </div>

      <div class="container">
        <div class="right-text-container text-container">
          <h4>Room for Everything</h4>
          <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too. Compare Models</p>
        </div>
        <div class="left-image-container image-container">
          <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop" />
          </div>
      </div>
    </div>
  
}

export default CarouselSection;