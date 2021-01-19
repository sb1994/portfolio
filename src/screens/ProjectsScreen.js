import { motion } from "framer-motion";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import data_projects from "../data/projects_data";
const ProjectsScreen = () => {
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
      className="projectContainer col-12"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="projects__navbar">
        <div
          className={active === "All" && "projects__navbar-active"}
          onClick={() => {
            setProjects(data_projects);
            setActive("All");
          }}
        >
          All
        </div>
        <div
          className={active === "react.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("react.js")}
        >
          React
        </div>
        <div
          className={active === "mongoDB" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("mongoDB")}
        >
          MongoDB
        </div>
        <div
          className={active === "node.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("node.js")}
        >
          Node
        </div>
        <div
          className={active === "vanilla" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("vanilla")}
        >
          Vanilla
        </div>
      </div>

      {/* <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div> */}
    </motion.div>
  );
};

export default ProjectsScreen;
