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
import work_1 from "../../../imgs/work-1.png";
import work_2 from "../../../imgs/work-2.png";
import work_3 from "../../../imgs/work-3.png";
import Footer from "../../global/js/Footer";
import Contact from "../../global/js/Contact";

function Home() {
  return (
    <>
      <Nav />
      <Contact />
      <div className="homePage">
        <div className="intro">
          <div
            id="carouselExampleRide"
            className="carousel slide h-100"
            data-bs-ride="true"
          >
            <div className="overlay"></div>
            <div className="carousel-inner h-100">
              <div className="carousel-item h-100 active">
                <img src={work_1} className="d-block w-100 h-100 " alt="img" />
                <div className="position-absolute top-50 start-50 translate-middle z-2 text-center px-2 w-75 intro-txt">
                  <h1 className="text-white mb-3">
                    We Are <span className="color-active ">Creative</span>{" "}
                    System
                  </h1>
                  <p className="mx-auto lh-md mb-4 text-white w-75">
                    The road will never be the same, Save your time, Be
                    different, With us on the same path to success
                  </p>
                  <Link
                    to="/signup"
                    className="text-white fw-bold rounded-pill"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="carousel-item h-100">
                <img src={work_2} className="d-block w-100 h-100" alt="img" />
                <div className="position-absolute top-50 start-50 translate-middle z-2 text-center px-2 w-75 intro-txt">
                  <h1 className="text-white mb-3">
                    Save Your <span className="color-active ">Time</span>
                  </h1>
                  <p className="mx-auto lh-md mb-4 text-white w-75">
                    Join Us To Save your time And Earn More Money
                  </p>
                  <Link
                    to="/signup"
                    className="text-white fw-bold rounded-pill"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="carousel-item h-100">
                <img src={work_3} className="d-block w-100 h-100" alt="img" />
                <div className="position-absolute top-50 start-50 translate-middle z-2 text-center px-2 w-75 intro-txt">
                  <h1 className="text-white mb-3">
                    Manege Your <span className="color-active ">Business</span>
                  </h1>
                  <p className="mx-auto lh-md mb-4 text-white w-75">
                    When You Join Us You Can Manege Your Business Very Easy
                  </p>
                  <Link
                    to="/signup"
                    className="text-white fw-bold rounded-pill"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div id="services" className="services p-sec bg-sec">
          <div
            className="modal fade"
            id="detailsOne"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="detailsOneLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="detailsOneLabel">
                    Security
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body lh-lg">
                  Explains that judicious security services is at the forefront
                  of security innovations and developments. the companies
                  undertaking our services will get trained security guards that
                  are given different trainings before the execution of their
                  responsibilities.Opines that every business needs professional
                  security services that keep the business aligned with their
                  routine activities without harming the company’s culture.
                  Explains that our workforce provides the corporate entity with
                  the credentials and track records of the employees before the
                  screening and interview stage.
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="detailsTwo"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="detailsTwoLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="detailsTwoLabel">
                    Fixing Issues
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body lh-lg">
                  Once the situation has been properly assessed, agents should
                  offer the most appealing solution to the customer and offer
                  options whenever possible. When customers have difficult
                  issues to resolve, they may feel they made a poor choice in
                  trusting a certain brand. Giving them options for better
                  service (better deals, delivery service, etc.) will make them
                  feel in charge again-and more likely to support the brand.
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="detailsThree"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="detailsThreeLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="detailsThreeLabel">
                    Location
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body lh-lg">
                  Service Location means the address at which you are receiving
                  power from Payless Power; “ERCOT” means the Electric
                  Reliability Council of Texas, the grid operator in most parts
                  of Texas; “PUCT” means the Public Utility Commission of Texas,
                  an agency that regulates the state’s electric industry; “SUP”
                  means the Summary of Usage and Payment; “TDU” is the
                  Transmission and Distribution Utility, an independent company
                  (separate from Payless Power) that owns and maintains the
                  poles and wires that deliver electricity to you.
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="detailsFour"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="detailsFourLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="detailsFourLabel">
                    Marketing
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body lh-lg">
                  Services marketing is a form of marketing businesses that
                  provide a service to their customers use to increase brand
                  awareness and sales. Unlike product marketing, services
                  marketing focuses on advertising intangible transactions that
                  provide value to customers. Advertisers use effective services
                  marketing strategies to build trust with their customers and
                  show them how their service can benefit them. Businesses may
                  base their services marketing strategies on the promotion of
                  ideas, benefits and promises to help them sell their services.
                </div>
              </div>
            </div>
          </div>

          <h2 className="main-title">services</h2>
          <div className="container grid-300">
            <div className="box bg-white position-relative sh-main tr-main">
              <i className="fa-solid fa-user-shield d-block text-center "></i>
              <h3 className="color-main text-center">Security</h3>
              <div className="info-services text-end position-relative">
                <Link
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#detailsOne"
                >
                  Details
                </Link>
              </div>
            </div>
            <div className="box bg-white position-relative sh-main tr-main">
              <i className="fa-solid fa-screwdriver-wrench d-block text-center"></i>
              <h3 className="color-main text-center">Fixing Issues</h3>
              <div className="info-services text-end position-relative">
                <Link
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#detailsTwo"
                >
                  Details
                </Link>
              </div>
            </div>
            <div className="box bg-white position-relative sh-main tr-main">
              <i className="fa-solid fa-map-location-dot d-block text-center"></i>
              <h3 className="color-main text-center">Location</h3>
              <div className="info-services text-end position-relative">
                <Link
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#detailsThree"
                >
                  Details
                </Link>
              </div>
            </div>
            <div className="box bg-white position-relative sh-main tr-main">
              <i className="fa-solid fa-bullhorn d-block text-center"></i>
              <h3 className="color-main text-center">Marketing</h3>
              <div className="info-services text-end position-relative">
                <Link
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#detailsFour"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="features" className="features p-sec bg-white">
          <h2 className="main-title">features</h2>
          <div className="container grid-300">
            <div className="box quality text-center">
              <div className="img-holder overflow-hidden position-relative">
                <img
                  src={features_1}
                  alt="features"
                  className="img-fluid w-100"
                />
              </div>
              <h2 className="position-relative m-auto">Quality</h2>
              <p className="lh-lg my-4 p-4 text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                harum hic veniam eligendi minima
              </p>
              <a href="#features" className="position-relative fw-bold d-block">
                More
              </a>
            </div>
            <div className="box time text-center">
              <div className="img-holder overflow-hidden position-relative">
                <img
                  src={features_2}
                  alt="features"
                  className="img-fluid w-100"
                />
              </div>
              <h2 className="position-relative m-auto">Time</h2>
              <p className="lh-lg my-4 p-4 text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                harum hic veniam eligendi minima
              </p>
              <a href="#features" className="position-relative fw-bold d-block">
                More
              </a>
            </div>
            <div className="box passion text-center">
              <div className="img-holder overflow-hidden position-relative">
                <img
                  src={features_3}
                  alt="features"
                  className="img-fluid w-100"
                />
              </div>
              <h2 className="position-relative m-auto">Passion</h2>
              <p className="lh-lg my-4 p-4 text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                harum hic veniam eligendi minima
              </p>
              <a href="#features" className="position-relative fw-bold d-block">
                More
              </a>
            </div>
          </div>
        </div>

        <div id="pricing" className="pricing p-sec bg-sec">
          <h2 className="main-title">Pricing Plans</h2>
          <div className="container grid-300">
            <div className="box position-relative bg-white text-center z-1 sh-main tr-main">
              <div className="title fw-bold">Basic</div>
              <img src={host_1} alt="Plans" />
              <div className="price mb-4">
                <span className="amont fw-bold d-block mb-1">$15</span>
                <span className="time text-black-50">Per Month</span>
              </div>
              <ul className="text-start p-0">
                <li>10GB HDD Space</li>
                <li>5 Email Addresses</li>
                <li>2 Subdomains</li>
                <li>4 Databases</li>
                <li>Basic Support</li>
              </ul>
              <a href="#pricing" className="d-block rounded-pill fw-bold ">
                Choose Plan
              </a>
            </div>
            <div className="box popular position-relative bg-white text-center z-1 sh-main tr-main">
              <div className="label position-absolute text-white fw-bold ">
                Most Popular
              </div>
              <div className="title fw-bold">Advanced</div>
              <img src={host_2} alt="Plans" />
              <div className="price mb-4">
                <span className="amont fw-bold d-block mb-1">$25</span>
                <span className="time text-black-50">Per Month</span>
              </div>
              <ul className="text-start p-0">
                <li>20GB HDD Space</li>
                <li>10 Email Addresses</li>
                <li>5 Subdomains</li>
                <li>8 Databases</li>
                <li>Advanced Support</li>
              </ul>
              <a href="#pricing" className="d-block rounded-pill fw-bold ">
                Choose Plan
              </a>
            </div>
            <div className="box position-relative bg-white text-center z-1 sh-main tr-main">
              <div className="title fw-bold">Professional</div>
              <img src={host_3} alt="Plans" />
              <div className="price mb-4">
                <span className="amont fw-bold d-block mb-1">$45</span>
                <span className="time text-black-50">Per Month</span>
              </div>
              <ul className="text-start p-0">
                <li>50GB HDD Space</li>
                <li>20 Email Addresses</li>
                <li>10 Subdomains</li>
                <li>20 Databases</li>
                <li>Professional Support</li>
              </ul>
              <a href="#pricing" className="d-block rounded-pill fw-bold ">
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
