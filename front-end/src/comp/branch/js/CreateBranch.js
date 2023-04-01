import React, { useEffect, useState } from "react";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";
import "../css/CreateBranch.css";

function CreateBranch() {
  const [companies, setCompanies] = useState();
  const [branches, setBranches] = useState();
  const [phones, setPhones] = useState();
  const [address, setAddress] = useState();
  const [compBranches, setCompBranches] = useState();
  const [locations, setLocations] = useState();
  const [langs, setLang] = useState();
  const [status, setStatus] = useState();

  const handleBranch = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/branch/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.name.value,
        verbose_name: e.target.verbose.value,
        manager: e.target.manager.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.name[0];
        if (error === "branch with this name already exists.") {
          document.querySelector(".addBranch .infoMsg").style.cssText =
            "display: flex;";
        } else {
          document.querySelector(".addBranch .infoMsg").style.cssText =
            "display: flex;";
          document.querySelector(".addBranch .infoMsg h2").textContent =
            "Created Good";
          getBranchData();
          e.target.name.value = "";
          e.target.verbose.value = "";
          e.target.manager.value = "";
        }
      });
  };

  const handleCompanyBranch = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/company-branch/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        verbose_name: e.target.verbose.value,
        company: e.target.chooseCompany.value,
        branch: e.target.chooseBranch.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.branch[0];
        if (error === "company branch with this branch already exists.") {
          document.querySelector(".addCompanyBranch .infoMsg").style.cssText =
            "display: flex;";
        } else {
          getCompanyData();
          getBranchData();
          getCompanyBranchData();
          e.target.verbose.value = "";
        }
      });
  };

  const handlePhone = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/branch-phone/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: e.target.choosePhone.value,
        branch: e.target.chooseBranch.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.non_field_errors[0];
        if (error === "The fields phone, branch must make a unique set.") {
          document.querySelector(".addPhone .infoMsg").style.cssText =
            "display: flex;";
        } else {
          getBranchData();
          getPhoneData();
        }
      });
  };

  const handleAddress = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/branch-address/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address: e.target.chooseAddress.value,
        branch: e.target.chooseBranch.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.non_field_errors[0];
        if (error === "The fields address, branch must make a unique set.") {
          document.querySelector(".addAddress .infoMsg").style.cssText =
            "display: flex;";
        } else {
          getBranchData();
          getAddressData();
        }
      });
  };

  const handleLocation = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/branch-location/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company_branch: e.target.chooseCompanyBranch.value,
        location: e.target.chooseLocation.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.company_branch[0];
        if (
          error === "branch location with this company branch already exists."
        ) {
          document.querySelector(".addLocation .infoMsg").style.cssText =
            "display: flex;";
        } else {
          getCompanyBranchData();
          getLocationData();
        }
      });
  };

  const handleStatus = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/branch-status/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: e.target.status.value,
        language: e.target.chooseLang.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.status[0];
        if (error === "branch status with this status already exists.") {
          document.querySelector(".addStatus .infoMsg").style.cssText =
            "display: flex;";
        } else {
          getLangData();
          getStatusData();
          e.target.status.value = "";
        }
      });
  };

  const handleCurrentStatus = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/branch-current-status/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company_branch: e.target.chooseCompanyBranch.value,
        status: e.target.chooseStatus.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.company_branch[0];
        if (
          error ===
          "branch current status with this company branch already exists."
        ) {
          document.querySelector(".addCurrentStatus .infoMsg").style.cssText =
            "display: flex;";
        } else {
          getCompanyBranchData();
          getStatusData();
        }
      });
  };

  const handleServicePrice = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/branch-service-price/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company_branch: e.target.chooseCompanyBranch.value,
        service_price: e.target.servicePrice.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.company_branch[0];
        if (
          error ===
          "brnch service price with this company branch already exists."
        ) {
          document.querySelector(".addServicePrice .infoMsg").style.cssText =
            "display: flex;";
        } else {
          getCompanyBranchData();
          e.target.servicePrice.value = "";
        }
      });
  };

  const handleWorkTime = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/branch-work-time/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company_branch: e.target.chooseCompanyBranch.value,
        open_at: e.target.openAt.value,
        close_at: e.target.closeAt.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.company_branch[0];
        if (
          error === "branch work time with this company branch already exists."
        ) {
          document.querySelector(".addWorkTime .infoMsg").style.cssText =
            "display: flex;";
        } else {
          getCompanyBranchData();
          e.target.openAt.value = "";
          e.target.closeAt.value = "";
        }
      });
  };

  const getCompanyData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company/"
    ).then((res) => res.json());
    setCompanies(res);
  };

  const getBranchData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/branch/"
    ).then((res) => res.json());
    setBranches(res);
  };

  const getPhoneData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/phone/"
    ).then((res) => res.json());
    setPhones(res);
  };

  const getAddressData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/address/"
    ).then((res) => res.json());
    setAddress(res);
  };

  const getCompanyBranchData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-branch/"
    ).then((res) => res.json());
    setCompBranches(res);
  };

  const getLocationData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/location/"
    ).then((res) => res.json());
    setLocations(res);
  };

  const getLangData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/language/"
    ).then((res) => res.json());
    setLang(res);
  };

  const getStatusData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/branch-status/"
    ).then((res) => res.json());
    setStatus(res);
  };

  useEffect(() => {
    getCompanyData();
    getBranchData();
    getPhoneData();
    getAddressData();
    getCompanyBranchData();
    getLocationData();
    getLangData();
    getStatusData();
  }, []);

  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="createBranch">
        <h1> Create Branch </h1>
        <div className="wrapper">
          <div className="box">
            <h2>Branch</h2>
            <form className="addBranch" onSubmit={handleBranch}>
              <label>Branch name</label>
              <input type="text" placeholder="Branch name" id="name" required />

              <label>Branch verbose name</label>
              <input
                type="text"
                placeholder="Branch verbose name"
                id="verbose"
                required
              />

              <label>Manager id</label>
              <input
                type="text"
                placeholder="Manager id"
                id="manager"
                required
              />

              <div className="infoMsg">
                <h2> Branch already Added </h2>
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
              <button>Add Branch</button>
            </form>
          </div>

          <div className="box">
            <h2>Company Branch</h2>
            <form className="addCompanyBranch" onSubmit={handleCompanyBranch}>
              <label>Branch verbose name</label>
              <input
                type="text"
                placeholder="Branch verbose name"
                id="verbose"
                required
              />

              <label>Company</label>
              <select id="chooseCompany" required>
                {companies &&
                  companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
              </select>

              <label>Branch</label>
              <select id="chooseBranch" required>
                {branches &&
                  branches.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.name}
                    </option>
                  ))}
              </select>

              <div className="infoMsg">
                <h2> Company Branch already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addCompanyBranch .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button>Add Company Branch</button>
            </form>
          </div>

          <div className="box">
            <h2>Branch Phone</h2>
            <form className="addPhone" onSubmit={handlePhone}>
              <label>Branch</label>
              <select id="chooseBranch" required>
                {branches &&
                  branches.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.name}
                    </option>
                  ))}
              </select>

              <label>Phone</label>
              <select id="choosePhone" required>
                {phones &&
                  phones.map((phone) => (
                    <option key={phone.id} value={phone.id}>
                      {phone.phone}
                    </option>
                  ))}
              </select>

              <div className="infoMsg">
                <h2> Branch Phone already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(".addPhone .infoMsg").style.cssText =
                      "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button>Add Branch Phone</button>
            </form>
          </div>

          <div className="box">
            <h2>Branch Address</h2>
            <form className="addAddress" onSubmit={handleAddress}>
              <label>Branch</label>
              <select id="chooseBranch" required>
                {branches &&
                  branches.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.name}
                    </option>
                  ))}
              </select>

              <label>Address id</label>
              <select id="chooseAddress" required>
                {address &&
                  address.map((address) => (
                    <option key={address.id} value={address.id}>
                      {address.id}
                    </option>
                  ))}
              </select>

              <div className="infoMsg">
                <h2> Branch Address already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addAddress .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button>Add Branch Address</button>
            </form>
          </div>

          <div className="box">
            <h2>Branch Location</h2>
            <form className="addLocation" onSubmit={handleLocation}>
              <label>Company branch</label>
              <select id="chooseCompanyBranch" required>
                {compBranches &&
                  compBranches.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.verbose_name}
                    </option>
                  ))}
              </select>

              <label>Location id</label>
              <select id="chooseLocation" required>
                {locations &&
                  locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.id}
                    </option>
                  ))}
              </select>

              <div className="infoMsg">
                <h2> Branch Location already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addLocation .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button>Add Branch Location</button>
            </form>
          </div>

          <div className="box">
            <h2>Branch Status</h2>
            <form className="addStatus" onSubmit={handleStatus}>
              <label>Status</label>
              <input type="text" placeholder="Status" id="status" required />

              <label>Language</label>
              <select id="chooseLang" required>
                {langs &&
                  langs.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.language}
                    </option>
                  ))}
              </select>

              <div className="infoMsg">
                <h2> Branch Status already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addStatus .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button>Add Branch Status</button>
            </form>
          </div>

          <div className="box">
            <h2>Branch Current Status</h2>
            <form className="addCurrentStatus" onSubmit={handleCurrentStatus}>
              <label>Company branch</label>
              <select id="chooseCompanyBranch" required>
                {compBranches &&
                  compBranches.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.verbose_name}
                    </option>
                  ))}
              </select>

              <label>Status</label>
              <select id="chooseStatus" required>
                {status &&
                  status.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.status}
                    </option>
                  ))}
              </select>

              <div className="infoMsg">
                <h2> Branch Current Status already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addCurrentStatus .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button>Add Current Status</button>
            </form>
          </div>

          <div className="box">
            <h2>Branch Service Price</h2>
            <form className="addServicePrice" onSubmit={handleServicePrice}>
              <label>Company branch</label>
              <select id="chooseCompanyBranch" required>
                {compBranches &&
                  compBranches.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.verbose_name}
                    </option>
                  ))}
              </select>

              <label>Service Price</label>
              <input
                type="text"
                placeholder="Service Price"
                id="servicePrice"
                required
              />

              <div className="infoMsg">
                <h2> Service Price already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addServicePrice .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button>Add Service Price</button>
            </form>
          </div>

          <div className="box">
            <h2>Branch Work Time</h2>
            <form className="addWorkTime" onSubmit={handleWorkTime}>
              <label>Company branch</label>
              <select id="chooseCompanyBranch" required>
                {compBranches &&
                  compBranches.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.verbose_name}
                    </option>
                  ))}
              </select>

              <label>Open at</label>
              <input type="time" id="openAt" required />

              <label>Close at</label>
              <input type="time" id="closeAt" required />

              <div className="infoMsg">
                <h2> Work Time already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addWorkTime .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button>Add Work Time</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateBranch;
