import React from "react";
import "../css/Login.css";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import logo from "../../../imgs/logo.png";
import Nav from "../../global/js/Nav";

function Login() {
  let handleLogin = (e) => {
    e.preventDefault();
    let dataLog = {
      password: e.target.passwordLog.value,
      email: e.target.emailLog.value,
    };

    fetch(process.env.REACT_APP_HOSTNAME + "/api/user/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataLog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "cant login") {
          document.querySelector(".loginMsg").style.cssText = "display: flex;";
        } else {
          fetch(process.env.REACT_APP_HOSTNAME + "/api/token/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataLog),
          })
            .then((res) => res.json())
            .then((data) => {
              const token = data.refresh;
              const decoded = jwt_decode(token);
              localStorage.setItem("token", token);
              localStorage.setItem("user_id", decoded.user_id);
              window.location.replace(`${window.location.origin}`);
            });
        }
      });
  };
  return (
    <>
      <Nav />
      <div className="login">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1>Good to see you again</h1>
        <form onSubmit={handleLogin}>
          <label>Email address</label>
          <div className="box-input">
            <i className="fa-solid fa-user-tie"></i>
            <input
              type="email"
              id="emailLog"
              placeholder="Your email"
              required
            />
          </div>
          <label>Password</label>
          <div className="box-input">
            <i className="fa-solid fa-lock-open fa-flip-horizontal"></i>
            <input
              type="password"
              id="passwordLog"
              placeholder="Your password"
              required
            />
          </div>
          <div className="loginMsg">
            <h2> Incorrect email or password </h2>
            <div
              onClick={() => {
                document.querySelector(".loginMsg").style.cssText =
                  "display: none;";
              }}
            >
              {" "}
              X{" "}
            </div>
          </div>
          <button className="loginBtn">Login</button>
          <div className="box-btn">
            <Link href="/">Forgot password ?</Link>
            <Link to="/signup">Don't have an account ?</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
