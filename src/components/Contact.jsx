import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // Import SweetAlert2

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // loading
    Swal.fire({
      title: "Sending...",
      text: "Please wait while we send your message.",
      allowOutsideClick: false,
      background: "#1a1a2e",
      color: "#fff",
      confirmButtonColor: "#e94560", // Custom confirm button color
      didOpen: () => {
        Swal.showLoading();
      },
    });

    emailjs
      .send(
        "service_b3d5sci", // Service ID
        "template_9j58pxp", // Template ID
        {
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "yjM7_M83LFem_kx5Q" // User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out! I'll get back to you as soon as I can.",
            background: "#1a1a2e",
            color: "#fff",
            confirmButtonColor: "#e94560",
            timer: 3000,
            showConfirmButton: false,
          });
          setFormData({ email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again later.",
            background: "#222",
            color: "#ff5555",
            confirmButtonColor: "#ff4444",
            showCancelButton: true,
            cancelButtonColor: "#555",
          });
          
        }
      );
  };

  return (
    <div className="container" style={{ minHeight: "100vh", paddingTop: "5rem" }}>
      <div className="d-flex flex-column align-items-center justify-content-center py-5">
        <h2 className="ff-grenze color-scarlet">Contact</h2>
        <h1 className="ff-grenze display-3 fw-semibold pb-5">Get in touch</h1>

        <form className="form-container" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your e-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-flex justify-content-center py-3">
            <button type="submit" className="btn">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
