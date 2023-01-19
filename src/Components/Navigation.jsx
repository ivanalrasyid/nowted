import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/ButtonGroup";

import "../assets/styles/Navigation.css";

import Logo from "../assets/images/Logo.png";

const Navigation = () => {
  return (
    <>
      <div className="ellipse">
        <Navbar collapseOnSelect expand="lg" className="background-nav">
          <Container className="wrapper">
            <Navbar.Brand href="#home">
              <img src={Logo} alt="Logo" width="100" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto NavList">
                <Nav.Link href="#features" className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-white">
                  Product
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-white">
                  Support
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-white">
                  Contact Us
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  <Button className="btnLogin">Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
