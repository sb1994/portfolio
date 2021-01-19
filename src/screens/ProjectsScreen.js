import { motion } from "framer-motion";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import data_projects from "../data/projects_data";
const ProjectsScreen = () => {
  console.log(process.env.PUBLIC_URL);
  const [projects, setProjects] = useState(data_projects);
  const [active, setActive] = useState("All");

  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
    setActive(name);
  };
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
        <Col
          lg={11}
          sm={12}
          md={10}
          xs={11}
          className="projects-section mt-5 text-center"
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
