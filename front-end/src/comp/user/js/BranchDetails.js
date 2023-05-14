import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavLog from "../../global/js/NavLog";
import Contact from "../../global/js/Contact";
import Footer from "../../global/js/Footer";
import Loading from "../../global/js/Loading";
import "../css/CompanyDetails.css";

function BranchDetails() {
  const token = window.localStorage.getItem("access");
  // const [data, setData] = useState();
  const [feature, setFeature] = useState();
  const [featureAva, setFeatureAva] = useState();
  const [allowedParams, setAllowedParams] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();
  const branchId = params.branchId;
  const companyId = params.companyId;

  const getBranchAvaData = () => {
    axios
      .get(
        `${process.env.REACT_APP_HOSTNAME}/api/get-company-branch/${companyId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const allowedIds = res.data.map((item) => item.id);
        setAllowedParams(allowedIds);
        setLoading(false);
      });
  };

  const handleFeatureData = () => {
    axios
      .get(`${process.env.REACT_APP_HOSTNAME}/api/feature/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setFeature(res.data));
  };

  const handleFeatureAvaData = () => {
    axios
      .get(
        `${process.env.REACT_APP_HOSTNAME}/api/get-available-branch-feature/${branchId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setFeatureAva(res.data));
  };

  const unmatchedFeature = () => {
    if (featureAva) {
      return feature.filter((itemA) => {
        return !featureAva.some((itemB) => itemA.id === itemB.feature.id);
      });
    }
  };

  useEffect(() => {
    getBranchAvaData();
    // handleGetData();
    handleFeatureData();
    handleFeatureAvaData();
    unmatchedFeature();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  } else if (allowedParams.includes(parseInt(branchId))) {
    return (
      <>
        <NavLog />
        <Contact />
        <div className="bg-sec min-vh-100 position-relative">
          <div className="sidebarUser vh-100 bg-white position-absolute top-0 start-0 py-4 z-1">
            <ul className="p-0 m-0">
              {featureAva &&
                feature.map((res) =>
                  featureAva.map((resTwo) =>
                    res.id === resTwo.feature.id ? (
                      <Link
                        key={res.id}
                        to={
                          "/home/" +
                          resTwo.branch.company +
                          "/" +
                          resTwo.branch.id +
                          "/" +
                          res.id
                        }
                        className="d-block p-3 rounded-3 text-black cr-pointer mx-3 mb-1 tr-main"
                      >
                        <span> {res.feature} </span>
                      </Link>
                    ) : (
                      ""
                    )
                  )
                )}

              {featureAva &&
                unmatchedFeature().map((res) => (
                  <div
                    key={res.id}
                    className="d-block p-3 rounded-3 text-secondary mx-3 mb-1 fs-14"
                  >
                    <span>
                      {" "}
                      {res.feature} <i className="fa-solid fa-lock"></i>{" "}
                    </span>
                  </div>
                ))}
            </ul>
          </div>

          <div className=" contentUser py-5 px-3 position-absolute top-0 end-0 z-1">
            <h2 className="text-center fw-bold color-main">
              Branch Information
            </h2>
            <div className="box-company bg-white w-100 mt-4 p-4 pb-0 ">
              <h4 className="text-center fw-bold text-secondary">BRO</h4>
              <div className="box-information p-3 pb-0 m-0 row">
                <ul className="col-md-6">
                  <li className="fs-14 text-secondary mb-2">
                    Name: <span className="color-main">Branch one</span>
                  </li>
                  <li className="fs-14 text-secondary mb-2">
                    ID: <span className="color-main">{branchId}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    navigate("/home");
  }
}

export default BranchDetails;
