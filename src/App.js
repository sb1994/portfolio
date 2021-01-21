import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProjectsScreen from "./screens/ProjectsScreen";

import { Switch, useLocation, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CvScreen from "./screens/CvScreen";

const App = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/about">
            <AboutScreen />
          </Route>
          <Route path="/projects">
            <ProjectsScreen />
          </Route>
          <Route path="/resume">
            <CvScreen />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
