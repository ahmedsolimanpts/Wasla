import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import swal from "sweetalert";
import "../css/Login.css";
import { Link } from "react-router-dom";
import logo from "../../../imgs/logo.png";
import Nav from "../../global/js/Nav";
import Contact from "../../global/js/Contact";
import Footer from "../../global/js/Footer";

function Login() {
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);

  const trueLoadBtn = () => {
    return (
      <button
        className="loginBtn d-block w-75 bg-main p-3 tr-main text-white rounded-pill fw-bold"
        type="button"
        disabled
      >
        <span
          className="spinner-border spinner-border-sm fx-2"
          role="status"
          aria-hidden="true"
        ></span>
      </button>
    );
  };

  const falseLoadBtn = () => {
    return (
      <button className="loginBtn d-block w-75 bg-main p-3 tr-main text-white rounded-pill fw-bold">
        {" "}
        Login{" "}
      </button>
    );
  };

  const errorAlert = () => {
    return (
      <div
        className="alert alert-danger d-flex align-items-center"
        role="alert"
      >
        <svg
          className=" fa-solid fa-triangle-exclamation bi flex-shrink-0 me-2"
          role="img"
          aria-label="Danger:"
        ></svg>
        <div>Incorrect email or password</div>
      </div>
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoad(true);
    setIsError(false);

    const data = {
      password: e.target.password.value,
      email: e.target.email.value,
    };

    axios
      .post(`${process.env.REACT_APP_HOSTNAME}/api/user/login/`, data)
      .then((res) => {
        const decodedRef = jwt_decode(res.data.refresh);
        const decodedAcs = jwt_decode(res.data.access);

        localStorage.setItem("expRef", decodedRef.exp);
        localStorage.setItem("expAcs", decodedAcs.exp);
        localStorage.setItem("token", res.data.refresh);
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("user_id", decodedRef.user_id);
        localStorage.setItem("type", res.data.type);
        e.target.email.value = "";
        e.target.password.value = "";
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setIsError(true);
        } else {
          swal("Error!", "Something went wrong!", "error");
        }
      })
      .finally(() => {
        setIsLoad(false);
      });
  };

  const showPass = () => {
    const pass = document.querySelector(".login .pass");
    const icon = document.querySelector(".login .showPass svg");

    if (pass.type === "password") {
      pass.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      pass.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  };

  return (
    <>
      <Nav />
      <Contact />
      <div className="login w-100 pb-5 bg-var min-vh-100">
        <div className="p-3 m-auto rounded-circle text-center">
          <img src={logo} alt="logo" className="rounded-circle w-125 h-auto" />
        </div>
        <h1 className="text-center text-black-50 mb-4 ">
          Good to see you again
        </h1>
        <form className="m-auto bg-var p-4 rounded " onSubmit={handleLogin}>
          <label className="fs-14 text-black-50">Email address</label>
          <div className="box-input mt-2 mb-4 d-flex align-items-center bg-var rounded border border-secondary-subtle ">
            <i className="fa-solid fa-user-tie"></i>
            <input
              className="p-3 w-100 fs-14 rounded-end border-start border-secondary-subtle h-100 bg-var"
              type="email"
              id="email"
              placeholder="Your email"
              required
            />
          </div>
          <label className="fs-14 text-black-50">Password</label>
          <div className="box-input mt-2 mb-4 d-flex align-items-center bg-var rounded border border-secondary-subtle">
            <i className="fa-solid fa-lock-open fa-flip-horizontal"></i>
            <input
              className="pass p-3 w-100 fs-14 rounded-end border-start border-secondary-subtle h-100 bg-var"
              type="password"
              id="password"
              placeholder="Your password"
              required
            />
            <div onClick={showPass} className="showPass tr-main cr-pointer">
              <span className="fa-solid fa-eye"></span>
            </div>
          </div>
          {isError && errorAlert()}
          {isLoad ? trueLoadBtn() : falseLoadBtn()}
          <div className="box-btn d-flex">
            <Link
              to="/"
              className="text-center fw-bold fs-14 color-main tr-main"
            >
              Forgot password ?
            </Link>
            <Link
              to="/signup"
              className="text-center fw-bold fs-14 color-main tr-main"
            >
              Don't have an account ?
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
