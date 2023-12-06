import React,{useState} from 'react';
import '../../css/fourth-section.css';

function FourthSection(){

    const [activeDiv, setActiveDiv] = useState(null);

    const handleClick = (divNumber) => {
        setActiveDiv(divNumber);
    };

    const getDivStyle = (divNumber) => {
        
        if (activeDiv === divNumber) {
          return {
            width: '200px',
            height: '200px',
            borderTop : '5px solid black',
            opacity: 1,
            width: '48%',
            paddingTop: '1.5%'
          };
        } else {
          return {
            width: '200px',
            height: '200px',
            borderTop: '3px solid black',
            opacity: 0.5,
            width:'48%',
            paddingTop: '1.5%'
          };
        }
    };

    return <div className='fourth-section'>
        <div className='power-train'>
            <h2 className='heading'>Electric Powertrain</h2>
            <p className='thin'>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>
        </div>

        <div className='train-img'></div>

        <div className='variant'>
            <div className='var1 box' style={getDivStyle(1)} onClick={() => handleClick(1)}>
                <h5 className='heading'>Model S</h5><br/>
                <p>
            Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.</p>

            <div className='highlight'>
                <div className='feat'>
                    <h4>3.1 s</h4>
                    <p>0-60 mph*</p>
                </div>
                <div className='feat'>
                    <h4>405 mi </h4>
                    <p>Range (EPA est.)</p>
                </div>
                <div className='feat'>
                    <h4>670 hp</h4>
                    <p>Peak Power</p>
                </div>  
            </div>
            </div>


            <div className='var2 box' style={getDivStyle(2)} onClick={() => handleClick(2)}>
                <h5 className='heading'>Model S Plaid</h5> <br/>
                <p>
                Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors. </p>
            </div>
        </div>

    </div>
}

export default FourthSection;