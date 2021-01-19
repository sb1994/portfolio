import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  let imgUrl = process.env.PUBLIC_URL;
  console.log(imgUrl);
  return (
    <motion.div className="col-sm-6 col-xs-6 col-lg-3 mb-3">
      <Row>
        <Col lg={12}>
          <h3>{project.name}</h3>
          <img
            src={`${process.env.PUBLIC_URL}/assets/projects_images/${project.image}`}
            className="img-fluid"
            style={{ height: 200 }}
            alt=""
            srcset=""
          />
        </Col>
        <Col lg={12} className="mt-1">
          <Row className="">
            {project.category.map((tag) => (
              <div className="ml-1 tag mr-2 mb-1">{tag}</div>
            ))}
          </Row>
        </Col>
      </Row>
    </motion.div>
  );
};

export default ProjectCard;
