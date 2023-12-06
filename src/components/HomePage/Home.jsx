import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from './Video';
import Section from './Section';


function Home() {

        
  return (
    <div className="home">
      <Video/>
        
      <Section
        id="section1"
        url="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD"
        heading="Model 3"
        option="Lease from $399/mo"
        btname="Demo Drive"
      />
      
      <Section
        id="section2"
        url="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop"
        heading="Model Y"
        option="View Inventory"
        btname="Demo Drive"
      />
     
      <Section
        id="section3"
        url="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Model-S-homepage-desktop"
        heading="Model S"
        option="View Inventory"
        btname="Demo Drive"
      />

   
      <Section
        id="section4"
        url="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD"
        heading="Model X"
        option="View Inventory"
        btname="Demo Drive"
      />

     
      <Section
        id="section5"
        url="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D"
        heading="Solar Panels"
        isLink="false"
        option="Low Cost Solar Panels in America"
        btname="Learn More"
      />
      
  
      <Section
        id="section6"
        url="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global"
        heading="Solar Roof"
        isLink="false"
        option="Produce Clean Energy From Your Roof"
        btname="Learn More"
      />
      

      <Section
        id="section7"
        url="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Desktop_Accessories"
        heading="Accessories"
        isEnabled="true"
        btname="Shop Now"
      />
  
    </div>
  );
}

export default Home;