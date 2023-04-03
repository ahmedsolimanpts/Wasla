import React, { useState } from "react";
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
  const [currencies, setCurrencies] = useState();
  const [phones, setPhones] = useState();
  const [locations, setLocation] = useState();
  const [address, setAddress] = useState();

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
          language: e.target.lang.value,
        }),
      }
    );
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
          language: e.target.lang.value,
        }),
      }
    );
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
          country: e.target.country.value,
          language: e.target.lang.value,
        }),
      }
    );
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
          city: e.target.city.value,
          language: e.target.lang.value,
        }),
      }
    );
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

  const editCurrency = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/currency/${e.target.currency.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currency: e.target.currency.value,
          language: e.target.lang.value,
        }),
      }
    );
  };

  const delCurrency = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/currency/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editPhone = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/phone/${e.target.phone.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: e.target.phone.value,
        }),
      }
    );
  };

  const delPhone = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/phone/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editLocation = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/location/${e.target.longitude.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          longitude: e.target.longitude.value,
          latitude: e.target.latitude.value,
        }),
      }
    );
  };

  const delLocation = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/location/${e.target.dataset.id}/`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };

  const editAddress = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_HOSTNAME +
        `/api/address/${e.target.street.dataset.id}/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          district: e.target.district.value,
          street: e.target.street.value,
          building_number: e.target.building.value,
          description: e.target.description.value,
        }),
      }
    );
  };

  const delAddress = (e) => {
    fetch(
      process.env.REACT_APP_HOSTNAME + `/api/address/${e.target.dataset.id}/`,
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
      process.env.REACT_APP_HOSTNAME + "/api/company-type/"
    ).then((res) => res.json());
    setCompanyType(res);
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

  const getCityDistrictData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/city-district/"
    ).then((res) => res.json());
    setCityDistrict(res);
  };

  const getCurrencyData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/currency/"
    ).then((res) => res.json());
    setCurrencies(res);
  };

  const getPhonesData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/phone/"
    ).then((res) => res.json());
    setPhones(res);
  };

  const getLocationData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/location/"
    ).then((res) => res.json());
    setLocation(res);
  };

  const getAddressData = async () => {
    const res = await fetch(
      process.env.REACT_APP_HOSTNAME + "/api/address/"
    ).then((res) => res.json());
    setAddress(res);
  };

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
                getLangData();
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
                getLangData();
                getCompanyTypeData();
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
                    <select id="lang" defaultValue={comType.language}>
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
                getLangData();
                getCountryData();
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
                    <select id="lang" defaultValue={country.language}>
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
                getLangData();
                getCountryData();
                getCityData();
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
                    <select id="country" defaultValue={city.country}>
                      {countries &&
                        countries.map((country) => (
                          <option key={country.id} value={country.id}>
                            {" "}
                            {country.country}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Language</label>
                    <select id="lang" defaultValue={city.language}>
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
                getLangData();
                getCityData();
                getCityDistrictData();
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
                    <select id="city" defaultValue={district.city}>
                      {cities &&
                        cities.map((city) => (
                          <option key={city.id} value={city.id}>
                            {" "}
                            {city.city}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Language</label>
                    <select id="lang" defaultValue={district.language}>
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

          <div className="box">
            <h2
              onClick={() => {
                document
                  .querySelector(".all-items .box-six")
                  .classList.toggle("open");
                getLangData();
                getCurrencyData();
              }}
            >
              Currency<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-six">
              {currencies &&
                currencies.map((currency) => (
                  <form key={currency.id} onSubmit={editCurrency}>
                    <label>Currency</label>
                    <input
                      defaultValue={currency.currency}
                      id="currency"
                      data-id={currency.id}
                    />

                    <label>Language</label>
                    <select id="lang" defaultValue={currency.language}>
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
                        data-id={currency.id}
                        onClick={delCurrency}
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
                  .querySelector(".all-items .box-seven")
                  .classList.toggle("open");
                getPhonesData();
              }}
            >
              Phone<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-seven">
              {phones &&
                phones.map((phone) => (
                  <form key={phone.id} onSubmit={editPhone}>
                    <label>Phone</label>
                    <input
                      defaultValue={phone.phone}
                      id="phone"
                      data-id={phone.id}
                    />

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={phone.id}
                        onClick={delPhone}
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
                  .querySelector(".all-items .box-eight")
                  .classList.toggle("open");
                getLocationData();
              }}
            >
              Location<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-eight">
              {locations &&
                locations.map((location) => (
                  <form key={location.id} onSubmit={editLocation}>
                    <label>Longitude</label>
                    <input
                      defaultValue={location.longitude}
                      id="longitude"
                      data-id={location.id}
                    />

                    <label>Latitude</label>
                    <input defaultValue={location.latitude} id="latitude" />

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={location.id}
                        onClick={delLocation}
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
                  .querySelector(".all-items .box-nine")
                  .classList.toggle("open");
                getCityDistrictData();
                getAddressData();
              }}
            >
              Address<i className="fa-regular fa-circle-down"></i>
            </h2>
            <div className="forms-box box-nine">
              {address &&
                address.map((address) => (
                  <form key={address.id} onSubmit={editAddress}>
                    <label>District</label>
                    <select id="district" defaultValue={address.district}>
                      {cityDistrict &&
                        cityDistrict.map((district) => (
                          <option key={district.id} value={district.id}>
                            {" "}
                            {district.district}{" "}
                          </option>
                        ))}
                    </select>

                    <label>Street</label>
                    <input
                      defaultValue={address.street}
                      id="street"
                      data-id={address.id}
                    />

                    <label>Building Number</label>
                    <input
                      defaultValue={address.building_number}
                      id="building"
                    />

                    <label>Description</label>
                    <textarea
                      defaultValue={address.description}
                      id="description"
                    ></textarea>

                    <div className="event-box">
                      <button className="update">Update</button>
                      <span
                        className="delete"
                        data-id={address.id}
                        onClick={delAddress}
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
