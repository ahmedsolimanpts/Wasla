import React from "react";
import "../css/Admin.css";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";

function Admin() {
  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="admin">
        <h1>This Admin Page Open If User Login</h1>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
