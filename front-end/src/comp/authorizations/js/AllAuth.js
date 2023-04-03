import React, { useState } from "react";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";
import "../css/AllAuth.css";

function AllAuth() {
  const [langs, setLang] = useState();
  const [features, setFeatures] = useState();
  const [branches, setBranches] = useState();
  const [branchFeature, setBranchFeature] = useState();
  const [perivilage, setPerivilage] = useState();
  const [userPerivilage, setUserPerivilage] = useState();
  const [companyLiciens, setCompanyLiciens] = useState();
  const [company, setCompany] = useState();
  const [services, setServices] = useState();
  const [companyServices, setCompanyServices] = useState();

  const editFeature = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/feature/${e.target.name.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feature: e.target.name.value,
          description: e.target.description.value,
          language: e.target.lang.value,
        }),
      }
    );
  };

  const delFeature = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/feature/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editBranchFeature = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-feature/${e.target.startDate.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feature: e.target.feature.value,
          company_branch: e.target.companyBranch.value,
          start_date: e.target.startDate.value,
          end_date: e.target.endDate.value,
        }),
      }
    );
  };

  const delBranchFeature = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-feature/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editPerivilage = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/perivilages/${e.target.name.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          perivilage: e.target.name.value,
          description: e.target.description.value,
          language: e.target.lang.value,
        }),
      }
    );
  };

  const delPerivilage = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/perivilages/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editUserPerivilage = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/user-perivilages/${e.target.userId.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: e.target.userId.value,
          company_branch: e.target.companyBranch.value,
          privilages: e.target.perivilage.value,
        }),
      }
    );
  };

  const delUserPerivilage = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/user-perivilages/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editCompanyLiciens = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-liciens/${e.target.startDate.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: e.target.company.value,
          start_date: e.target.startDate.value,
          end_date: e.target.endDate.value,
        }),
      }
    );
  };

  const delCompanyLiciens = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-liciens/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editServices = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/services/${e.target.name.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: e.target.name.value,
          language: e.target.lang.value,
        }),
      }
    );
  };

  const delServices = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/services/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editCompanyServices = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-services/${e.target.id.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: e.target.services.value,
          company: e.target.company.value,
        }),
      }
    );
  };

  const delCompanyServices = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-services/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const getLangData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/language/"
    ).then((res) => res.json());
    setLang(res);
  };

  const getFeaturesData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/feature/"
    ).then((res) => res.json());
    setFeatures(res);
  };

  const getBranchFeaturesData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/branch-feature/"
    ).then((res) => res.json());
    setBranchFeature(res);
  };

  const getBranchData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-branch/"
    ).then((res) => res.json());
    setBranches(res);
  };

  const getPerivilageData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/perivilages/"
    ).then((res) => res.json());
    setPerivilage(res);
  };

  const getUserPerivilageData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/user-perivilages/"
    ).then((res) => res.json());
    setUserPerivilage(res);
  };

  const getCompanyLiciensData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-liciens/"
    ).then((res) => res.json());
    setCompanyLiciens(res);
  };

  const getCompanyData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company/"
    ).then((res) => res.json());
    setCompany(res);
  };

  const getServicesData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/services/"
    ).then((res) => res.json());
    setServices(res);
  };

  const getCompanyServicesData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-services/"
    ).then((res) => res.json());
    setCompanyServices(res);
  };

  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="all-auth">
        <h1> All Auth </h1>
        <div className="wrapper">
          <div className="box">
            <h2
              onClick={() => {
                document
                  .querySelector(".all-auth .box-one")
                  .classList.toggle("open");
                getFeaturesData();
                getLangData();
              }}
            >
              Feature<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-one">
              {features &&
                features.map((feature) => (
                  <form key={feature.id} onSubmit={editFeature}>
                    <label>Feature Name</label>
                    <input
                      type="text"
                      defaultValue={feature.feature}
                      id="name"
                      data-id={feature.id}
                    />

                    <label> Description </label>
                    <textarea
                      defaultValue={feature.description}
                      id="description"
                    ></textarea>

                    <label>Language</label>
                    <select id="lang" defaultValue={feature.language}>
                      {langs &&
                        langs.map((lang) => (
                          <option key={lang.id} value={lang.id}>
                            {" "}
                            {lang.language}{" "}
                          </option>
                        ))}
                    </select>

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={feature.id}
                        onClick={delFeature}
                      >
                        Delete
                      </span>
                    </div>
                  </form>
                ))}
            </div>
          </div>

          <div className="box">
            <h2
              onClick={() => {
                document
                  .querySelector(".all-auth .box-two")
                  .classList.toggle("open");
                getBranchFeaturesData();
                getFeaturesData();
                getBranchData();
              }}
            >
              Branch Feature<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-two">
              {branchFeature &&
                branchFeature.map((branchFeature) => (
                  <form key={branchFeature.id} onSubmit={editBranchFeature}>
                    <label>Feature</label>
                    <select id="feature" defaultValue={branchFeature.feature}>
                      {features &&
                        features.map((feature) => (
                          <option key={feature.id} value={feature.id}>
                            {" "}
                            {feature.feature}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Company Branch</label>
                    <select
                      id="companyBranch"
                      defaultValue={branchFeature.company_branch}
                    >
                      {branches &&
                        branches.map((branch) => (
                          <option key={branch.id} value={branch.id}>
                            {" "}
                            {branch.verbose_name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Start Date</label>
                    <input
                      type="date"
                      defaultValue={branchFeature.start_date}
                      id="startDate"
                      data-id={branchFeature.id}
                    />

                    <label>End Date</label>
                    <input
                      type="date"
                      defaultValue={branchFeature.end_date}
                      id="endDate"
                    />

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={branchFeature.id}
                        onClick={delBranchFeature}
                      >
                        Delete
                      </span>
                    </div>
                  </form>
                ))}
            </div>
          </div>

          <div className="box">
            <h2
              onClick={() => {
                document
                  .querySelector(".all-auth .box-three")
                  .classList.toggle("open");
                getPerivilageData();
                getLangData();
              }}
            >
              Perivilage<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-three">
              {perivilage &&
                perivilage.map((perivilage) => (
                  <form key={perivilage.id} onSubmit={editPerivilage}>
                    <label>Perivilage Name</label>
                    <input
                      type="text"
                      defaultValue={perivilage.perivilage}
                      id="name"
                      data-id={perivilage.id}
                    />

                    <label> Description </label>
                    <textarea
                      defaultValue={perivilage.description}
                      id="description"
                    ></textarea>

                    <label>Language</label>
                    <select id="lang" defaultValue={perivilage.language}>
                      {langs &&
                        langs.map((lang) => (
                          <option key={lang.id} value={lang.id}>
                            {" "}
                            {lang.language}{" "}
                          </option>
                        ))}
                    </select>

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={perivilage.id}
                        onClick={delPerivilage}
                      >
                        Delete
                      </span>
                    </div>
                  </form>
                ))}
            </div>
          </div>

          <div className="box">
            <h2
              onClick={() => {
                document
                  .querySelector(".all-auth .box-four")
                  .classList.toggle("open");
                getUserPerivilageData();
                getBranchData();
                getPerivilageData();
              }}
            >
              User Perivilage<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-four">
              {userPerivilage &&
                userPerivilage.map((userPerivilage) => (
                  <form key={userPerivilage.id} onSubmit={editUserPerivilage}>
                    <label>User id</label>
                    <input
                      type="text"
                      defaultValue={userPerivilage.user}
                      id="userId"
                      data-id={userPerivilage.id}
                    />

                    <label>Company Branch</label>
                    <select
                      id="companyBranch"
                      defaultValue={userPerivilage.company_branch}
                    >
                      {branches &&
                        branches.map((branch) => (
                          <option key={branch.id} value={branch.id}>
                            {" "}
                            {branch.verbose_name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Perivilage</label>
                    <select
                      id="perivilage"
                      defaultValue={userPerivilage.privilages}
                    >
                      {perivilage &&
                        perivilage.map((perivilage) => (
                          <option key={perivilage.id} value={perivilage.id}>
                            {" "}
                            {perivilage.perivilage}{" "}
                          </option>
                        ))}
                    </select>

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={userPerivilage.id}
                        onClick={delUserPerivilage}
                      >
                        Delete
                      </span>
                    </div>
                  </form>
                ))}
            </div>
          </div>

          <div className="box">
            <h2
              onClick={() => {
                document
                  .querySelector(".all-auth .box-five")
                  .classList.toggle("open");
                getCompanyLiciensData();
                getCompanyData();
              }}
            >
              Company Liciens<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-five">
              {companyLiciens &&
                companyLiciens.map((companyLiciens) => (
                  <form key={companyLiciens.id} onSubmit={editCompanyLiciens}>
                    <label>Company</label>
                    <select id="company" defaultValue={companyLiciens.company}>
                      {company &&
                        company.map((company) => (
                          <option key={company.id} value={company.id}>
                            {" "}
                            {company.name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Start Date</label>
                    <input
                      type="date"
                      defaultValue={companyLiciens.start_date}
                      id="startDate"
                      data-id={companyLiciens.id}
                    />

                    <label>End Date</label>
                    <input
                      type="date"
                      defaultValue={companyLiciens.end_date}
                      id="endDate"
                    />

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={companyLiciens.id}
                        onClick={delCompanyLiciens}
                      >
                        Delete
                      </span>
                    </div>
                  </form>
                ))}
            </div>
          </div>

          <div className="box">
            <h2
              onClick={() => {
                document
                  .querySelector(".all-auth .box-six")
                  .classList.toggle("open");
                getServicesData();
                getLangData();
              }}
            >
              Services <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-six">
              {services &&
                services.map((services) => (
                  <form key={services.id} onSubmit={editServices}>
                    <label>Services Name</label>
                    <input
                      type="text"
                      defaultValue={services.service}
                      id="name"
                      data-id={services.id}
                    />

                    <label>Language</label>
                    <select id="lang" defaultValue={services.language}>
                      {langs &&
                        langs.map((lang) => (
                          <option key={lang.id} value={lang.id}>
                            {" "}
                            {lang.language}{" "}
                          </option>
                        ))}
                    </select>

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={services.id}
                        onClick={delServices}
                      >
                        Delete
                      </span>
                    </div>
                  </form>
                ))}
            </div>
          </div>

          <div className="box">
            <h2
              onClick={() => {
                document
                  .querySelector(".all-auth .box-seven")
                  .classList.toggle("open");
                getCompanyServicesData();
                getCompanyData();
                getServicesData();
              }}
            >
              Company Services <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-seven">
              {companyServices &&
                companyServices.map((companyServices) => (
                  <form key={companyServices.id} onSubmit={editCompanyServices}>
                    <label>Company Services Id</label>
                    <input
                      type="text"
                      defaultValue={companyServices.id}
                      id="id"
                      data-id={companyServices.id}
                      disabled
                    />

                    <label>Service</label>
                    <select
                      id="services"
                      defaultValue={companyServices.service}
                    >
                      {services &&
                        services.map((services) => (
                          <option key={services.id} value={services.id}>
                            {" "}
                            {services.service}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Company</label>
                    <select id="company" defaultValue={companyServices.company}>
                      {company &&
                        company.map((company) => (
                          <option key={company.id} value={company.id}>
                            {" "}
                            {company.name}{" "}
                          </option>
                        ))}
                    </select>

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={companyServices.id}
                        onClick={delCompanyServices}
                      >
                        Delete
                      </span>
                    </div>
                  </form>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllAuth;
