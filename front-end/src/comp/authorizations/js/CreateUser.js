import React from "react";
import Footer from "../../global/js/Footer";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Contact from "../../global/js/Contact";
import axios from "axios";
import swal from "sweetalert";

function CreateUser() {
  const token = window.localStorage.getItem("access");
  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_HOSTNAME}/api/create-admin-users/`,
        {
          email: e.target.email.value,
          password: e.target.password.value,
          is_superuser: e.target.superUser.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        swal("Done!", "Added Successfully", "success");
        e.target.email.value = "";
        e.target.password.value = "";
      })
      .catch((error) => {
        if (error.response.status === 400) {
          swal("Error!", "User Already Added!", "error");
        } else {
          swal("Error!", "Something went wrong!", "error");
        }
      });
  };

  return (
    <>
      <NavLog />
      <Sidebar />
      <Contact />
      <div className="bg-sec min-vh-100 py-5 ">
        <div className="container-fluid px-4">
          <h2 className="main-title">Create User</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#addItem"
              className="btn btn-success fs-14 p-2 mb-3 rounded text-white"
            >
              Add new user
            </div>

            <div
              className="modal fade"
              id="addItem"
              tabIndex={-1}
              aria-labelledby="addItemLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 text-center w-100"
                      id="addItemLabel"
                    >
                      Add New User
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleAdd}>
                      <div className="mb-3">
                        <label htmlFor="email" className="col-form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="password" className="col-form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="superUser" className="col-form-label">
                          Type
                        </label>
                        <select id="superUser" className="form-control">
                          <option value="true">admin</option>
                          <option value="false">user</option>
                        </select>
                      </div>

                      <div className="modal-footer border-0">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-success">
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateUser;
