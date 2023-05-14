import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavLog from "../../global/js/NavLog";
import Contact from "../../global/js/Contact";
import Footer from "../../global/js/Footer";
import Loading from "../../global/js/Loading";
import "../css/CompanyDetails.css";

function CompanyDetails() {
  const token = window.localStorage.getItem("access");
  const [data, setData] = useState();
  const [dataBranch, setDataBranch] = useState();
  const [branch, setBranch] = useState(false);
  const [allowedParams, setAllowedParams] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();
  const companyId = params.companyId;

  const getCompanyAvaData = () => {
    const id = window.localStorage.getItem("user_id");
    axios
      .get(`${process.env.REACT_APP_HOSTNAME}/api/user-company-member/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const allowedIds = res.data.map((item) => item.company.id);
        setAllowedParams(allowedIds);
        setLoading(false);
      });
  };

  const handleGetData = () => {
    axios
      .get(
        `${process.env.REACT_APP_HOSTNAME}/api/get-company-info/${companyId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setData(res.data));
  };

  const handleBranch = () => {
    setBranch(true);
    axios
      .get(
        `${process.env.REACT_APP_HOSTNAME}/api/get-company-branch/${companyId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setDataBranch(res.data));
  };

  const companyInfo = () => {
    return (
      <>
        <div className=" contentUser py-5 px-3 position-absolute top-0 end-0 z-1">
          <h2 className="text-center fw-bold color-main">
            Company Information
          </h2>

          {data &&
            data.map((res) => (
              <div
                key={1}
                className="box-company bg-white w-100 mt-4 p-4 pb-0 "
              >
                <h4 className="text-center fw-bold text-secondary">
                  {res.verbose_name}
                </h4>
                <div className="box-information p-3 pb-0 m-0 row">
                  <ul className="col-md-6">
                    <li className="fs-14 text-secondary mb-2">
                      Name: <span className="color-main">{res.name}</span>
                    </li>
                    <li className="fs-14 text-secondary mb-2">
                      Type:{" "}
                      <span className="color-main">
                        {res.companytype__type
                          ? res.companytype__type
                          : "Unavailable"}
                      </span>
                    </li>
                    <li className="fs-14 text-secondary mb-2">
                      Phone:{" "}
                      <span className="color-main">
                        {res.companyphone__phone__phone
                          ? res.companyphone__phone__phone
                          : "Unavailable"}
                      </span>
                    </li>
                  </ul>
                  <ul className="col-lg-6">
                    <li className="fs-14 text-secondary mb-2">
                      Street:{" "}
                      <span className="color-main">
                        {res.companyaddress__address__street
                          ? res.companyaddress__address__street
                          : "Unavailable"}
                      </span>
                    </li>
                    <li className="fs-14 text-secondary mb-2">
                      Building Number:{" "}
                      <span className="color-main">
                        {res.companyaddress__address__building_number
                          ? res.companyaddress__address__building_number
                          : "Unavailable"}
                      </span>
                    </li>
                    <li className="fs-14 text-secondary mb-2">
                      District:{" "}
                      <span className="color-main">
                        {res.companyaddress__address__district__district
                          ? res.companyaddress__address__district__district
                          : "Unavailable"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  };

  const branchInfo = () => {
    if (dataBranch) {
      return (
        <div className=" contentUser py-5 px-3 position-absolute top-0 end-0 z-1">
          <h2 className="text-center fw-bold color-main">Branches</h2>

          <div className="row gap-4 justify-content-center admin mt-5">
            {dataBranch.length === 0 ? (
              <h4 className="bg-white text-center p-4 rounded">
                No Branch To Show
              </h4>
            ) : (
              dataBranch.map((res) => (
                <Link
                  key={res.id}
                  to={"/home/" + companyId + "/" + res.id}
                  className="col-9 col-md-5 col-lg-3 bg-main text-white rounded-3 cr-pointer tr-main p-4 d-flex flex-column  justify-content-center align-items-center"
                >
                  <i className="fa-regular fa-building fa-fw fa-3x"></i>
                  <span className="d-block mt-3 fw-bold">
                    {res.verbose_name}
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    getCompanyAvaData();
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  } else if (allowedParams.includes(parseInt(companyId))) {
    if (data) {
      return (
        <>
          <NavLog />
          <Contact />
          <div className="bg-sec min-vh-100 position-relative">
            <div className="sidebarUser vh-100 bg-white position-absolute top-0 start-0 py-4 z-1">
              <ul className="p-0 m-0">
                <li className="d-block p-3 rounded-3 text-black cr-pointer mx-3 mb-1 tr-main">
                  <i className="fa-solid fa-users fa-fw me-2"></i>
                  <span>Users</span>
                </li>
                <li
                  onClick={handleBranch}
                  className="d-block p-3 rounded-3 text-black cr-pointer mx-3 mb-1 tr-main"
                >
                  <i className="fa-solid fa-code-branch me-2"></i>
                  <span>Branch</span>
                </li>
                <li className="d-block p-3 rounded-3 text-black cr-pointer mx-3 mb-1">
                  <i className="fa-solid fa-gear fa-fw me-2"></i>
                  <span>Setting</span>
                </li>
              </ul>
            </div>
            {branch ? branchInfo() : companyInfo()}
          </div>
          <Footer />
        </>
      );
    } else {
      return <Loading />;
    }
  } else {
    navigate("/home");
  }
}

export default CompanyDetails;
