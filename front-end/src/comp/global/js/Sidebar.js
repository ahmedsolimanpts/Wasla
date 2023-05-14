import React from "react";
import "../css/Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar bg-white position-fixed bottom-0 py-4 z-2">
      <div
        className="gear position-absolute p-2 text-white cr-pointer tr-main rounded-end"
        onClick={() => {
          document.querySelector(".sidebar").classList.toggle("open");
        }}
      >
        <i className="fa-solid fa-gear fa-spin"></i>
      </div>
      <ul className="p-0 m-0">
        <NavLink
          to="/company"
          className="d-block p-3 rounded-3 text-black cr-pointer mx-3 mb-1"
        >
          <i className="fa-regular fa-building fa-fw me-2"></i>
          <span>Company</span>
        </NavLink>
        <NavLink
          to="/auth"
          className="d-block p-3 rounded-3 text-black cr-pointer mx-3 mb-1"
        >
          <i className="fa-solid fa-user-lock fa-fw me-2"></i>
          <span>Auth</span>
        </NavLink>
        <NavLink
          to="/branch"
          className="d-block p-3 rounded-3 text-black cr-pointer mx-3 mb-1"
        >
          <i className="fa-solid fa-code-branch me-2"></i>
          <span>Branch</span>
        </NavLink>
        <NavLink
          to="/info"
          className="d-block p-3 rounded-3 text-black cr-pointer mx-3 mb-1"
        >
          <i className="fa-solid fa-circle-info fa-fw me-2"></i>
          <span>Information</span>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
