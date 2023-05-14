import { Navigate, Route } from "react-router-dom";
import License from "../comp/authorizations/js/License";
import UserPermissions from "../comp/authorizations/js/UserPermissions";
import Feature from "../comp/authorizations/js/Feature";
import Auth from "../comp/authorizations/js/Auth";
import Permission from "../comp/authorizations/js/Permission";
import CreateUser from "../comp/authorizations/js/CreateUser";

const auth = (
  <>
    <Route
      path="/auth"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Auth />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />

    <Route
      path="/auth/features"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Feature />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/auth/user-permissions"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <UserPermissions />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/auth/license"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <License />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/auth/permission"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Permission />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/auth/create-users"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <CreateUser />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
  </>
);
export default auth;
