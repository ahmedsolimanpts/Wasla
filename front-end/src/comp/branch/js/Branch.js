import React from "react";
import { Link } from "react-router-dom";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";
import "../css/Branch.css";

function Branch() {
  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="branch">
        <h2 className="main-title">Branch</h2>
        <div className="branch-box">
          <Link to="/branch/create-branch">
            <i className="fa-solid fa-circle-plus"></i>
            <span>Create New Branch</span>
          </Link>

          <Link to="/branch/all-branches">
            <i className="fa-solid fa-globe"></i>
            <span>All Branches</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Branch;
