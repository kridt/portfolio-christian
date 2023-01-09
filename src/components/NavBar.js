import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default function NavBar() {
  let activeStyle = {
    color: "#1cddbc",
    textDecoration: "underline",
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            StartSide
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Om mig
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
