import React, { useEffect, useState } from "react";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";
import "../css/AllCompanies.css";

function AllCompanies() {
  const [companies, setCompanies] = useState();
  const [types, setTypes] = useState();
  const [companyPhone, setCompanyPhone] = useState();
  const [phone, setPhone] = useState();
  const [companyAddress, setCompanyAddress] = useState();
  const [address, setAddress] = useState();
  const [companyLocation, setCompanyLocation] = useState();
  const [location, setLocation] = useState();

  const editCompany = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company/${e.target.name.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          verbose_name: e.target.verbose.value,
          companytype: e.target.type.value,
          manager: e.target.manager.value,
        }),
      }
    );
    window.location.reload();
  };

  const delCompany = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/company/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editCompanyPhone = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-phone/${e.target.id.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: e.target.company.value,
          phone: e.target.phone.value,
        }),
      }
    );
    window.location.reload();
  };

  const delCompanyPhone = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-phone/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editCompanyAddress = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-address/${e.target.id.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: e.target.company.value,
          address: e.target.address.value,
        }),
      }
    );
    window.location.reload();
  };

  const delCompanyAddress = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-address/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editCompanyLocation = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-location/${e.target.id.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: e.target.company.value,
          location: e.target.location.value,
        }),
      }
    );
    window.location.reload();
  };

  const delCompanyLocation = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-location/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const getCompanyData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-full-data/"
    ).then((res) => res.json());
    setCompanies(res);
  };

  const getCompanyTypeData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-type/"
    ).then((res) => res.json());
    setTypes(res);
  };

  const getCompanyPhoneData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-phone/"
    ).then((res) => res.json());
    setCompanyPhone(res);
  };

  const getPhoneData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/phone/"
    ).then((res) => res.json());
    setPhone(res);
  };

  const getCompanyAddressData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-address/"
    ).then((res) => res.json());
    setCompanyAddress(res);
  };

  const getAddressData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/address/"
    ).then((res) => res.json());
    setAddress(res);
  };

  const getCompanyLocationData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-location/"
    ).then((res) => res.json());
    setCompanyLocation(res);
  };

  const getLocationData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/location/"
    ).then((res) => res.json());
    setLocation(res);
  };

  useEffect(() => {
    getCompanyData();
    getCompanyTypeData();
    getCompanyPhoneData();
    getPhoneData();
    getCompanyAddressData();
    getAddressData();
    getCompanyLocationData();
    getLocationData();
  }, []);

  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="all-companies">
        <h1>All Companies</h1>
        <div className="wrapper">
          <div className="box">
            <h2
              onClick={() => {
                document.querySelector(".box-one").classList.toggle("open");
              }}
            >
              Company<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-one">
              {companies &&
                companies.map((company) => (
                  <form key={company.id} onSubmit={editCompany}>
                    <label>Company name</label>
                    <input
                      defaultValue={company.name}
                      id="name"
                      data-id={company.id}
                    />

                    <label>Company verbose name</label>
                    <input defaultValue={company.verbose_name} id="verbose" />

                    <label>Company type</label>
                    <select id="type" defaultValue={company.companytype.id}>
                      {types &&
                        types.map((type) => (
                          <option key={type.id} value={type.id}>
                            {" "}
                            {type.type}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Manager id</label>
                    <input defaultValue={company.manager.id} id="manager" />

                    <label>Manager name</label>
                    <input defaultValue={company.manager.email} disabled />

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={company.id}
                        onClick={delCompany}
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
                document.querySelector(".box-two").classList.toggle("open");
              }}
            >
              Company Phone <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-two">
              {companyPhone &&
                companyPhone.map((companyPhone) => (
                  <form key={companyPhone.id} onSubmit={editCompanyPhone}>
                    <label>Company Phone id</label>
                    <input
                      type="text"
                      defaultValue={companyPhone.id}
                      id="id"
                      data-id={companyPhone.id}
                      disabled
                    />

                    <label>Company</label>
                    <select id="company" defaultValue={companyPhone.company}>
                      {companies &&
                        companies.map((companies) => (
                          <option key={companies.id} value={companies.id}>
                            {" "}
                            {companies.name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Phone</label>
                    <select id="phone" defaultValue={companyPhone.phone}>
                      {phone &&
                        phone.map((phone) => (
                          <option key={phone.id} value={phone.id}>
                            {" "}
                            {phone.phone}{" "}
                          </option>
                        ))}
                    </select>

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={companyPhone.id}
                        onClick={delCompanyPhone}
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
                document.querySelector(".box-three").classList.toggle("open");
              }}
            >
              Company Address <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-three">
              {companyAddress &&
                companyAddress.map((companyAddress) => (
                  <form key={companyAddress.id} onSubmit={editCompanyAddress}>
                    <label>Company Address id</label>
                    <input
                      type="text"
                      defaultValue={companyAddress.id}
                      id="id"
                      data-id={companyAddress.id}
                      disabled
                    />

                    <label>Company</label>
                    <select id="company" defaultValue={companyAddress.company}>
                      {companies &&
                        companies.map((companies) => (
                          <option key={companies.id} value={companies.id}>
                            {" "}
                            {companies.name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Address</label>
                    <select id="address" defaultValue={companyAddress.address}>
                      {address &&
                        address.map((address) => (
                          <option key={address.id} value={address.id}>
                            {" "}
                            {address.id}{" "}
                          </option>
                        ))}
                    </select>

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={companyAddress.id}
                        onClick={delCompanyAddress}
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
                document.querySelector(".box-four").classList.toggle("open");
              }}
            >
              Company Location <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-four">
              {companyLocation &&
                companyLocation.map((companyLocation) => (
                  <form key={companyLocation.id} onSubmit={editCompanyLocation}>
                    <label>Company Location id</label>
                    <input
                      type="text"
                      defaultValue={companyLocation.id}
                      id="id"
                      data-id={companyLocation.id}
                      disabled
                    />

                    <label>Company</label>
                    <select id="company" defaultValue={companyLocation.company}>
                      {companies &&
                        companies.map((companies) => (
                          <option key={companies.id} value={companies.id}>
                            {" "}
                            {companies.name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Location</label>
                    <select
                      id="location"
                      defaultValue={companyLocation.location}
                    >
                      {location &&
                        location.map((location) => (
                          <option key={location.id} value={location.id}>
                            {" "}
                            {location.id}{" "}
                          </option>
                        ))}
                    </select>

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={companyLocation.id}
                        onClick={delCompanyLocation}
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

export default AllCompanies;
