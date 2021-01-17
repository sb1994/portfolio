import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
const Header = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);

  const changeNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY > 20) {
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant="dark"
      className={activeNavbar ? "active-navbar" : "navbar"}
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">
              <i className="fa fa-home mr-1"></i>Home
            </Nav.Link>
            <Nav.Link href="/projects">
              <i className="fab fa-codepen mr-1"></i>Projects
            </Nav.Link>
            <Nav.Link href="/about">
              <i className="far fa-user mr-1"></i>About
            </Nav.Link>
            <Nav.Link href="/">
              <i className="far fa-file-alt mr-1"></i>Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
