import React, { useContext} from 'react';
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
              <Nav.Link className="whiteText" href="#">Destination</Nav.Link>
              <Nav.Link className="whiteText" href="#">Contact</Nav.Link>
              {
                loggedInUser.isSignedIn?<p className="btn btn-warning mt-2 mr-2">{loggedInUser.name}</p>:<Link to="/login"><button className="btn btn-warning mt-2 mr-2">LogIn</button></Link>
              }
              {
                loggedInUser.isSignedIn && <Link to="/login"><button className="btn btn-warning mt-2" onClick={()=>{setLoggedInUser({})}}>Log Out</button></Link>
              }
              
              
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Container>
    );
};

export default Header;