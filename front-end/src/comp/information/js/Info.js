import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../global/js/Footer";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import "../../home/css/Admin.css";
import Contact from "../../global/js/Contact";

function Info() {
  return (
    <>
      <NavLog />
      <Sidebar />
      <Contact />
      <div className="admin img-main min-vh-100 py-5 position-relative">
        <div className="overAdmin w-100 h-100 position-absolute top-0 start-0 z-0"></div>
        <div className="container position-relative z-1">
          <h2 className="main-title">Information</h2>
          <div className="row gap-4 justify-content-center">
            <Link
              to="/info/language"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-language fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Language </span>
            </Link>

            <Link
              to="/info/company-type"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-building-circle-arrow-right fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Company Type </span>
            </Link>

            <Link
              to="/info/country"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-flag fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Country </span>
            </Link>

            <Link
              to="/info/city"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-city fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> City </span>
            </Link>

            <Link
              to="/info/city-district"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-tree-city fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> City District </span>
            </Link>

            <Link
              to="/info/currency"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-sack-dollar fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Currency </span>
            </Link>

            <Link
              to="/info/phone"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-phone fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Phone </span>
            </Link>

            <Link
              to="/info/location"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-map-location-dot fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Location </span>
            </Link>

            <Link
              to="/info/address"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-location-dot fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Address </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Info;
