import { Navigate, Route } from "react-router-dom";
import Signup from "../comp/auth/js/Signup";
import Login from "../comp/auth/js/Login";

const sign = (
  <>
    <Route
      path="/signup"
      element={
        window.localStorage.getItem("token") ? (
          <Navigate replace to={"/"} />
        ) : (
          <Signup />
        )
      }
    />
    <Route
      path="/login"
      element={
        window.localStorage.getItem("token") ? (
          <Navigate replace to={"/"} />
        ) : (
          <Login />
        )
      }
    />
  </>
);
export default sign;
