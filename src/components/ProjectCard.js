import { motion } from "framer-motion";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
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
        <Card.Body className="text-center">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="top"
          className="pb-3"
          style={{ width: "100%" }}
          src={`${process.env.PUBLIC_URL}/assets/projects_images/${project.image}`}
        />
      </Col>
    </motion.div>
  );
};

export default ProjectCard;
