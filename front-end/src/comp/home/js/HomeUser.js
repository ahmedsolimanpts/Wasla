import React, { useEffect, useState } from "react";
import "../css/Admin.css";
import NavLog from "../../global/js/NavLog";
import Contact from "../../global/js/Contact";
import { Link } from "react-router-dom";
import Footer from "../../global/js/Footer";
import axios from "axios";
import Loading from "../../global/js/Loading";

function HomeUser() {
  const token = window.localStorage.getItem("access");
  const [data, setData] = useState();

  const handleGetData = () => {
    const id = window.localStorage.getItem("user_id");
    axios
      .get(`${process.env.REACT_APP_HOSTNAME}/api/user-company-member/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data) {
    return (
      <>
        <NavLog />
        <Contact />
        <div className="admin bg-sec min-vh-100 py-5 position-relative">
          <div className="container position-relative z-1">
            <h2 className="main-title">User Page</h2>
            <div className="row gap-4 justify-content-center">
              {data.length === 0 ? (
                <h4 className="bg-white text-center p-4 rounded">
                  No Company To Show
                </h4>
              ) : (
                data.map((res) => (
                  <Link
                    key={res.id}
                    to={"/home/" + res.company.id}
                    className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
                  >
                    <i className="fa-regular fa-building fa-fw fa-3x"></i>
                    <span className="d-block mt-3 fw-bold">
                      {res.company.name}
                    </span>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return <Loading />;
  }
}
export default HomeUser;
