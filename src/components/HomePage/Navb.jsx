import React from 'react';
import {
	Link
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navb() {
  return (
    <Navbar bg="transparent" expand="lg" sticky='top' style={{ backgroundColor: 'transparent' }}>
      <Container>
        <Navbar.Brand ><Link to="/home">Tesla</Link></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link > <Link to="/modelS">Model S</Link> </Nav.Link>
            <Nav.Link >Model 3</Nav.Link>
            <Nav.Link >Model X</Nav.Link>
            <Nav.Link >Model Y</Nav.Link>
            <Nav.Link >Solar Roof</Nav.Link>
            <Nav.Link >Solar Panel</Nav.Link>
            <Nav.Link >Powerwall</Nav.Link> 
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link >Shop</Nav.Link>
            <Nav.Link >Account</Nav.Link>
            <Nav.Link >Menu</Nav.Link>
          </Nav>
        

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Navb;

