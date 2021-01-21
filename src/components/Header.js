import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const changeNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY > 20) {
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  };

  useEffect(() => {
    let currentURL = window.location.href;
    console.log(currentURL);
    if (currentURL.endsWith("/")) setActiveLink("Home");
    else if (currentURL.endsWith("/projects")) setActiveLink("Projects");
    else if (currentURL.endsWith("/about")) setActiveLink("About");
    else if (currentURL.endsWith("/resume")) setActiveLink("Resume");
  }, [activeLink]);
  const changeLinkState = () => {};

  window.addEventListener("scroll", changeNavbar);

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      className={`${activeNavbar ? "active-navbar" : "navbar"}`}
      sticky="top"
      variant="light"
    >
      <Container fluid>
        <Navbar.Brand href="/">SB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="ml-auto" id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item
              className={` mr-5 ${
                activeLink === "Home" ? "active-link" : null
              }`}
            >
              <Nav.Link href="/" style={{ color: "black" }}>
                <i
                  className="fa fa-home mr-1"
                  onClick={() => setActiveLink("Home")}
                ></i>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className={` mr-5 ${
                activeLink === "Projects" ? "active-link" : null
              }`}
            >
              <Nav.Link href="/projects" style={{ color: "black" }}>
                <i
                  className="fab fa-codepen mr-1"
                  onClick={() => setActiveLink("Projects")}
                ></i>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className={`mr-5 ${
                activeLink === "Resume" ? "active-link" : null
              }`}
            >
              <Nav.Link href="/resume" style={{ color: "black" }}>
                <i
                  className="far fa-file mr-1"
                  onClick={() => setActiveLink("Resume")}
                ></i>
                Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={activeLink === "About" ? "active-link" : null}>
              <Nav.Link href="/about" style={{ color: "black" }}>
                <i
                  className="far fa-user mr-1"
                  onClick={() => setActiveLink("About")}
                ></i>
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
