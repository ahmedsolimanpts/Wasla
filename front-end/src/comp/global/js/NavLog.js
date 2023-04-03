import React from "react";
import "../css/NavLog.css";
import logo from "../../../imgs/logo2.png";
import { Link } from "react-router-dom";

function NavLog() {
  return (
    <div className="navLog">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <div className="box-logout">
        <button
          className="logout"
          onClick={() => {
            window.localStorage.clear();
            window.location.reload();
          }}
        >
          {" "}
          Logout{" "}
        </button>
      </div>
    </div>
  );
}

export default NavLog;
