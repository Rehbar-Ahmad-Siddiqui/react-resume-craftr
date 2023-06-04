import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/resume"
              // activeClassName="is-active" , when using NAVLINK !!
              // exact={true} ,  when using NAVLINK !!
              className="nav-links"
            >
              Create & Downlaod Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/aboutDeveloper"
              // activeClassName="is-active"
              className="nav-links"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
