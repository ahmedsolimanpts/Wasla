import React from "react";
import "./Footer.css";
import logo from "../imgs/logo2.png";

function Footer() {
  return (
    <div className="footer">
      <div className="box-copy">
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

      <div className="box-links">
        <h5>Links</h5>
        <ul>
          <li>Home</li>
          <li>Our Services</li>
          <li>Terms and Condition</li>
        </ul>
      </div>

      <div className="box-about">
        <h5>About Us</h5>
        <ul>
          <li>Sign In</li>
          <li>Register</li>
          <li>Features</li>
        </ul>
      </div>

      <div className="box-contact">
        <h5>Contact Us</h5>
        <form>
          <input type="text" id="nameCon" placeholder="Your name" />
          <input type="email" id="emailCon" placeholder="Your email" />
          <textarea id="msgCon" placeholder="Your message"></textarea>
          <button>Send</button>
        </form>
        <div className="social-icon">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
