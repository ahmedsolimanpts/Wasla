import React, { useEffect, useState } from "react";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";
import "../css/AllCompanies.css";

function AllCompanies() {
  const [companies, setCompanies] = useState();

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
          companytype: e.target.type.dataset.value,
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

  const getCompanyData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-full-data/"
    ).then((res) => res.json());
    setCompanies(res);
  };

  useEffect(() => {
    getCompanyData();
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
                    <input
                      defaultValue={company.companytype.type}
                      id="type"
                      data-value={company.companytype.id}
                    />

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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllCompanies;
