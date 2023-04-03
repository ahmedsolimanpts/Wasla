import React, { useState } from "react";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";
import "../css/AllBranches.css";

function AllBranches() {
  const [branches, setBranches] = useState();
  const [companyBranch, setCompanyBranch] = useState();
  const [company, setCompany] = useState();
  const [branchPhone, setBranchPhone] = useState();
  const [phone, setPhone] = useState();
  const [branchAddress, setBranchAddress] = useState();
  const [address, setAddress] = useState();
  const [branchLocation, setBranchLocation] = useState();
  const [location, setLocation] = useState();
  const [branchStatus, setBranchStatus] = useState();
  const [lang, setLang] = useState();
  const [branchCurrentStatus, setBranchCurrentStatus] = useState();
  const [branchServicePrice, setBranchServicePrice] = useState();
  const [branchWorkTime, setBranchWorkTime] = useState();

  const editBranch = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch/${e.target.name.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          verbose_name: e.target.verbose.value,
          manager: e.target.manager.value,
        }),
      }
    );
  };

  const delBranch = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/branch/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.status === 204) {
        getBranchData();
      }
    });
  };

  const editCompanyBranch = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-branch/${e.target.verbose.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          verbose_name: e.target.verbose.value,
          company: e.target.company.value,
          branch: e.target.branch.value,
        }),
      }
    );
  };

  const delCompanyBranch = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-branch/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.status === 204) {
        getCompanyBranchData();
        getBranchData();
        getCompanyData();
      }
    });
  };

  const editBranchPhone = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-phone/${e.target.id.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          branch: e.target.branch.value,
          phone: e.target.phone.value,
        }),
      }
    );
  };

  const delBranchPhone = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-phone/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.status === 204) {
        getBranchPhoneData();
        getBranchData();
        getPhoneData();
      }
    });
  };

  const editBranchAddress = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-address/${e.target.id.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          branch: e.target.branch.value,
          address: e.target.address.value,
        }),
      }
    );
  };

  const delBranchAddress = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-address/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.status === 204) {
        getBranchAddressData();
        getBranchData();
        getAddressData();
      }
    });
  };

  const editBranchLocation = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-location/${e.target.id.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_branch: e.target.companyBranch.value,
          location: e.target.location.value,
        }),
      }
    );
  };

  const delBranchLocation = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-location/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.status === 204) {
        getBranchLocationData();
        getCompanyBranchData();
        getLocationData();
      }
    });
  };

  const editBranchStatus = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-status/${e.target.status.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: e.target.status.value,
          language: e.target.lang.value,
        }),
      }
    );
  };

  const delBranchStatus = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-status/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.status === 204) {
        getBranchStatusData();
        getLangData();
      }
    });
  };

  const editBranchCurrentStatus = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-current-status/${e.target.id.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_branch: e.target.companyBranch.value,
          status: e.target.status.value,
        }),
      }
    );
  };

  const delBranchCurrentStatus = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-current-status/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.status === 204) {
        getBranchCurrentStatusData();
        getBranchStatusData();
        getCompanyBranchData();
      }
    });
  };

  const editBranchServicePrice = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-service-price/${e.target.servicePrice.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_branch: e.target.companyBranch.value,
          service_price: e.target.servicePrice.value,
        }),
      }
    );
  };

  const delBranchServicePrice = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-service-price/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.status === 204) {
        getBranchServicePriceData();
        getCompanyBranchData();
      }
    });
  };

  const editBranchWorkTime = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-work-time/${e.target.openAt.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_branch: e.target.companyBranch.value,
          open_at: e.target.openAt.value,
          close_at: e.target.closeAt.value,
        }),
      }
    );
  };

  const delBranchWorkTime = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/branch-work-time/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.status === 204) {
        getBranchWorkTimeData();
        getCompanyBranchData();
      }
    });
  };

  const getBranchData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/branch-full-data/"
    ).then((res) => res.json());
    setBranches(res);
  };

  const getCompanyBranchData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-branch/"
    ).then((res) => res.json());
    setCompanyBranch(res);
  };

  const getCompanyData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company/"
    ).then((res) => res.json());
    setCompany(res);
  };

  const getBranchPhoneData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/branch-phone/"
    ).then((res) => res.json());
    setBranchPhone(res);
  };

  const getPhoneData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/phone/"
    ).then((res) => res.json());
    setPhone(res);
  };

  const getBranchAddressData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/branch-address/"
    ).then((res) => res.json());
    setBranchAddress(res);
  };

  const getAddressData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/address/"
    ).then((res) => res.json());
    setAddress(res);
  };

  const getBranchLocationData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/branch-location/"
    ).then((res) => res.json());
    setBranchLocation(res);
  };

  const getLocationData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/location/"
    ).then((res) => res.json());
    setLocation(res);
  };

  const getBranchStatusData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/branch-status/"
    ).then((res) => res.json());
    setBranchStatus(res);
  };

  const getLangData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/language/"
    ).then((res) => res.json());
    setLang(res);
  };

  const getBranchCurrentStatusData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/branch-current-status/"
    ).then((res) => res.json());
    setBranchCurrentStatus(res);
  };

  const getBranchServicePriceData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/branch-service-price/"
    ).then((res) => res.json());
    setBranchServicePrice(res);
  };

  const getBranchWorkTimeData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/branch-work-time/"
    ).then((res) => res.json());
    setBranchWorkTime(res);
  };

  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="all-branches">
        <h1>All Branches</h1>
        <div className="wrapper">
          <div className="box">
            <h2
              onClick={() => {
                document.querySelector(".box-one").classList.toggle("open");
                getBranchData();
              }}
            >
              Branch<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-one">
              {branches &&
                branches.map((branch) => (
                  <form key={branch.id} onSubmit={editBranch}>
                    <label>Branch name</label>
                    <input
                      defaultValue={branch.name}
                      id="name"
                      data-id={branch.id}
                    />

                    <label>Branch verbose name</label>
                    <input defaultValue={branch.verbose_name} id="verbose" />

                    <label>Manager id</label>
                    <input defaultValue={branch.manager.id} id="manager" />

                    <label>Manager name</label>
                    <input defaultValue={branch.manager.email} disabled />

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={branch.id}
                        onClick={delBranch}
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
                getCompanyBranchData();
                getBranchData();
                getCompanyData();
              }}
            >
              Company Branch <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-two">
              {companyBranch &&
                companyBranch.map((companyBranch) => (
                  <form key={companyBranch.id} onSubmit={editCompanyBranch}>
                    <label>Company Branch verbose name</label>
                    <input
                      defaultValue={companyBranch.verbose_name}
                      id="verbose"
                      data-id={companyBranch.id}
                    />

                    <label>Company</label>
                    <select id="company" defaultValue={companyBranch.company}>
                      {company &&
                        company.map((company) => (
                          <option key={company.id} value={company.id}>
                            {" "}
                            {company.name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Branch</label>
                    <select id="branch" defaultValue={companyBranch.branch}>
                      {branches &&
                        branches.map((branches) => (
                          <option key={branches.id} value={branches.id}>
                            {" "}
                            {branches.name}{" "}
                          </option>
                        ))}
                    </select>

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={companyBranch.id}
                        onClick={delCompanyBranch}
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
                getBranchPhoneData();
                getBranchData();
                getPhoneData();
              }}
            >
              Branch Phone <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-three">
              {branchPhone &&
                branchPhone.map((branchPhone) => (
                  <form key={branchPhone.id} onSubmit={editBranchPhone}>
                    <label>Branch Phone Id</label>
                    <input
                      defaultValue={branchPhone.id}
                      id="id"
                      data-id={branchPhone.id}
                      disabled
                    />

                    <label>Branch</label>
                    <select id="branch" defaultValue={branchPhone.branch}>
                      {branches &&
                        branches.map((branches) => (
                          <option key={branches.id} value={branches.id}>
                            {" "}
                            {branches.name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Phone</label>
                    <select id="phone" defaultValue={branchPhone.phone}>
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
                        data-id={branchPhone.id}
                        onClick={delBranchPhone}
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
                getBranchAddressData();
                getBranchData();
                getAddressData();
              }}
            >
              Branch Address <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-four">
              {branchAddress &&
                branchAddress.map((branchAddress) => (
                  <form key={branchAddress.id} onSubmit={editBranchAddress}>
                    <label>Branch Address Id</label>
                    <input
                      defaultValue={branchAddress.id}
                      id="id"
                      data-id={branchAddress.id}
                      disabled
                    />

                    <label>Branch</label>
                    <select id="branch" defaultValue={branchAddress.branch}>
                      {branches &&
                        branches.map((branches) => (
                          <option key={branches.id} value={branches.id}>
                            {" "}
                            {branches.name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Address Id</label>
                    <select id="address" defaultValue={branchAddress.address}>
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
                        data-id={branchAddress.id}
                        onClick={delBranchAddress}
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
                document.querySelector(".box-five").classList.toggle("open");
                getBranchLocationData();
                getCompanyBranchData();
                getLocationData();
              }}
            >
              Branch Location <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-five">
              {branchLocation &&
                branchLocation.map((branchLocation) => (
                  <form key={branchLocation.id} onSubmit={editBranchLocation}>
                    <label>Branch Location Id</label>
                    <input
                      defaultValue={branchLocation.id}
                      id="id"
                      data-id={branchLocation.id}
                      disabled
                    />

                    <label>Company Branch</label>
                    <select
                      id="companyBranch"
                      defaultValue={branchLocation.company_branch}
                    >
                      {companyBranch &&
                        companyBranch.map((companyBranch) => (
                          <option
                            key={companyBranch.id}
                            value={companyBranch.id}
                          >
                            {" "}
                            {companyBranch.verbose_name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Location Id</label>
                    <select
                      id="location"
                      defaultValue={branchLocation.location}
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
                        data-id={branchLocation.id}
                        onClick={delBranchLocation}
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
                document.querySelector(".box-six").classList.toggle("open");
                getBranchStatusData();
                getLangData();
              }}
            >
              Branch Status <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-six">
              {branchStatus &&
                branchStatus.map((branchStatus) => (
                  <form key={branchStatus.id} onSubmit={editBranchStatus}>
                    <label>Status</label>
                    <input
                      defaultValue={branchStatus.status}
                      id="status"
                      data-id={branchStatus.id}
                    />

                    <label>Language</label>
                    <select id="lang" defaultValue={branchStatus.language}>
                      {lang &&
                        lang.map((lang) => (
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
                        data-id={branchStatus.id}
                        onClick={delBranchStatus}
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
                document.querySelector(".box-seven").classList.toggle("open");
                getBranchCurrentStatusData();
                getBranchStatusData();
                getCompanyBranchData();
              }}
            >
              Branch Current Status{" "}
              <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-seven">
              {branchCurrentStatus &&
                branchCurrentStatus.map((branchCurrentStatus) => (
                  <form
                    key={branchCurrentStatus.id}
                    onSubmit={editBranchCurrentStatus}
                  >
                    <label>Current Status Id</label>
                    <input
                      defaultValue={branchCurrentStatus.id}
                      id="id"
                      data-id={branchCurrentStatus.id}
                      disabled
                    />

                    <label>Company Branch</label>
                    <select
                      id="companyBranch"
                      defaultValue={branchCurrentStatus.company_branch}
                    >
                      {companyBranch &&
                        companyBranch.map((companyBranch) => (
                          <option
                            key={companyBranch.id}
                            value={companyBranch.id}
                          >
                            {" "}
                            {companyBranch.verbose_name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Status</label>
                    <select
                      id="status"
                      defaultValue={branchCurrentStatus.status}
                    >
                      {branchStatus &&
                        branchStatus.map((branchStatus) => (
                          <option key={branchStatus.id} value={branchStatus.id}>
                            {" "}
                            {branchStatus.status}{" "}
                          </option>
                        ))}
                    </select>

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={branchCurrentStatus.id}
                        onClick={delBranchCurrentStatus}
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
                document.querySelector(".box-eight").classList.toggle("open");
                getBranchServicePriceData();
                getCompanyBranchData();
              }}
            >
              Branch Service Price <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-eight">
              {branchServicePrice &&
                branchServicePrice.map((branchServicePrice) => (
                  <form
                    key={branchServicePrice.id}
                    onSubmit={editBranchServicePrice}
                  >
                    <label>Company Branch</label>
                    <select
                      id="companyBranch"
                      defaultValue={branchServicePrice.company_branch}
                    >
                      {companyBranch &&
                        companyBranch.map((companyBranch) => (
                          <option
                            key={companyBranch.id}
                            value={companyBranch.id}
                          >
                            {" "}
                            {companyBranch.verbose_name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Service Price</label>
                    <input
                      defaultValue={branchServicePrice.service_price}
                      id="servicePrice"
                      data-id={branchServicePrice.id}
                    />

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={branchServicePrice.id}
                        onClick={delBranchServicePrice}
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
                document.querySelector(".box-nine").classList.toggle("open");
                getBranchWorkTimeData();
                getCompanyBranchData();
              }}
            >
              Branch Work Time <i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-nine">
              {branchWorkTime &&
                branchWorkTime.map((branchWorkTime) => (
                  <form key={branchWorkTime.id} onSubmit={editBranchWorkTime}>
                    <label>Company Branch</label>
                    <select
                      id="companyBranch"
                      defaultValue={branchWorkTime.company_branch}
                    >
                      {companyBranch &&
                        companyBranch.map((companyBranch) => (
                          <option
                            key={companyBranch.id}
                            value={companyBranch.id}
                          >
                            {" "}
                            {companyBranch.verbose_name}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Open At</label>
                    <input
                      type="time"
                      defaultValue={branchWorkTime.open_at}
                      id="openAt"
                      data-id={branchWorkTime.id}
                    />

                    <label>Close At</label>
                    <input
                      type="time"
                      defaultValue={branchWorkTime.close_at}
                      id="closeAt"
                    />

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={branchWorkTime.id}
                        onClick={delBranchWorkTime}
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

export default AllBranches;
