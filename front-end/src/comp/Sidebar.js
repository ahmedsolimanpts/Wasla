import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div
        className="gear"
        onClick={() => {
          document.querySelector(".sidebar").classList.toggle("open");
        }}
      >
        <i className="fa-solid fa-gear fa-spin"></i>
      </div>
      <ul>
        <NavLink to="/">
          <i className="fa-regular fa-chart-bar fa-fw"></i>
          <span>Test one</span>
        </NavLink>
        <NavLink to="/login">
          <i className="fa-regular fa-chart-bar fa-fw"></i>
          <span>Test two</span>
        </NavLink>
        <NavLink to="/login">
          <i className="fa-regular fa-chart-bar fa-fw"></i>
          <span>Test three</span>
        </NavLink>
        <NavLink to="/login">
          <i className="fa-regular fa-chart-bar fa-fw"></i>
          <span>Test four</span>
        </NavLink>
        <NavLink to="/login">
          <i className="fa-regular fa-chart-bar fa-fw"></i>
          <span>Test five</span>
        </NavLink>
        <NavLink to="/login">
          <i className="fa-regular fa-chart-bar fa-fw"></i>
          <span>Test six</span>
        </NavLink>
        <NavLink to="/login">
          <i className="fa-regular fa-chart-bar fa-fw"></i>
          <span>Test seven</span>
        </NavLink>
        <NavLink to="/login">
          <i className="fa-regular fa-chart-bar fa-fw"></i>
          <span>Test eight</span>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
