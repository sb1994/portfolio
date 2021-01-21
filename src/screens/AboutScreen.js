import React from "react";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
const AboutScreen = () => {
  const aboutVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0.5,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={aboutVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="aboutContainer container-fluid"
    >
      <Row>
        <Col lg={2} sm={2} md={2} xs={12} className="social-links mt-4">
          <ul style={{ display: "inline-block" }}>
            <li className="social-link">
              <a
                href="mailto:sean94@gmail.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                <i className="far fa-paper-plane"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sb1994"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="footer__social-icon mr-2">
              <a
                href="https://www.linkedin.com/in/se%C3%A1n-boyle-8b2bb5203/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </Col>
        <Col lg={10} sm={10}>
          <Row>
            <Col lg={12} className="text-center">
              <h1>About</h1>
            </Col>
            <Col lg={12}>
              <Row>
                <Col lg={6} className="about-text">
                  <p>
                    Hi I'm Seán, a recent graduate from the Creative Computing
                    program at Dún Laoghaire Institute of Art, Design and
                    Technology (IADT){" "}
                  </p>
                  <p>
                    I've always been passionate about technology and programing
                    since the first time I could interact with a Pc
                  </p>
                  <p>
                    Having the chance to learn and develop myself is what
                    motivates me more than anything else, and I love being able
                    to combine my creative side with my problem solving skills.
                  </p>
                </Col>
                <Col lg={6}>
                  <img
                    className="img-fluid pt-1 profile_img"
                    src={`${process.env.PUBLIC_URL}/assets/profile_img.jpg`}
                    alt=""
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </motion.div>
  );
};

export default AboutScreen;
