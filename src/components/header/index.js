import React from "react";
import "./style.css";
import {
      Link
  } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';




function Header() {
  return (
   <Container>
   
        <Navbar collapseOnSelect variant="light" bg="light" expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/about" >About Me</Link></Nav.Link>
          <Nav.Link><Link to="/portfolio" >My Work</Link></Nav.Link>
          <Nav.Link href="../../images/SteereResume.pdf" target="-blank">My Resume</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/vladislavsteere/" target="_blank">My LinkedIn</Nav.Link> 
          <Nav.Link href="https://github.com/vsteere" target="_blank">My Github</Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>

    </Container>
      );
    }
 


export default Header;
