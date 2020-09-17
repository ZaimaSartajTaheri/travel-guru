import React, { useContext, useState } from 'react';
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
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  
  
    return (
        <Container className="navContainer">
          <Navbar  collapseOnSelect expand="lg">
  <Link to="/home"><Navbar.Brand><img className="logo" src={logo} alt="logo"/></Navbar.Brand></Link>
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
      <Link to="/login"><button className="btn btn-warning mr-2">LogIn</button></Link>
      <Link to="/login"><button className="btn btn-warning" onClick={()=>{setLoggedInUser({})}}>Sign Out</button></Link>
      
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </Container>
    );
};

export default Header;