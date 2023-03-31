import React, { useEffect, useState } from "react";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";
import "../css/CreateAuth.css";

function CreateAuth() {
  const [langs, setLang] = useState();
  const [features, setFeatures] = useState();
  const [branches, setBranches] = useState();
  const [companies, setCompanies] = useState();
  const [services, setServices] = useState();
  const [perivilage, setPerivilage] = useState();

  const handleFeature = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/feature/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        feature: e.target.name.value,
        description: e.target.description.value,
        language: e.target.chooseLang.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.feature[0];
        if (error === "feature with this feature already exists.") {
          document.querySelector(".addFeature .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
          e.target.name.value = "";
          e.target.description.value = "";
        }
      });
  };

  const handleBranchFeature = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/branch-feature/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        feature: e.target.chooseFeature.value,
        company_branch: e.target.chooseBranch.value,
        start_date: e.target.startDate.value,
        end_date: e.target.endDate.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.non_field_errors[0];
        if (
          error ===
          "The fields company_branch, feature, start_date must make a unique set."
        ) {
          document.querySelector(".addBranch .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
        }
      });
    e.target.startDate.value = "";
    e.target.endDate.value = "";
  };

  const handlePerivilage = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/perivilages/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        perivilage: e.target.name.value,
        description: e.target.description.value,
        language: e.target.chooseLang.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.perivilage[0];
        if (error === "privilages with this perivilage already exists.") {
          document.querySelector(".addPerivilage .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
          e.target.name.value = "";
          e.target.description.value = "";
        }
      });
  };

  const handleUserPerivilage = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/user-perivilages/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: e.target.userId.value,
        company_branch: e.target.chooseBranch.value,
        privilages: e.target.choosePerivilage.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.non_field_errors[0];
        if (
          error ===
          "The fields user, company_branch, privilages must make a unique set."
        ) {
          document.querySelector(".addUserPerivilage .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
          e.target.userId.value = "";
        }
      });
  };

  const handleLiciens = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/company-liciens/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: e.target.chooseCompany.value,
        start_date: e.target.startDate.value,
        end_date: e.target.endDate.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.non_field_errors[0];
        if (
          error === "The fields company, start_date must make a unique set."
        ) {
          document.querySelector(".addLiciens .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
          e.target.startDate.value = "";
          e.target.endDate.value = "";
        }
      });
  };

  const handleServices = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/services/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service: e.target.name.value,
        language: e.target.chooseLang.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.service[0];
        if (error === "services with this service already exists.") {
          document.querySelector(".addServices .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
          e.target.name.value = "";
        }
      });
  };

  const handleCompanyServices = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/company-services/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service: e.target.chooseService.value,
        company: e.target.chooseCompany.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.non_field_errors[0];
        if (error === "The fields company, service must make a unique set.") {
          document.querySelector(".addCompanyServices .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
        }
      });
  };

  const getLangData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/language/"
    ).then((res) => res.json());
    setLang(res);
  };

  const getFeatureData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/feature/"
    ).then((res) => res.json());
    setFeatures(res);
  };

  const getBranchData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-branch/"
    ).then((res) => res.json());
    setBranches(res);
  };

  const getCompanyData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company/"
    ).then((res) => res.json());
    setCompanies(res);
  };

  const getServicesData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/services/"
    ).then((res) => res.json());
    setServices(res);
  };

  const getPerivilageData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/perivilages/"
    ).then((res) => res.json());
    setPerivilage(res);
  };

  useEffect(() => {
    getLangData();
    getFeatureData();
    getBranchData();
    getCompanyData();
    getServicesData();
    getPerivilageData();
  }, []);
  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="createAuth">
        <h1> Create Auth </h1>
        <div className="wrapper">
          <div className="box">
            <h2>Feature</h2>
            <form onSubmit={handleFeature} className="addFeature">
              <input
                type="text"
                placeholder="Feature name"
                id="name"
                required
              />

              <label>Description</label>
              <textarea
                placeholder="Feature description"
                id="description"
              ></textarea>

              <label>Choose Language</label>
              <select id="chooseLang" required>
                {langs &&
                  langs.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.language}
                    </option>
                  ))}
              </select>

              <div className="infoMsg">
                <h2> Feature already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addFeature .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add Feature </button>
            </form>
          </div>

          <div className="box">
            <h2> Branch Feature </h2>
            <form onSubmit={handleBranchFeature} className="addBranch">
              <label> Choose Feature </label>
              <select id="chooseFeature" required>
                {features &&
                  features.map((feature) => (
                    <option key={feature.id} value={feature.id}>
                      {feature.feature}
                    </option>
                  ))}
              </select>

              <label> Choose Company Branch </label>
              <select id="chooseBranch" required>
                {branches &&
                  branches.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.verbose_name}
                    </option>
                  ))}
              </select>

              <label>Start Date</label>
              <input type="date" id="startDate" />

              <label>End Date</label>
              <input type="date" id="endDate" />

              <div className="infoMsg">
                <h2> Branch Feature already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addBranch .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add Branch Feature </button>
            </form>
          </div>

          <div className="box">
            <h2>Perivilage</h2>
            <form onSubmit={handlePerivilage} className="addPerivilage">
              <input
                type="text"
                placeholder="Perivilage name"
                id="name"
                required
              />

              <label>Description</label>
              <textarea
                placeholder="Perivilage description"
                id="description"
              ></textarea>

              <label>Choose Language</label>
              <select id="chooseLang" required>
                {langs &&
                  langs.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.language}
                    </option>
                  ))}
              </select>

              <div className="infoMsg">
                <h2> Perivilage already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addPerivilage .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add Perivilage </button>
            </form>
          </div>

          <div className="box">
            <h2>User Perivilage</h2>
            <form onSubmit={handleUserPerivilage} className="addUserPerivilage">
              <label>User Id</label>
              <input type="text" placeholder="User id" id="userId" required />

              <label> Choose Company Branch </label>
              <select id="chooseBranch" required>
                {branches &&
                  branches.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.verbose_name}
                    </option>
                  ))}
              </select>

              <label>Choose Perivilage</label>
              <select id="choosePerivilage" required>
                {perivilage &&
                  perivilage.map((perivilage) => (
                    <option key={perivilage.id} value={perivilage.id}>
                      {perivilage.perivilage}
                    </option>
                  ))}
              </select>

              <div className="infoMsg">
                <h2> User Perivilage already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addUserPerivilage .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add User Perivilage </button>
            </form>
          </div>

          <div className="box">
            <h2>Company Liciens</h2>
            <form onSubmit={handleLiciens} className="addLiciens">
              <label>Choose Company</label>
              <select id="chooseCompany" required>
                {companies &&
                  companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
              </select>

              <label>Start Date</label>
              <input type="date" id="startDate" />

              <label>End Date</label>
              <input type="date" id="endDate" />

              <div className="infoMsg">
                <h2> Liciens already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addLiciens .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add Liciens </button>
            </form>
          </div>

          <div className="box">
            <h2> Services </h2>
            <form onSubmit={handleServices} className="addServices">
              <input type="text" placeholder="Services name" id="name" />

              <label>Choose Language</label>
              <select id="chooseLang" required>
                {langs &&
                  langs.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.language}
                    </option>
                  ))}
              </select>

              <div className="infoMsg">
                <h2> Services already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addServices .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add Services </button>
            </form>
          </div>

          <div className="box">
            <h2>Company Services</h2>
            <form
              onSubmit={handleCompanyServices}
              className="addCompanyServices"
            >
              <label>Choose Services</label>
              <select id="chooseService" required>
                {services &&
                  services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.service}
                    </option>
                  ))}
              </select>

              <label>Choose Company</label>
              <select id="chooseCompany" required>
                {companies &&
                  companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
              </select>

              <div className="infoMsg">
                <h2> Company Services already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addCompanyServices .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add Company Services </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateAuth;
