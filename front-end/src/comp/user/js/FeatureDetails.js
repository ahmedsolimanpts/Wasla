import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavLog from "../../global/js/NavLog";
import Contact from "../../global/js/Contact";
import Footer from "../../global/js/Footer";
import axios from "axios";
import Loading from "../../global/js/Loading";

function FeatureDetails() {
  const token = window.localStorage.getItem("access");
  const [allowedParams, setAllowedParams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [test, setTest] = useState("Click on button");

  const navigate = useNavigate();
  const params = useParams();
  const featureId = params.featureId;
  const branchId = params.branchId;
  const userId = window.localStorage.getItem("user_id");

  const getFeatureAvaData = () => {
    axios
      .get(
        `${process.env.REACT_APP_HOSTNAME}/api/get-available-branch-feature/${branchId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const allowedIds = res.data.map((item) => item.feature.id);
        setAllowedParams(allowedIds);
        setLoading(false);
      });
  };

  const handleGetTest = () => {
    axios
      .get(
        `${process.env.REACT_APP_HOSTNAME}/api/accounting/?user_id=${userId}&branch_id=${branchId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setTest(res.data.MSG);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setTest(error.response.data.MSG);
        }
      });
  };

  const handlePostTest = () => {
    axios
      .post(
        `${process.env.REACT_APP_HOSTNAME}/api/accounting/`,
        {
          user_id: window.localStorage.getItem("user_id"),
          branch_id: branchId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setTest(res.data.MSG);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setTest(error.response.data.MSG);
        }
      });
  };

  useEffect(() => {
    getFeatureAvaData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  } else if (allowedParams.includes(parseInt(featureId))) {
    return (
      <>
        <NavLog />
        <Contact />
        <div className="bg-sec min-vh-100 py-5">
          <h1 className="text-center mb-4">Hello {featureId} </h1>
          <div className="d-block w-100 bg-main text-center">
            <button className="btn btn-primary m-2" onClick={handlePostTest}>
              Post
            </button>

            <button className="btn btn-primary m-2" onClick={handleGetTest}>
              Get
            </button>
          </div>
          <p className="mt-4 text-center fw-bold">{test}</p>
        </div>
        <Footer />
      </>
    );
  } else {
    navigate("/home");
  }
}

export default FeatureDetails;
