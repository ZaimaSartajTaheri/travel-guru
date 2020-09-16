import React from 'react';
import logo from '../../utilities/LogoWhite.png'
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Container,
    Button
  } from "react-bootstrap";
  import './Header.css';

const Header = () => {
    return (
        <Container className="navContainer">
          <Navbar  collapseOnSelect expand="lg">
  <Navbar.Brand href="/home"><img className="logo" src={logo} alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
  <Navbar.Collapse id="responsive-navbar-nav">
  <Form inline className="mr-auto">
       <FormControl type="text" variant='light' placeholder="Search your destination" className="search-bar" />
       <Button variant="outline-light">Search</Button>
      </Form>
    <Nav>
      
      <Nav.Link className="whiteText" href="#">News</Nav.Link>
      <Nav.Link className="whiteText" href="#">Destination</Nav.Link>
      <Nav.Link className="whiteText" href="#">Blog</Nav.Link>
      <Nav.Link className="whiteText" href="#">Contact</Nav.Link>
      <button className="btn btn-warning">Login</button>
      
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </Container>
    );
};

export default Header;