import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../global/js/Footer";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import "../css/Company.css";

function Company() {
  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="company">
        <h2 className="main-title">Company</h2>
        <div className="company-box">
          <Link to="/company/create-company">
            <i className="fa-solid fa-circle-plus"></i>
            <span>Create New Company</span>
          </Link>
          <Link to="/company/companies">
            <i className="fa-solid fa-globe"></i>
            <span>All Companies</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Company;
