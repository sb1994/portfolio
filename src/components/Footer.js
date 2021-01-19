import { Button } from "bootstrap";
import React from "react";
import { Col, Container, FormControl, Nav, Navbar, Row } from "react-bootstrap";
const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Navbar fixed="bottom" className="footer" variant="dark" bg="dark">
      <Container>
        <Col lg={4} sm={4} className="text-center">
          <Navbar.Text>Designed and developed by Seán Boyle </Navbar.Text>
        </Col>
        <Col lg={4} sm={4} className="text-center">
          <Navbar.Text> Copyright &copy; {year} Sb</Navbar.Text>
        </Col>
        <Col lg={4} sm={4}>
          <ul id="footer__social-list">
            <li className="footer__social-icon mr-2">
              <a
                href="https://github.com/sb1994"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li className="footer__social-icon mr-2">
              <a
                href="https://www.linkedin.com/in/se%C3%A1n-boyle-8b2bb5203/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;
