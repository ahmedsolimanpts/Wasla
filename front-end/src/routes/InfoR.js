import { Navigate, Route } from "react-router-dom";
import Address from "../comp/information/js/Address";
import Location from "../comp/information/js/Location";
import Phone from "../comp/information/js/Phone";
import Currency from "../comp/information/js/Currency";
import CityDistrict from "../comp/information/js/CityDistrict";
import City from "../comp/information/js/City";
import Country from "../comp/information/js/Country";
import CompanyType from "../comp/information/js/CompanyType";
import Language from "../comp/information/js/Language";
import Info from "../comp/information/js/Info";

const info = (
  <>
    <Route
      path="/info"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Info />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/info/language"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Language />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/info/company-type"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <CompanyType />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/info/country"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Country />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/info/city"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <City />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/info/city-district"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <CityDistrict />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/info/currency"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Currency />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/info/phone"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Phone />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/info/location"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Location />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/info/address"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Address />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
  </>
);
export default info;
