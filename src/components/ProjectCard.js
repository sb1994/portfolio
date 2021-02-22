import { motion } from "framer-motion";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./ProjectCard.css";
import "../index.css";
const ProjectCard = ({ project }) => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      variants={projectVariants}
      initial="hidden"
      animate
      className=" mb-3 col-sm-12  col-lg-6 col-xs-12 project-card"
      style={{ backgroundColor: "#ffde59" }}
    >
      <Col lg={12} style={{ border: "2px solid black", borderRadius: "1rem" }}>
        <Card.Body>
          <h2>{project.name}</h2>
          <Card.Img
            variant="top"
            className="pb-3"
            style={{ width: "100%" }}
            src={`${process.env.PUBLIC_URL}/assets/projects_images/${project.image}`}
          />
          <p>{project.description}</p>

          {project.category.map((cat, index) => (
            <span
              className="badge badge-dark mr-2  mb-1"
              style={{ fontSize: "1.05rem" }}
              key={index}
            >
              {cat}
            </span>
          ))}
          <Row className="mt-2">
            <Col md={12}>
              <a
                href={project.deployed_url}
                target="_blank"
                className="btn project__btn-live mr-3"
                style={{ textDecoration: "none" }}
              >
                <i class="fas fa-globe"></i> Live
              </a>
              <a
                href={project.github_url}
                target="_blank"
                className="btn project__btn-github"
                style={{ textDecoration: "none" }}
              >
                <i className="fab fa-github"></i> Github
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    </motion.div>
  );
};

export default ProjectCard;
