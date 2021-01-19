import React from "react";
import { motion } from "framer-motion";

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
      className="aboutContainer container"
    >
      <h1>About</h1>
    </motion.div>
  );
};

export default AboutScreen;
