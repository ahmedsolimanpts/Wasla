import React, { useState } from "react";
import "../css/Signup.css";
import logo from "../../../imgs/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../global/js/Nav";
import Contact from "../../global/js/Contact";
import axios from "axios";
import swal from "sweetalert";
import Footer from "../../global/js/Footer";

function Signup() {
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const trueLoadBtn = () => {
    return (
      <button
        className="signBtn d-block w-75 bg-main p-3 tr-main text-white rounded-pill fw-bold"
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
      <button className="signBtn d-block w-75 bg-main p-3 tr-main text-white rounded-pill fw-bold">
        {" "}
        Sign Up{" "}
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
        <div>Email already exists</div>
      </div>
    );
  };

  const handleSign = (e) => {
    e.preventDefault();
    setIsLoad(true);
    setIsError(false);

    axios
      .post(`${process.env.REACT_APP_HOSTNAME}/api/user/registration/`, {
        password: e.target.password.value,
        email: e.target.email.value,
      })
      .then(() => {
        e.target.email.value = "";
        e.target.password.value = "";
        swal("Congratulations!", "You Joined Our Family", "success");
        navigate("/login");
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
    const pass = document.querySelector(".signup .pass");
    const icon = document.querySelector(".signup .showPass svg");

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
      <div className="sign-container min-vh-100 d-flex pb-4 w-100 bg-var justify-content-center align-items-center ">
        <div className="signup d-flex flex-row-reverse w-75 rounded">
          <div className="logo p-5 d-flex justify-content-center align-items-center rounded rounded-end">
            <img className="h-auto rounded-circle" src={logo} alt="logo" />
          </div>
          <div className="content p-5 rounded-start rounded">
            <h1 className="mb-2 text-black-50 text-center">Welcome!</h1>
            <p className="text-center fs-14 text-black-50">Join Us Now</p>
            <form className="mb-4" onSubmit={handleSign}>
              <label className="fs-14 text-black-50">Email address</label>
              <input
                type="email"
                className="w-100 p-3 rounded h-100 mt-2 mb-3 bg-white border border-secondary-subtle "
                id="email"
                placeholder="Email"
                required
              />
              <label className="fs-14 text-black-50">Password</label>
              <div className="mt-2 mb-3 w-100 d-flex align-items-center bg-white rounded border border-secondary-subtle">
                <input
                  className="pass w-100 p-3 rounded h-100 bg-white"
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                />
                <div onClick={showPass} className="showPass px-3 cr-pointer">
                  <span className="fa-solid fa-eye"></span>
                </div>
              </div>
              {isError && errorAlert()}
              {isLoad ? trueLoadBtn() : falseLoadBtn()}
              <Link
                to="/login"
                className="color-main fs-14 tr-main fw-bold d-block text-center "
              >
                Already have an account ?
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
