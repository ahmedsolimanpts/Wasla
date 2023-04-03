import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Nav.css";
import logo from "../../../imgs/logo2.png";

function Nav() {
  useEffect(() => {}, []);

  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="container-link">
        <div
          onClick={() => {
            document.querySelector(".nav .linksCat").classList.toggle("open");
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        <Link to="/login" className="loginmd">
          Sign In
        </Link>
        <div className="linksCat">
          <NavLink to="/">Home</NavLink>
          <a href="/#services">Services</a>
          <a href="/#features">features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#contact">Contact</a>
          <Link to="/login" className="loginNav">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
