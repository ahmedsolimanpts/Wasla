import React from "react";
import "../css/Sidebar.css";
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
        <NavLink to="/company">
          <i className="fa-regular fa-building fa-fw"></i>
          <span>Company</span>
        </NavLink>
        <NavLink to="/auth">
          <i className="fa-solid fa-user-lock fa-fw"></i>
          <span>Auth</span>
        </NavLink>
        <NavLink to="/branch">
          <i className="fa-solid fa-code-branch"></i>
          <span>Branch</span>
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
        <NavLink to="/info">
          <i className="fa-solid fa-circle-info fa-fw"></i>
          <span>Information</span>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
