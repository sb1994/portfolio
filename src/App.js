import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProjectsScreen from "./screens/ProjectsScreen";

import { Switch, useLocation, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { Container } from "react-bootstrap";

const App = () => {
  const location = useLocation();
  return (
    <>
      {/* scrolls the application to the top when the application changes route */}
      <ScrollToTop />
      <Header />
      <Container className="app-container">
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/projects">
            <ProjectsScreen />
          </Route>
          <Route exact path="/about">
            <AboutScreen />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default App;
