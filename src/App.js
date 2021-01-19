import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProjectsScreen from "./screens/ProjectsScreen";

import { Switch, useLocation, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

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
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
