import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css";

function NotFound() {
  return (
    <div className="position-relative vh-100">
      <div className="notFound w-100 text-center position-absolute top-50 start-50 translate-middle">
        <div className="notFound-404 position-relative">
          <h1 className="m-0 position-absolute start-50 translate-middle-x">
            Oops!
          </h1>
        </div>
        <h2 className="text-black fs-4 text-uppercase mt-0 fw-bold">
          404 - Page not found
        </h2>
        <p className="text-black fs-14 mb-4 mt-0">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="fs-14 tr-main text-uppercase bg-main d-inline-block rounded-pill text-white fw-bold px-4 py-3"
        >
          Go To Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
