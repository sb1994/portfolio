import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProjectsScreen from "./screens/ProjectsScreen";

import { Switch, useLocation, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
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
    </>
  );
};

export default App;
