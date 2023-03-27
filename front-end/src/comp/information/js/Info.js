import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../global/js/Footer";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import "../css/Info.css";

function Info() {
  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="info">
        <h2 className="main-title">Information</h2>
        <div className="info-box">
          <Link to="/info/create-item">
            <i className="fa-solid fa-circle-plus"></i>
            <span>Create New Item</span>
          </Link>
          <Link to="/info/items">
            <i className="fa-solid fa-globe"></i>
            <span>All Items</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Info;
