import { Navigate, Route } from "react-router-dom";
import CompanyAddress from "../comp/company/js/CompanyAddress";
import CompanyLocation from "../comp/company/js/CompanyLocation";
import CompanyPhone from "../comp/company/js/CompanyPhone";
import CompanyManagers from "../comp/company/js/CompanyManagers";
import AllCompany from "../comp/company/js/AllCompany";
import Company from "../comp/company/js/Company";
import CompanyMembers from "../comp/company/js/CompanyMembers";

const company = (
  <>
    <Route
      path="/company"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Company />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/company/all-company"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <AllCompany />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/company/company-managers"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <CompanyManagers />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/company/company-phone"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <CompanyPhone />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/company/company-location"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <CompanyLocation />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/company/company-address"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <CompanyAddress />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/company/company-members"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <CompanyMembers />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
  </>
);
export default company;
