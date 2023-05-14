import React from "react";
import "../css/Contact.css";

function Contact() {
  const showContact = () => {
    document.querySelector(".contact").classList.toggle("open");
  };
  const handleContact = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div onClick={showContact}>
        <i className=" iconContact fa-solid fa-headset text-white rounded-circle bg-main position-fixed z-2"></i>
      </div>
      <div className="contact position-fixed z-3">
        <form className="rounded" onSubmit={handleContact}>
          <h2 className="d-block w-100 text-center text-white ">
            {" "}
            Contact us{" "}
          </h2>
          <label className="text-white">Name</label>
          <input
            type="text"
            id="nameContact"
            className="d-block w-100 p-2 rounded"
          />

          <label className="text-white">Email</label>
          <input
            type="email"
            id="emailContact"
            className="d-block w-100 p-2 rounded"
            required
          />

          <label className="text-white">Message</label>
          <textarea
            id="msgContact"
            className="d-block w-100 p-2 rounded"
            required
          ></textarea>
          <button className="fw-bold text-white d-block ms-auto rounded-pill">
            {" "}
            Send{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
