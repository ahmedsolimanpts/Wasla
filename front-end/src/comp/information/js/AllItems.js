import React, { useEffect, useState } from "react";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Footer from "../../global/js/Footer";
import "../css/AllItems.css";

function AllItems() {
  const [langs, setLang] = useState();
  const [companyType, setCompanyType] = useState();
  const [countries, setCountry] = useState();
  const [cities, setCity] = useState();
  const [cityDistrict, setCityDistrict] = useState();

  const editLang = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/language/${e.target.lang.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: e.target.lang.value }),
      }
    );
    window.location.reload();
  };

  const delLang = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/language/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editCompanyType = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-type/${e.target.companyType.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: e.target.companyType.value,
          language: e.target.lang.dataset.value,
        }),
      }
    );
    window.location.reload();
  };

  const delCompanyType = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/company-type/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editCountry = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/country/${e.target.country.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          country: e.target.country.value,
          language: e.target.lang.dataset.value,
        }),
      }
    );
    window.location.reload();
  };

  const delCountry = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/country/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editCity = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/city/${e.target.city.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: e.target.city.value,
          country: e.target.country.dataset.value,
          language: e.target.lang.dataset.value,
        }),
      }
    );
    window.location.reload();
  };

  const delCity = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/city/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editCityDistrict = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/city-district/${e.target.district.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          district: e.target.district.value,
          city: e.target.city.dataset.value,
          language: e.target.lang.dataset.value,
        }),
      }
    );
    window.location.reload();
  };

  const delCityDistrict = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/city-district/${e.target.dataset.id}/`,
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

  const getCompanyTypeData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/company-type-full-data/"
    ).then((res) => res.json());
    setCompanyType(res);
  };

  const getCountryData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/country-full-detail/"
    ).then((res) => res.json());
    setCountry(res);
  };

  const getCityData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/city-full-detail/"
    ).then((res) => res.json());
    setCity(res);
  };

  const getCityDistrictData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/city-district-full-detail/"
    ).then((res) => res.json());
    setCityDistrict(res);
  };

  useEffect(() => {
    getLangData();
    getCompanyTypeData();
    getCountryData();
    getCityData();
    getCityDistrictData();
  }, []);

  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="all-items">
        <h1> All Items </h1>
        <div className="wrapper">
          <div className="box">
            <h2
              onClick={() => {
                document
                  .querySelector(".all-items .box-one")
                  .classList.toggle("open");
              }}
            >
              Language<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-one">
              {langs &&
                langs.map((lang) => (
                  <form key={lang.id} onSubmit={editLang}>
                    <label>Language</label>
                    <input
                      defaultValue={lang.language}
                      id="lang"
                      data-id={lang.id}
                    />
                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={lang.id}
                        onClick={delLang}
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
                  .querySelector(".all-items .box-two")
                  .classList.toggle("open");
              }}
            >
              Company Type<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-two">
              {companyType &&
                companyType.map((comType) => (
                  <form key={comType.id} onSubmit={editCompanyType}>
                    <label>Company type</label>
                    <input
                      defaultValue={comType.type}
                      id="companyType"
                      data-id={comType.id}
                    />
                    <label>Language</label>
                    <input
                      defaultValue={comType.language.language}
                      id="lang"
                      data-value={comType.language.id}
                    />
                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={comType.id}
                        onClick={delCompanyType}
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
                  .querySelector(".all-items .box-three")
                  .classList.toggle("open");
              }}
            >
              Country<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-three">
              {countries &&
                countries.map((country) => (
                  <form key={country.id} onSubmit={editCountry}>
                    <label>Country</label>
                    <input
                      defaultValue={country.country}
                      id="country"
                      data-id={country.id}
                    />
                    <label>Language</label>
                    <input
                      defaultValue={country.language.language}
                      id="lang"
                      data-value={country.language.id}
                    />
                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={country.id}
                        onClick={delCountry}
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
                  .querySelector(".all-items .box-four")
                  .classList.toggle("open");
              }}
            >
              City<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-four">
              {cities &&
                cities.map((city) => (
                  <form key={city.id} onSubmit={editCity}>
                    <label>City</label>
                    <input
                      defaultValue={city.city}
                      id="city"
                      data-id={city.id}
                    />
                    <label>Country</label>
                    <input
                      defaultValue={city.country.country}
                      id="country"
                      data-value={city.country.id}
                    />
                    <label>Language</label>
                    <input
                      defaultValue={city.language.language}
                      id="lang"
                      data-value={city.language.id}
                    />
                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={city.id}
                        onClick={delCity}
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
                  .querySelector(".all-items .box-five")
                  .classList.toggle("open");
              }}
            >
              City District<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-five">
              {cityDistrict &&
                cityDistrict.map((district) => (
                  <form key={district.id} onSubmit={editCityDistrict}>
                    <label>City District</label>
                    <input
                      defaultValue={district.district}
                      id="district"
                      data-id={district.id}
                    />
                    <label>City</label>
                    <input
                      defaultValue={district.city.city}
                      id="city"
                      data-value={district.city.id}
                    />
                    <label>Language</label>
                    <input
                      defaultValue={district.language.language}
                      id="lang"
                      data-value={district.language.id}
                    />
                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={district.id}
                        onClick={delCityDistrict}
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

export default AllItems;
