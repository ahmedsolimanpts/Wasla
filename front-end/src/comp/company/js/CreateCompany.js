import React, { useEffect, useState } from "react";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";
import "../css/CreateCompany.css";

function CreateCompany() {
  const [types, setTypes] = useState();
  const [companies, setCompanies] = useState();
  const [locations, setLocations] = useState();
  const [phones, setPhones] = useState();
  const [address, setAddress] = useState();

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
          getCompanyData();
          getTypeData();
          e.target.name.value = "";
          e.target.verbose.value = "";
          e.target.manager.value = "";
        }
      });
  };

  const handlePhone = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/company-phone/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: e.target.chooseCompany.value,
        phone: e.target.choosePhone.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.non_field_errors[0];
        if (error === "The fields phone, company must make a unique set.") {
          document.querySelector(".addPhone .infoMsg").style.cssText =
            "display: flex;";
        } else {
          getCompanyData();
          getPhoneData();
        }
      });
  };

  const handleAddress = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/company-address/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: e.target.chooseCompany.value,
        address: e.target.chooseAddress.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.company[0];
        if (error === "company address with this company already exists.") {
          document.querySelector(".addAddress .infoMsg").style.cssText =
            "display: flex;";
        } else {
          getCompanyData();
          getAddressData();
        }
      });
  };

  const handleLocation = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/company-location/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: e.target.chooseCompany.value,
        location: e.target.chooseLocation.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.company[0];
        if (error === "company location with this company already exists.") {
          document.querySelector(".addLocation .infoMsg").style.cssText =
            "display: flex;";
        } else {
          getCompanyData();
          getLocationData();
        }
      });
  };

  const getTypeData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-type/"
    ).then((res) => res.json());
    setTypes(res);
  };

  const getCompanyData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company/"
    ).then((res) => res.json());
    setCompanies(res);
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

  const getLocationData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/location/"
    ).then((res) => res.json());
    setLocations(res);
  };

  useEffect(() => {
    getTypeData();
    getCompanyData();
    getPhoneData();
    getAddressData();
    getLocationData();
  }, []);

  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="createCompany">
        <h1> Create Company </h1>
        <div className="wrapper">
          <div className="box">
            <h2>Company</h2>
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
                {types &&
                  types.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.type}
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

          <div className="box">
            <h2>Company Phone</h2>
            <form className="addPhone" onSubmit={handlePhone}>
              <label>Company</label>
              <select id="chooseCompany" required>
                {companies &&
                  companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
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
                <h2> Company Phone already Added </h2>
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
              <button>Add Phone</button>
            </form>
          </div>

          <div className="box">
            <h2>Company Address</h2>
            <form className="addAddress" onSubmit={handleAddress}>
              <label>Company</label>
              <select id="chooseCompany" required>
                {companies &&
                  companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
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
                <h2> Company Address already Added </h2>
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
              <button>Add Address</button>
            </form>
          </div>

          <div className="box">
            <h2>Company Location</h2>
            <form className="addLocation" onSubmit={handleLocation}>
              <label>Company</label>
              <select id="chooseCompany" required>
                {companies &&
                  companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
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
                <h2> Company Location already Added </h2>
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
              <button>Add Location</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateCompany;
