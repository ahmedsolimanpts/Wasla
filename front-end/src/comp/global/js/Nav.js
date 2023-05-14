import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../imgs/logo2.png";

function Nav() {
  return (
    <div className="nav bg-main position-sticky top-0 start-0 z-3 ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 bg-main">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand p-0">
            <img src={logo} className="w-125 pb-1" alt="logo" />
          </Link>
          <button
            className="navbar-toggler color-main border border-1 border-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa-solid fa-bars text-light "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-1">
                <NavLink
                  className="nav-link text-white hover-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item px-1">
                <a className="nav-link text-white hover-link" href="/#services">
                  Services
                </a>
              </li>

              <li className="nav-item px-1">
                <a className="nav-link text-white hover-link" href="/#features">
                  Features
                </a>
              </li>

              <li className="nav-item px-1">
                <a className="nav-link text-white hover-link" href="/#pricing">
                  Pricing
                </a>
              </li>

              <li className="nav-item px-2 border border-1 rounded-pill bo-vs-lg ">
                <NavLink className="nav-link text-white hover-link" to="/login">
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
