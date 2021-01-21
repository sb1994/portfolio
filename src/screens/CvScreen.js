import React from "react";
import { motion } from "framer-motion";

import { Card, Col, Row } from "react-bootstrap";
const CvScreen = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.3,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      variants={projectVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="cvContainer container-fluid"
    >
      <Row>
        <Col lg={12} className="text-center">
          <h1>Skills</h1>
          <h3>
            Click{" "}
            <a
              target="_black"
              href={`${process.env.PUBLIC_URL}/assets/Sean_Boyle_CV.PDF`}
            >
              here
            </a>{" "}
            to download pdf Resume
          </h3>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={1} sm={1} md={2} xs={1} className="social-links mt-5">
          <ul>
            <li>
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

        <Col lg={11} sm={11} md={10} xs={12} className="projects-section ">
          <Row>
            <div
              variants={projectVariants}
              initial="hidden"
              animate
              className=" mb-3 col-sm-6  col-lg-6 col-xs-12 project-card"
              style={{ backgroundColor: "#ffde59" }}
            >
              <Col
                lg={12}
                style={{ border: "2px solid black", borderRadius: "1rem" }}
              >
                <Col className="text-center">
                  <h2>Technical</h2>
                </Col>
                <Card.Body>
                  <Row>
                    <Col lg={6}>
                      <ul style={{ fontSize: "20px" }}>
                        <li className="mr-2">
                          <span class="fab fa-html5"></span> HTML
                        </li>
                        <li className="mr-2">
                          <span class="fab fa-css3-alt"></span> CSS
                        </li>
                        <li className="mr-2">
                          <span class="fab fa-node"></span> Node.JS / Express
                        </li>
                        <li>
                          <span class="fab fa-react"></span> React.JS / Redux
                        </li>
                        <li>
                          <span class="fab fa-python"></span> Python
                        </li>
                      </ul>
                    </Col>
                    <Col lg={6} style={{ height: "100%" }}>
                      <ul style={{ fontSize: "20px" }}>
                        <li>
                          <span class="fab fa-js-square"></span> JavaScript
                        </li>
                        <li>
                          <span class="fas fa-database"></span> Databases:
                          MySQL, Postgres, MongoDb
                        </li>
                        <li className="mr-2">
                          <span class="fas fa-tasks"></span> Testing: Mocha /
                          Jest
                        </li>
                        <li>
                          <span className="fab fa-github"></span> Code
                          managment: Git
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </div>
            <div
              variants={projectVariants}
              initial="hidden"
              animate
              className=" mb-3 col-sm-6  col-lg-6 col-xs-12 project-card"
              style={{ backgroundColor: "#ffde59", height: "100%" }}
            >
              <Col
                lg={12}
                style={{ border: "2px solid black", borderRadius: "1rem" }}
              >
                <Col className="text-center">
                  <h2>Interpersonal</h2>
                </Col>
                <Card.Body>
                  <Row>
                    <Col lg={12}>
                      <ul style={{ fontSize: "20px" }}>
                        <li className="mr-1">Teamwork</li>
                        <li className="mr-1">Communication</li>
                        <li className="mr-1">
                          <span class="fab fa-node"></span> Customer Service
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </div>
            <div
              variants={projectVariants}
              initial="hidden"
              animate
              className=" mb-3 col-sm-12  col-lg-6 col-xs-12 project-card"
              style={{ backgroundColor: "#ffde59" }}
            >
              <Col
                lg={12}
                style={{ border: "2px solid black", borderRadius: "1rem" }}
              >
                <Col className="text-center">
                  <h2>Other</h2>
                </Col>
                <Card.Body>
                  <Row>
                    <Col lg={12}>
                      <ul style={{ fontSize: "20px" }}>
                        <li className="mr-2">Research</li>
                        <li className="mr-2">
                          Project Managment: Kanban, Scrum, Agile{" "}
                        </li>
                        <li className="mr-2">
                          Software and Database Architecture
                        </li>
                        <li className="mr-2">UI/UX Design</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </div>
            <div
              variants={projectVariants}
              initial="hidden"
              animate
              className=" mb-3 col-sm-12  col-lg-6 col-xs-12 project-card"
              style={{ backgroundColor: "#ffde59" }}
            >
              <Col
                lg={12}
                style={{ border: "2px solid black", borderRadius: "1rem" }}
              >
                <Col className="text-center">
                  <h2>Languages</h2>
                </Col>
                <Card.Body>
                  <Row>
                    <Col lg={12}>
                      <ul style={{ fontSize: "20px" }}>
                        <li className="mr-2">English: Native Speaker</li>
                        <li className="mr-2">French: Fluent</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </div>
          </Row>
        </Col>
        {/* <Col
          lg={10}
          sm={12}
          md={10}
          xs={12}
          className="projects-section text-center"
        >
          <h1>Projects</h1>
          <Row>
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </Row>
        </Col> */}
      </Row>
    </motion.div>
  );
};

export default CvScreen;
