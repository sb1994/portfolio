import { motion } from "framer-motion";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import data_projects from "../data/projects_data";
const ProjectsScreen = () => {
  const [projects, setProjects] = useState(data_projects);

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
      className="projectContainer container-fluid"
    >
      <Row className="mt-5">
        <Col lg={2} sm={2} md={2} xs={1} className="social-links mt-5">
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
        <Col
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
        </Col>
      </Row>
    </motion.div>
  );
};

export default ProjectsScreen;
