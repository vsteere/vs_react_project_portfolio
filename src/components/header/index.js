import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
  return (
   
        <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="../public/resume.pdf">My Resume</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/vladislavsteere/">My LinkedIn</Nav.Link> 
          <Nav.Link href="https://github.com/vsteere">My Github</Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
      );
    }
 


export default Header;
