import React from "react";
import "./Login.css";
import jwt_decode from "jwt-decode";

function Login(props) {
  let handleLogin = (e) => {
    e.preventDefault();
    let dataLog = {
      password: e.target.passwordLog.value,
      email: e.target.emailLog.value,
    };

    fetch("https://big-pizza.onrender.com/api/user/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataLog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "cant login") {
          document.querySelector(".loginMsg").style.cssText = "display: flex;";
        } else {
          fetch("https://big-pizza.onrender.com/api/token/", {
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
    <div className="login-container">
      <div className="login">
        <div className="text">
          <h1>Welcome Back!</h1>
          <p>Enter to your account</p>
        </div>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <label>Email address</label>
          <input type="email" id="emailLog" placeholder="Your email" required />
          <label>Password</label>
          <input
            type="password"
            id="passwordLog"
            placeholder="Your password"
            required
          />
          <div className="loginMsg">
            <h2> Incorrect email or password </h2>
            <button
              onClick={() => {
                document.querySelector(".loginMsg").style.cssText =
                  "display: none;";
              }}
            >
              {" "}
              X{" "}
            </button>
          </div>
          <button className="loginBtn">Login</button>
          <a href="/">Forgot password ?</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
