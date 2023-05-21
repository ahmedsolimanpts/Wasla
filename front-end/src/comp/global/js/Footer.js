import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer bg-main">
      <div className="container-footer d-flex align-items-center text-center flex-wrap-reverse">
        <div className="box-copy">
          <span className="pb-1 text-white-50">
            © 2023 Copyright By <span className="color-active">Liwa Inc</span>
          </span>
        </div>

        <div className="box-social">
          <div className="social-icon pt-1 text-center">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
