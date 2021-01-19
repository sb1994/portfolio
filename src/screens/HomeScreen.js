import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const HomeScreen = () => {
  const history = useHistory();
  const homeVariants = {
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
        delayChildren: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const introVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.6,
      },
    },
  };
  const headerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 0.7,
      },
    },
  };
  const descriptionVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.8,
      },
    },
  };
  const subDescriptionVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.9,
      },
    },
  };
  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container-fluid"
    >
      <Row>
        <Col lg={1} sm={2} md={2} xs={1} className="social-links mt-4">
          <ul>
            <li>
              <a
                href="mailto:sean94@gmail.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                <i class="far fa-paper-plane"></i>
              </a>
            </li>
            <li>
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
        <Col lg={11} sm={10} md={10} xs={12} className="animation-section">
          <motion.p
            variants={introVariants}
            className="animation-section__intro"
          >
            Hello there, I'm
          </motion.p>
          <motion.h1
            variants={headerVariants}
            className="animation-section__name"
          >
            Seán Boyle
          </motion.h1>
          <motion.h2
            variants={headerVariants}
            className="animation-section__job"
          >
            I'm a Software Engineer
          </motion.h2>
          <motion.p
            variants={descriptionVariants}
            className="animation-section__description"
          >
            I have experience in Node.js, Javascript, React, Redux and more
          </motion.p>
          <motion.p
            variants={subDescriptionVariants}
            className="animation-section__sub-description"
          >
            This website was created using React.js and custom CSS.
          </motion.p>
          <motion.div className="button-group">
            <motion.button
              id="btn-work"
              className="btn  mr-1"
              style={{
                backgroundColor: "black",
                borderColor: "black",
                fontSize: 20,
                color: "#ffde59",
              }}
              onClick={() => history.push("/projects")}
            >
              My Work
            </motion.button>
            <motion.a
              href="mailto:sean94@gmail.com"
              className="btn btn-primary"
              style={{
                backgroundColor: "black",
                borderColor: "black",
                fontSize: 20,
                color: "#ffde59",
              }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default HomeScreen;
