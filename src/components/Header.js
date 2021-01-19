import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
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
      className={activeNavbar ? "active-navbar" : "navbar"}
      sticky="top"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="/">Sean Boyle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="responsive-navbar-nav"
        >
          <Nav className="">
            <Nav.Item className={activeLink === "Home" ? "active-link" : null}>
              <Nav.Link href="/">
                <i
                  className="fa fa-home mr-1"
                  onClick={() => setActiveLink("Home")}
                ></i>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className={activeLink === "Projects" ? "active-link" : null}
            >
              <Nav.Link href="/projects">
                <i
                  className="fab fa-codepen mr-1"
                  onClick={() => setActiveLink("Projects")}
                ></i>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={activeLink === "About" ? "active-link" : null}>
              <Nav.Link href="/about">
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
