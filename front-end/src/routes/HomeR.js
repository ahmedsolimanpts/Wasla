import { Navigate, Route } from "react-router-dom";
import Home from "../comp/home/js/Home";
import Admin from "../comp/home/js/Admin";
import HomeUser from "../comp/home/js/HomeUser";

const home = (
  <>
    <Route
      path="/"
      element={
        window.localStorage.getItem("type") === "user" ? (
          <Navigate replace to={"/home"} />
        ) : window.localStorage.getItem("type") === "Admin" ? (
          <Navigate replace to={"/admin"} />
        ) : (
          <Home />
        )
      }
    />

    <Route
      path="/admin"
      element={
        window.localStorage.getItem("type") === "Admin" ? (
          <Admin />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
    <Route
      path="/home"
      element={
        window.localStorage.getItem("type") === "user" ? (
          <HomeUser />
        ) : (
          <Navigate replace to={"/"} />
        )
      }
    />
  </>
);
export default home;
