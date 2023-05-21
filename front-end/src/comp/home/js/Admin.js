import React from "react";
import "../css/Admin.css";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Contact from "../../global/js/Contact";
import Footer from "../../global/js/Footer";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <NavLog />
      <Sidebar />
      <Contact />
      <div className="admin img-main min-vh-100 py-5 position-relative">
        <div className="overAdmin w-100 h-100 position-absolute top-0 start-0 z-0  "></div>
        <div className="container position-relative z-1">
          <h2 className="main-title">Admin Page</h2>
          <div className="row gap-4 justify-content-center">
            <Link
              to="/company"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-regular fa-building fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Company </span>
            </Link>

            <Link
              to="/auth"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-user-lock fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Auth </span>
            </Link>

            <Link
              to="/branch"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-code-branch fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Branch </span>
            </Link>

            <Link
              to="/info"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-circle-info fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Info </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
