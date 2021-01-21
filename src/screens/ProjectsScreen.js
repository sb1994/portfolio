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
      className="projectContainer container"
    >
      <Row>
        <Col
          lg={12}
          sm={12}
          md={10}
          xs={12}
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
