import React from "react";
import { HashRouter as Router, NavLink } from "react-router-dom";

import Routes from "./Routes";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <ul className="links">
          <li>
            <NavLink to="/list">User List</NavLink>
          </li>
          <li>
            <NavLink to="/ajax-list">Ajax List</NavLink>
          </li>
          <li>
            <NavLink to="/countdown">Countdown</NavLink>
          </li>
          <li>
            <NavLink to="/scan-reduce">Scan vs Reduce</NavLink>
          </li>
        </ul>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
