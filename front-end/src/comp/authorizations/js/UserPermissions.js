import React, { useEffect, useState } from "react";
import Footer from "../../global/js/Footer";
import NavLog from "../../global/js/NavLog";
import Sidebar from "../../global/js/Sidebar";
import Contact from "../../global/js/Contact";
import DataTable from "react-data-table-component";
import axios from "axios";
import swal from "sweetalert";

function UserPermissions() {
  const token = window.localStorage.getItem("access");
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const [branch, setBranch] = useState();
  const [permission, setPermission] = useState();

  const getUserData = () => {
    axios
      .get(`${process.env.REACT_APP_HOSTNAME}/api/users/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data));
  };

  const getBranchData = () => {
    axios
      .get(`${process.env.REACT_APP_HOSTNAME}/api/branch/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setBranch(res.data));
  };

  const getPermissionData = () => {
    axios
      .get(`${process.env.REACT_APP_HOSTNAME}/api/permission/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setPermission(res.data));
  };

  const handleGetData = (e) => {
    axios
      .get(
        `${process.env.REACT_APP_HOSTNAME}/api/user-permissions-full-data/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setData(res.data));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_HOSTNAME}/api/user-permissions/${e.target.id.dataset.id}/`,
        {
          user: e.target.user.value,
          branch: e.target.branch.value,
          permission: e.target.permission.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        handleGetData();
        swal("Done!", "Update Successfully", "success");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          swal("Error!", "User Permissions Already Added!", "error");
        } else {
          swal("Error!", "Something went wrong!", "error");
        }
      });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_HOSTNAME}/api/user-permissions/`,
        {
          user: e.target.user.value,
          branch: e.target.branch.value,
          permission: e.target.permission.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        handleGetData();
        swal("Done!", "Added Successfully", "success");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          swal("Error!", "User Permissions Already Added!", "error");
        } else {
          swal("Error!", "Something went wrong!", "error");
        }
      });
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      grow: 0.25,
    },
    {
      name: "User",
      selector: (row) => row.user.email,
      sortable: true,
      grow: 1,
    },
    {
      name: "Branch",
      selector: (row) => row.branch.name,
      sortable: true,
      grow: 1,
    },
    {
      name: "Permission",
      selector: (row) => row.permission.permission,
      sortable: true,
      grow: 1,
    },
    {
      name: "Action",
      grow: 1,
      center: true,
      selector: (row) => {
        return (
          <>
            <button
              className="btn btn-secondary me-2 py-1 px-2 "
              type="button"
              data-bs-toggle="modal"
              data-bs-target={`#edit${row.id}`}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <button
              className="btn btn-danger py-1 px-2"
              onClick={() => {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this imaginary file!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                }).then((willDelete) => {
                  if (willDelete) {
                    axios
                      .delete(
                        `${process.env.REACT_APP_HOSTNAME}/api/user-permissions/${row.id}/`,
                        {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        }
                      )
                      .then(() => {
                        swal("Poof! Your imaginary file has been deleted!", {
                          icon: "success",
                        });
                        handleGetData();
                      });
                  } else {
                    swal("Your imaginary file is safe!");
                  }
                });
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>

            <div
              className="modal fade"
              id={`edit${row.id}`}
              tabIndex={-1}
              aria-labelledby={`editLabel${row.id}`}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 text-center w-100"
                      id={`editLabel${row.id}`}
                    >
                      Type New Value
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleEdit}>
                      <div className="mb-3">
                        <label htmlFor="id" className="col-form-label">
                          ID
                        </label>
                        <input
                          type="text"
                          data-id={row.id}
                          className="form-control"
                          id="id"
                          defaultValue={row.id}
                          disabled
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="user" className="col-form-label">
                          User
                        </label>
                        <select
                          id="user"
                          className="form-control"
                          defaultValue={row.user.id}
                        >
                          {user &&
                            user.map((user) => (
                              <option key={user.id} value={user.id}>
                                {user.email}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="branch" className="col-form-label">
                          Branch
                        </label>
                        <select
                          id="branch"
                          className="form-control"
                          defaultValue={row.branch.id}
                        >
                          {branch &&
                            branch.map((branch) => (
                              <option key={branch.id} value={branch.id}>
                                {branch.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="permission" className="col-form-label">
                          Permission
                        </label>
                        <select
                          id="permission"
                          className="form-control"
                          defaultValue={row.permission.id}
                        >
                          {permission &&
                            permission.map((permission) => (
                              <option key={permission.id} value={permission.id}>
                                {permission.permission}
                              </option>
                            ))}
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
                        <button
                          type="submit"
                          data-bs-dismiss="modal"
                          className="btn btn-success"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      },
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        border: "none",
        background: "#ccc",
      },
    },
    cells: {
      style: {
        background: "#ddd",
        borderBottom: "2px solid #ccc",
      },
    },

    headCells: {
      style: {
        color: "#202124",
        fontSize: "14px",
        fontWeight: "bold",
      },
    },

    pagination: {
      style: {
        border: "none",
        background: "#ddd",
      },
    },
  };

  const [record, setRecord] = useState(data);
  const handleFilter = (e) => {
    const newData = data.filter((row) => {
      return row.branch.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setRecord(newData);
  };

  useEffect(() => {
    handleGetData();
    getUserData();
    getBranchData();
    getPermissionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NavLog />
      <Sidebar />
      <Contact />
      <div className="bg-sec min-vh-100 py-5 ">
        <div className="container-fluid px-4">
          <h2 className="main-title">User Permissions</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#addItem"
              className="btn btn-success fs-14 p-2 mb-3 rounded text-white"
            >
              Add new permissions
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
                      Add New Permissions
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
                        <label htmlFor="user" className="col-form-label">
                          User
                        </label>
                        <select id="user" className="form-control">
                          {user &&
                            user.map((user) => (
                              <option key={user.id} value={user.id}>
                                {user.email}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="branch" className="col-form-label">
                          Branch
                        </label>
                        <select id="branch" className="form-control">
                          {branch &&
                            branch.map((branch) => (
                              <option key={branch.id} value={branch.id}>
                                {branch.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="permission" className="col-form-label">
                          Permission
                        </label>
                        <select id="permission" className="form-control">
                          {permission &&
                            permission.map((permission) => (
                              <option key={permission.id} value={permission.id}>
                                {permission.permission}
                              </option>
                            ))}
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

            <div>
              <input
                type="search"
                className="bg-white border border-2 mb-3 text-black p-2 rounded"
                onChange={handleFilter}
                placeholder="Search by branch"
              />
            </div>
          </div>
          <DataTable
            columns={columns}
            data={record ? record : data}
            pagination
            customStyles={customStyles}
          ></DataTable>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserPermissions;
