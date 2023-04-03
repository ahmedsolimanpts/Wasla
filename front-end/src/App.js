import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./comp/home/js/Home";
import Admin from "./comp/home/js/Admin";
import Login from "./comp/auth/js/Login";
import Signup from "./comp/auth/js/Signup";
import Info from "./comp/information/js/Info";
import CreateItem from "./comp/information/js/CreateItem";
import AllItems from "./comp/information/js/AllItems";
import Company from "./comp/company/js/Company";
import CreateCompany from "./comp/company/js/CreateCompany";
import AllCompanies from "./comp/company/js/AllCompanies";
import Auth from "./comp/authorizations/js/Auth";
import CreateAuth from "./comp/authorizations/js/CreateAuth";
import AllAuth from "./comp/authorizations/js/AllAuth";
import Loading from "./comp/global/js/Loading";
import Branch from "./comp/branch/js/Branch";
import CreateBranch from "./comp/branch/js/CreateBranch";
import AllBranches from "./comp/branch/js/AllBranches";

function App() {
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector(".loading").style.visibility = "visible";
    } else {
      document.querySelector(".loading").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }
  };
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Loading />
          <Routes>
            <Route
              path="/"
              element={
                window.localStorage.getItem("token") ? (
                  <Navigate replace to={"/admin"} />
                ) : (
                  <Home />
                )
              }
            />

            <Route
              path="/branch"
              element={
                window.localStorage.getItem("token") ? (
                  <Branch />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/branch/create-branch"
              element={
                window.localStorage.getItem("token") ? (
                  <CreateBranch />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/branch/all-branches"
              element={
                window.localStorage.getItem("token") ? (
                  <AllBranches />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/auth"
              element={
                window.localStorage.getItem("token") ? (
                  <Auth />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/auth/create-auth"
              element={
                window.localStorage.getItem("token") ? (
                  <CreateAuth />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/auth/all-auth"
              element={
                window.localStorage.getItem("token") ? (
                  <AllAuth />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/company"
              element={
                window.localStorage.getItem("token") ? (
                  <Company />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/company/create-company"
              element={
                window.localStorage.getItem("token") ? (
                  <CreateCompany />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/company/all-companies"
              element={
                window.localStorage.getItem("token") ? (
                  <AllCompanies />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/info"
              element={
                window.localStorage.getItem("token") ? (
                  <Info />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/info/create-item"
              element={
                window.localStorage.getItem("token") ? (
                  <CreateItem />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/info/all-items"
              element={
                window.localStorage.getItem("token") ? (
                  <AllItems />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

            <Route
              path="/admin"
              element={
                window.localStorage.getItem("token") ? (
                  <Admin />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />

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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
