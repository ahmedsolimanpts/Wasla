import { Navigate, Route } from "react-router-dom";
import CompanyDetails from "../comp/user/js/CompanyDetails";
import BranchDetails from "../comp/user/js/BranchDetails";
import FeatureDetails from "../comp/user/js/FeatureDetails";

const user = (
  <>
    <Route
      path="/home/:companyId"
      element={
        window.localStorage.getItem("type") === "user" ? (
          <CompanyDetails />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/home/:companyId/:branchId"
      element={
        window.localStorage.getItem("type") === "user" ? (
          <BranchDetails />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/home/:companyId/:branchId/:featureId"
      element={
        window.localStorage.getItem("type") === "user" ? (
          <FeatureDetails />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
  </>
);
export default user;
