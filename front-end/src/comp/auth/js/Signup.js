import React from "react";
import "../css/Signup.css";
import logo from "../../../imgs/logo.png";
import { Link } from "react-router-dom";
import Nav from "../../global/js/Nav";

function Signup() {
  let handleSign = (e) => {
    e.preventDefault();
    let data = {
      password: e.target.password.value,
      email: e.target.email.value,
    };

    fetch(process.env.REACT_APP_HOSTNAME + "/api/user/registration/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "Create User Success") {
          window.location.replace(`${window.location.origin + "/login"}`);
          e.target.email.value = "";
          e.target.password.value = "";
        } else {
          document.querySelector(".signMsg").style.cssText = "display: flex;";
        }
      });
  };

  return (
    <>
      <Nav />
      <div className="sign-container">
        <div className="signup">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="content">
            <h1>Welcome!</h1>
            <p>Join Us Now</p>
            <form onSubmit={handleSign}>
              <label>Email address</label>
              <input type="email" id="email" placeholder="Email" required />
              <label>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
              <div className="signMsg">
                <h2> Email already exists </h2>
                <div
                  onClick={() => {
                    document.querySelector(".signMsg").style.cssText =
                      "display: none;";
                  }}
                >
                  {" "}
                  X{" "}
                </div>
              </div>
              <button className="signBtn">Sign Up</button>
              <Link to="/login">Already have an account ?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
