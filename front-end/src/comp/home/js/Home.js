import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Nav from "../../global/js/Nav";
import features_1 from "../../../imgs/features1.png";
import features_2 from "../../../imgs/features2.png";
import features_3 from "../../../imgs/features3.png";
import host_1 from "../../../imgs/hosting-basic.png";
import host_2 from "../../../imgs/hosting-advanced.png";
import host_3 from "../../../imgs/hosting-professional.png";
import Footer from "../../global/js/Footer";

function Home() {
  return (
    <>
      <Nav />
      <div className="homePage">
        <div className="intro">
          <div>
            <h1>
              We Are <span>Creative</span> System
            </h1>
            <p>
              The road will never be the same, Save your time, Be different,
              With us on the same path to success
            </p>
            <Link to="/signup">Get Started</Link>
          </div>
        </div>
        <div id="services" className="services">
          <h2 className="main-title">services</h2>
          <div className="container">
            <div className="box">
              <i className="fa-solid fa-user-shield"></i>
              <h3>Security</h3>
              <div className="info-services">
                <Link>Details</Link>
              </div>
            </div>
            <div className="box">
              <i className="fa-solid fa-screwdriver-wrench"></i>
              <h3>Fixing Issues</h3>
              <div className="info-services">
                <Link>Details</Link>
              </div>
            </div>
            <div className="box">
              <i className="fa-solid fa-map-location-dot"></i>
              <h3>Location</h3>
              <div className="info-services">
                <Link>Details</Link>
              </div>
            </div>
            <div className="box">
              <i className="fa-solid fa-bullhorn"></i>
              <h3>Marketing</h3>
              <div className="info-services">
                <Link>Details</Link>
              </div>
            </div>
          </div>
        </div>
        <div id="features" className="features">
          <h2 className="main-title">features</h2>
          <div className="container">
            <div className="box quality">
              <div className="img-holder">
                <img src={features_1} alt="features" />
              </div>
              <h2>Quality</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                harum hic veniam eligendi minima
              </p>
              <a href="#features">More</a>
            </div>
            <div className="box time">
              <div className="img-holder">
                <img src={features_2} alt="features" />
              </div>
              <h2>Time</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                harum hic veniam eligendi minima
              </p>
              <a href="#features">More</a>
            </div>
            <div className="box passion">
              <div className="img-holder">
                <img src={features_3} alt="features" />
              </div>
              <h2>Passion</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                harum hic veniam eligendi minima
              </p>
              <a href="#features">More</a>
            </div>
          </div>
        </div>
        <div id="pricing" className="pricing">
          <h2 className="main-title">Pricing Plans</h2>
          <div className="container">
            <div className="box">
              <div className="title">Basic</div>
              <img src={host_1} alt="Plans" />
              <div className="price">
                <span className="amont">$15</span>
                <span className="time">Per Month</span>
              </div>
              <ul>
                <li>10GB HDD Space</li>
                <li>5 Email Addresses</li>
                <li>2 Subdomains</li>
                <li>4 Databases</li>
                <li>Basic Support</li>
              </ul>
              <a href="#pricing">Choose Plan</a>
            </div>
            <div className="box popular">
              <div className="label">Most Popular</div>
              <div className="title">Advanced</div>
              <img src={host_2} alt="Plans" />
              <div className="price">
                <span className="amont">$25</span>
                <span className="time">Per Month</span>
              </div>
              <ul>
                <li>20GB HDD Space</li>
                <li>10 Email Addresses</li>
                <li>5 Subdomains</li>
                <li>8 Databases</li>
                <li>Advanced Support</li>
              </ul>
              <a href="#pricing">Choose Plan</a>
            </div>
            <div className="box">
              <div className="title">Professional</div>
              <img src={host_3} alt="Plans" />
              <div className="price">
                <span className="amont">$45</span>
                <span className="time">Per Month</span>
              </div>
              <ul>
                <li>50GB HDD Space</li>
                <li>20 Email Addresses</li>
                <li>10 Subdomains</li>
                <li>20 Databases</li>
                <li>Professional Support</li>
              </ul>
              <a href="#pricing">Choose Plan</a>
            </div>
          </div>
        </div>

        {/* <div id="contact" className="contact"></div> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
