import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../global/js/Footer";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import "../../home/css/Admin.css";
import Contact from "../../global/js/Contact";

function Auth() {
  return (
    <>
      <NavLog />
      <Sidebar />
      <Contact />
      <div className="admin img-main min-vh-100 py-5 position-relative">
        <div className="overAdmin w-100 h-100 position-absolute top-0 start-0 z-0"></div>
        <div className="container position-relative z-1">
          <h2 className="main-title">Authorizations</h2>
          <div className="row gap-4 justify-content-center">
            <Link
              to="/auth/features"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-star fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Features </span>
            </Link>

            <Link
              to="/auth/permission"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-award fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Permission </span>
            </Link>

            <Link
              to="/auth/user-permissions"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-user-gear fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> User Permissions </span>
            </Link>

            <Link
              to="/auth/license"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-id-badge fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> License </span>
            </Link>

            <Link
              to="/auth/create-users"
              className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
            >
              <i className="fa-solid fa-user fa-fw fa-3x"></i>
              <span className="d-block mt-3 fw-bold"> Create User </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Auth;
