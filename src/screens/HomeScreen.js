import { motion } from "framer-motion";
import React from "react";

const HomeScreen = () => {
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
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ backgroundColor: "#fff" }}
    >
      <h1>HomeScreen</h1>
    </motion.div>
  );
};

export default HomeScreen;
