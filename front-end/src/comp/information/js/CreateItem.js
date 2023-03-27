import React, { useEffect, useState } from "react";
import Footer from "../../global/js/Footer";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import "../css/CreateItem.css";

function CreateItem() {
  const [langs, setLang] = useState();
  const [countries, setCountry] = useState();
  const [cities, setCity] = useState();

  const handleLang = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/language/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language: e.target.addLang.value }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.language[0];
        if (error === "language with this language already exists.") {
          document.querySelector(".addLang .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
        }
      });
    e.target.addLang.value = "";
  };

  const handleCompanyType = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/company-type/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: e.target.addCompanyType.value,
        language: e.target.chooseLang.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.type[0];
        if (error === "company type with this type already exists.") {
          document.querySelector(".addCompanyType .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
        }
      });
    e.target.addCompanyType.value = "";
  };

  const handleCountry = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/country/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        country: e.target.addCountry.value,
        language: e.target.chooseLang.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.country[0];
        if (error === "country with this country already exists.") {
          document.querySelector(".addCountry .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
        }
      });
    e.target.addCountry.value = "";
  };

  const handleCity = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/city/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city: e.target.addCity.value,
        country: e.target.chooseCountry.value,
        language: e.target.chooseLang.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.city[0];
        if (error === "city with this city already exists.") {
          document.querySelector(".addCity .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
        }
      });
    e.target.addCity.value = "";
  };

  const handleCityDistrict = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_HOSTNAME + "/api/city-district/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        district: e.target.addCityDistrict.value,
        city: e.target.chooseCity.value,
        country: e.target.chooseCountry.value,
        language: e.target.chooseLang.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let error = data.district[0];
        if (error === "city district with this district already exists.") {
          document.querySelector(".addCityDistrict .infoMsg").style.cssText =
            "display: flex;";
        } else {
          window.location.reload();
        }
      });
    e.target.addCityDistrict.value = "";
  };

  const getLangData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/language/"
    ).then((res) => res.json());
    setLang(res);
  };

  const getCountryData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/country/"
    ).then((res) => res.json());
    setCountry(res);
  };

  const getCityData = async () => {
    const res = await fetch(process.env.REACT_APP_HOSTNAME + "/api/city/").then(
      (res) => res.json()
    );
    setCity(res);
  };

  useEffect(() => {
    getLangData();
    getCountryData();
    getCityData();
  }, []);

  return (
    <>
      <NavLog />
      <Sidebar />
      <div className="CreateItem">
        <h1> Create Items </h1>

        <div className="wrapper">
          <div className="box">
            <h2>Language</h2>
            <form onSubmit={handleLang} className="addLang">
              <input
                type="text"
                placeholder="example=[en]"
                id="addLang"
                required
              />
              <div className="infoMsg">
                <h2> Language already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(".addLang .infoMsg").style.cssText =
                      "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add Language </button>
            </form>
          </div>

          <div className="box">
            <h2>Company Type</h2>
            <form onSubmit={handleCompanyType} className="addCompanyType">
              <input
                type="text"
                placeholder="Company Type"
                id="addCompanyType"
                required
              />
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
                <h2> Company Type already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addCompanyType .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add Company Type </button>
            </form>
          </div>

          <div className="box">
            <h2>Country</h2>
            <form onSubmit={handleCountry} className="addCountry">
              <input
                type="text"
                placeholder="Country name"
                id="addCountry"
                required
              />
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
                <h2> Country already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addCountry .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add Country </button>
            </form>
          </div>

          <div className="box">
            <h2>City</h2>
            <form onSubmit={handleCity} className="addCity">
              <input
                type="text"
                placeholder="City name"
                id="addCity"
                required
              />
              <label>Choose Country</label>
              <select id="chooseCountry" required>
                {countries &&
                  countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.country}
                    </option>
                  ))}
              </select>
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
                <h2> City already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(".addCity .infoMsg").style.cssText =
                      "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add Country </button>
            </form>
          </div>

          <div className="box">
            <h2>City District</h2>
            <form onSubmit={handleCityDistrict} className="addCityDistrict">
              <input
                type="text"
                placeholder="City District name"
                id="addCityDistrict"
                required
              />
              <label>Choose Country</label>
              <select id="chooseCountry" required>
                {countries &&
                  countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.country}
                    </option>
                  ))}
              </select>
              <label>Choose City</label>
              <select id="chooseCity" required>
                {cities &&
                  cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.city}
                    </option>
                  ))}
              </select>
              <label>Choose Language</label>
              <select id="chooseLang" required>
                {langs &&
                  langs.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.language}
                    </option>
                  ))}
              </select>
              <div className="infoMsg" required>
                <h2> District already Added </h2>
                <div
                  onClick={() => {
                    document.querySelector(
                      ".addCityDistrict .infoMsg"
                    ).style.cssText = "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button type="submit"> Add Country </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateItem;
