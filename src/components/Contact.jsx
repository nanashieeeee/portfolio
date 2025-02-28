import React from "react";

function Contact() {
  return (
    <div
      className="container"
      style={{ minHeight: "100vh", paddingTop: "5rem" }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center py-5" style={{height: '100%'}}>
        <h2 className="ff-grenze color-scarlet">Contact</h2>
        <h1 className="ff-grenze display-3 fw-semibold pb-5">Get in touch</h1>

        <div className="form-container">
          <div className="mb-3">
            <label for="emailAddress" className="form-label">
              Your e-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
            ></input>
          </div>
          <div className="mb-3">
            <label for="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
            ></input>
          </div>
          <div class="mb-3">
            <label for="messageBox" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="messageBox"
              rows="3"
            ></textarea>
          </div>

          <div className="d-flex justify-content-center py-3">
            <button className="btn">Send Message</button>
          </div>
        </div>

        <p className="pt-5 ff-grenze fs-4">Follow Along</p>
        <div className="d-flex align-items-center gap-3">
          <a href="" className="text-decoration-none text-light">
            <i className="ri-facebook-box-fill display-6 social"></i>
          </a>
          <a href="" className="text-decoration-none text-light">
            <i className="ri-instagram-fill display-6 social"></i>
          </a>
          <a href="" className="text-decoration-none text-light">
            <i className="ri-linkedin-box-fill display-6 social"></i>
          </a>
          <a href="" className="text-decoration-none text-light">
            <i className="ri-github-fill display-6 social"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
