import React, { useEffect, useState } from "react";
import Loading from "./comp/global/js/Loading";
import { Route, Routes } from "react-router-dom";
import NotFound from "./comp/global/js/NotFound";
import sign from "./routes/SignR";
import home from "./routes/HomeR";
import company from "./routes/CompanyR";
import auth from "./routes/AuthR";
import branch from "./routes/BranchR";
import info from "./routes/InfoR";
import user from "./routes/UserR";
import axios from "axios";

function App() {
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector(".loading").style.visibility = "visible";
    } else {
      document.querySelector(".loading").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }
  };

  const [countRef, setCountRef] = useState(
    parseInt(localStorage.getItem("countRef")) || 0
  );

  const [countAcs, setCountAcs] = useState(
    parseInt(localStorage.getItem("countAcs")) || 0
  );

  const token = window.localStorage.getItem("token");

  const getAccessToken = () => {
    axios
      .post(`${process.env.REACT_APP_HOSTNAME}/api/token/refresh/`, {
        refresh: token,
      })
      .then((res) => {
        localStorage.setItem("access", res.data.access);
        setCountAcs(0);
      });
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("countRef", countRef);

      const interval = setInterval(() => {
        setCountRef((prevCount) => prevCount + 1);

        if (
          window.localStorage.getItem("countRef") ===
          window.localStorage.getItem("expRef")
        ) {
          setCountRef(0);
          window.localStorage.clear();
          window.location.reload();
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countRef]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("countAcs", countAcs);

      const interval = setInterval(() => {
        setCountAcs((prevCount) => prevCount + 1);

        if (
          window.localStorage.getItem("countAcs") ===
          window.localStorage.getItem("expAcs")
        ) {
          getAccessToken();
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countAcs]);

  return (
    <div className="App">
      <Loading />
      <Routes>
        {sign}
        {home}
        {company}
        {auth}
        {branch}
        {info}
        {user}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
