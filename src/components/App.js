import React from 'react';
import {
	Routes,
	Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomePage/Home';
import Navb from './HomePage/Navb';
import ModelS from './ModelSpage/ModelS';


function App() {

        
  return (
    <div className="App">
    <Navb/>
    <Routes>

      <Route path="/home" element={<Home/>}/>
      <Route path="/modelS" element={<ModelS/>}/>

    </Routes>
    </div>
  );
}

export default App;
