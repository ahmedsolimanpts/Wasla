import { Navigate, Route } from "react-router-dom";
import BranchWorkTime from "../comp/branch/js/BranchWorkTime";
import BranchServicePrice from "../comp/branch/js/BranchServicePrice";
import BranchCurrentStatus from "../comp/branch/js/BranchCurrentStatus";
import BranchStatus from "../comp/branch/js/BranchStatus";
import BranchAddress from "../comp/branch/js/BranchAddress";
import BranchLocation from "../comp/branch/js/BranchLocation";
import BranchPhone from "../comp/branch/js/BranchPhone";
import BranchManagers from "../comp/branch/js/BranchManagers";
import AllBranch from "../comp/branch/js/AllBranch";
import Branch from "../comp/branch/js/Branch";

const branch = (
  <>
    <Route
      path="/branch"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Branch />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/branch/all-branch"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <AllBranch />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/branch/branch-managers"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <BranchManagers />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/branch/branch-phone"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <BranchPhone />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/branch/branch-location"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <BranchLocation />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/branch/branch-address"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <BranchAddress />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/branch/branch-status"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <BranchStatus />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/branch/branch-current-status"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <BranchCurrentStatus />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/branch/branch-service-price"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <BranchServicePrice />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/branch/branch-work-time"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <BranchWorkTime />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
  </>
);
export default branch;
