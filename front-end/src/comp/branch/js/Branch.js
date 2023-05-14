import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../global/js/Footer";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import "../../home/css/Admin.css";
import Contact from "../../global/js/Contact";

function Branch() {
  return (
    <>
      <NavLog />
      <Sidebar />
      <Contact />
      <div className="admin img-main min-vh-100 py-5 position-relative">
        <div className="overAdmin w-100 h-100 position-absolute top-0 start-0 z-0"></div>
        <div className="container position-relative z-1">
          <h2 className="main-title">Branch Page</h2>
          <div className="row gap-4 justify-content-center">
            <Link
              to="/branch/all-branch"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-code-branch fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> All Branch </span>
            </Link>

            <Link
              to="/branch/branch-managers"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-user-tie fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Branch Managers </span>
            </Link>

            <Link
              to="/branch/branch-phone/"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-phone fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Branch Phone </span>
            </Link>

            <Link
              to="/branch/branch-location"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-map-location-dot fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Branch Location </span>
            </Link>

            <Link
              to="/branch/branch-address"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-location-dot fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Branch Address </span>
            </Link>

            <Link
              to="/branch/branch-status"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-stairs fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Branch Status </span>
            </Link>

            <Link
              to="/branch/branch-current-status"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-bars-progress fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold">
                {" "}
                Branch Current Status{" "}
              </span>
            </Link>

            <Link
              to="/branch/branch-service-price"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-hand-holding-dollar fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold">
                {" "}
                Branch Service Price{" "}
              </span>
            </Link>

            <Link
              to="/branch/branch-work-time"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-business-time fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Branch Work Time </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Branch;
