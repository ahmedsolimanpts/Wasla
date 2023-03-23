import React from "react";
import "./Footer.css";
import logo from "../imgs/logo2.png";

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="logo" />
        <p>
          Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus.
        </p>
        <span>
          Copyright By <span>Liwa</span>{" "}
        </span>
        <span>© 2023 - Liwa.inc </span>
      </div>
    </div>
  );
}

export default Footer;
