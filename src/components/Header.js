import React from "react";
import { useHistory, Link } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  return (
    <div>
      <h1>header</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
};

export default Header;
