import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../global/js/Footer";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import "../../home/css/Admin.css";
import Contact from "../../global/js/Contact";

function Company() {
  return (
    <>
      <NavLog />
      <Sidebar />
      <Contact />
      <div className="admin img-main min-vh-100 py-5 position-relative">
        <div className="overAdmin w-100 h-100 position-absolute top-0 start-0 z-0"></div>
        <div className="container position-relative z-1">
          <h2 className="main-title">Company Page</h2>
          <div className="row gap-4 justify-content-center">
            <Link
              to="/company/all-company"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-circle-plus fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> All Company </span>
            </Link>

            <Link
              to="/company/company-managers"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-user-tie fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Company Managers </span>
            </Link>

            <Link
              to="/company/company-phone/"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-phone fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Company Phone </span>
            </Link>

            <Link
              to="/company/company-location"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-map-location-dot fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Company Location </span>
            </Link>

            <Link
              to="/company/company-address"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-location-dot fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Company Address </span>
            </Link>

            <Link
              to="/company/company-members"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-users fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Company Members </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Company;
