import React from "react";
import { Link } from "react-router-dom";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";
import "../css/Auth.css";

function Auth() {
  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="auth">
        <h2 className="main-title">Authorizations</h2>
        <div className="auth-box">
          <Link to="/auth/create-auth">
            <i className="fa-solid fa-circle-plus"></i>
            <span>Create New Auth</span>
          </Link>
          <Link to="/auth/all-auth">
            <i className="fa-solid fa-globe"></i>
            <span>All Auth</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Auth;
