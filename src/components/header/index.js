import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { Nav } from "react-bootstrap";

const location = useLocation();


function Header() {
  return (
   <>
        <Navbar bg="light" expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/about">About Me</Link></Nav.Link>
          <Nav.Link><Link to="/portfolio">My Work</Link></Nav.Link>
          <Nav.Link href="../../images/SteereResume.pdf">My Resume</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/vladislavsteere/">My LinkedIn</Nav.Link> 
          <Nav.Link href="https://github.com/vsteere">My Github</Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>

    </>
      );
    }
 


export default Header;
