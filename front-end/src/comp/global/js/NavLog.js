import React from "react";
import logo from "../../../imgs/logo2.png";
import { Link } from "react-router-dom";

function NavLog() {
  return (
    <div className="bg-main position-sticky top-0 start-0 z-3 d-flex align-items-center m-auto py-1 px-3">
      <Link to="/" className="flex-fill cr-pointer">
        <img className="w-125 h-auto pb-1" src={logo} alt="logo" />
      </Link>

      <div className="btn-group flex-fill d-flex justify-content-end">
        <button
          type="button"
          className=" p-1 bg-main color-active dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-solid fa-user-tie color-active fs-5"></i>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li
            className="text-center"
            onClick={() => {
              window.localStorage.clear();
              window.location.reload();
            }}
          >
            <button className="dropdown-item" type="button">
              Logout <i className="fa-solid fa-right-from-bracket ms-2"></i>{" "}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavLog;
