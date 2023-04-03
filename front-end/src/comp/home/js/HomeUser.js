import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLog from "../../global/js/NavLog";
import Footer from "../../global/js/Footer";
import "../css/HomeUser.css";

function HomeUser() {
  const [company, setCompany] = useState();

  const getCompany = () => {
    fetch(process.env.REACT_APP_HOSTNAME + "/api/user-access-company/1/")
      .then((res) => res.json())
      .then((data) => {
        setCompany(data);
      });
  };

  useEffect(() => {
    getCompany();
  }, []);

  return (
    <>
      <NavLog />
      <div className="homeUser">
        <h2 className="main-title">Your Company</h2>

        <div className="access-box">
          {company &&
            company.map((company) => (
              <Link to="/home" key={company.id}>
                <i className="fa-solid fa-globe"></i>
                <span> {company.name} </span>
              </Link>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeUser;
