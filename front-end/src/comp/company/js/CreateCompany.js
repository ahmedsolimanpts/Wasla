import React, { useEffect, useState } from "react";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";
import "../css/CreateCompany.css";

function CreateCompany() {
  const [companies, setCompanies] = useState();

  const handleCompany = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/company/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.name.value,
        verbose_name: e.target.verbose.value,
        companytype: e.target.chooseType.value,
        manager: e.target.manager.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.name[0];
        if (error === "company with this name already exists.") {
          document.querySelector(".addCompany .infoMsg").style.cssText =
            "display: flex;";
        } else {
          e.target.name.value = "";
          e.target.verbose.value = "";
          e.target.manager.value = "";
        }
      });
  };

  const getTypeData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-type/"
    ).then((res) => res.json());
    setCompanies(res);
  };

  useEffect(() => {
    getTypeData();
  }, []);

  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="createCompany">
        <h1> Create Company </h1>
        <div className="wrapper">
          <div className="box">
            <form className="addCompany" onSubmit={handleCompany}>
              <label>Company name</label>
              <input
                type="text"
                placeholder="Company name"
                id="name"
                required
              />
              <label>Company verbose name</label>
              <input
                type="text"
                placeholder="Company verbose name"
                id="verbose"
                required
              />
              <label>Choose company type</label>
              <select id="chooseType" required>
                {companies &&
                  companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.type}
                    </option>
                  ))}
              </select>
              <label>Manager id</label>
              <input
                type="text"
                placeholder="Manager id"
                id="manager"
                required
              />
              <div className="infoMsg">
                <h2> Company already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addCompany .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button>Add Company</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateCompany;
