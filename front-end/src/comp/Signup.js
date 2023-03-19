import React from "react";
import "./Signup.css";

function Signup() {
  let handleSign = (e) => {
    e.preventDefault();
    let data = {
      password: e.target.password.value,
      email: e.target.email.value,
    };

    fetch("https://big-pizza.onrender.com/api/user/registration/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    e.target.email.value = "";
    e.target.password.value = "";
  };

  return (
    <div className="sign-container">
      <div className="signup">
        <div className="text">
          <h1>Welcome!</h1>
          <p>Create your account</p>
        </div>
        <form onSubmit={handleSign}>
          <h2>Sign Up</h2>
          <label>Email address</label>
          <input type="email" id="email" placeholder="Email" required />
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
