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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
            path="/company/companies"
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
            path="/info/items"
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
  );
}

export default App;
