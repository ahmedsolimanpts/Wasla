import React from "react";
import Nav from "./Nav";

function Home() {
  return (
    <div className="homePage">
      <Nav />
      <h1> Welcome in Home Page </h1>
      <button
        className="logout"
        onClick={() => {
          window.localStorage.clear();
          window.location.reload();
        }}
      >
        {" "}
        Logout{" "}
      </button>
    </div>
  );
}

export default Home;
