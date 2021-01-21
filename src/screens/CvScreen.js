import React from "react";
import { motion } from "framer-motion";

import { Col, Row } from "react-bootstrap";
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
      className="projectContainer container"
    >
      <Row className="mt-5">
        <Col lg={12} className="text-center">
          <h1>Skills</h1>
          <Row>
            <Col lg={6}>Hello</Col>
            <Col lg={6}>Hello</Col>
          </Row>
          <Row>
            <Col lg={6}>Hello</Col>
            <Col lg={6}>Hello</Col>
          </Row>
        </Col>
      </Row>
    </motion.div>
  );
};

export default CvScreen;
