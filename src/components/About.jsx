import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Skill from "./Skill";
import ProfilePic from "../assets/profile_pic.jpg";
import "../css/About-styles.css";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <>
      <div
        className="container"
        style={{ minHeight: "100vh", paddingTop: "5rem" }}
      >
        <div className="row">
          <div className="col-12 col-lg-4 border p-5 aside d-none d-lg-block">
            <div className="d-flex flex-column h-100">
              <div>
                <h1 className="ff-grenze py-3 display-3 fw-bold">About me</h1>
                <ul>
                  <li className="py-2">
                    <button
                      onClick={() => {
                        document
                          .getElementById("introduction")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                      className="text-decoration-none text-light link btn btn-link p-0"
                    >
                      Introduction
                    </button>
                  </li>
                  <li className="py-2">
                    <button
                      onClick={() => {
                        document
                          .getElementById("skills")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                      className="text-decoration-none text-light link btn btn-link p-0"
                    >
                      Skills
                    </button>
                  </li>
                  <li className="py-2">
                    <button
                      onClick={() => {
                        document
                          .getElementById("references")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                      className="text-decoration-none text-light link btn btn-link p-0"
                    >
                      References
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mt-auto d-flex gap-3 justify-content-center">
                <a href="https://www.facebook.com/nanashiexxx/"  target="_blank" className="text-decoration-none text-light">
                  <i className="ri-facebook-box-fill display-5 social"></i>
                </a>
                <a href="https://www.instagram.com/ssm.ejay/" target="_blank" className="text-decoration-none text-light">
                  <i className="ri-instagram-fill display-5 social"></i>
                </a>
                <a href="" className="text-decoration-none text-light">
                  <i className="ri-linkedin-box-fill display-5 social"></i>
                </a>
                <a href="https://github.com/nanashieeeee" target="_blank" className="text-decoration-none text-light">
                  <i className="ri-github-fill display-5 social"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-8 py-5 px-4 px-lg-5 aboutSect"
            id="aboutSect"
          >
            <section id="introduction">
              <div className="d-block d-lg-flex gap-5 hidden">
                <div className="d-flex justify-content-center">
                  <img
                    src={ProfilePic}
                    alt="profile-Picture"
                    className="rounded profile-pic"
                  />
                </div>

                <div>
                  <h1 className="ff-grenze pt-5 pt-lg-0 center-on-sm">
                    Emmard John S. Balina
                  </h1>
                  <h4 className="lead color-scarlet center-on-sm">
                    front-end developer
                  </h4>
                  <p className="m-0 pt-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sint quos id odit fugit error earum, cum velit officia
                    impedit asperiores totam enim illo, necessitatibus eligendi
                    aut quam culpa ducimus facilis. Blanditiis, perferendis
                    animi debitis expedita minus porro vel recusandae alias
                    eveniet nesciunt modi exercitationem dolorum a asperiores!
                    Recusandae, facere. Cum ad eveniet quaerat ullam, vitae quod
                    exercitationem cupiditate quos excepturi totam. Corrupti,
                    quidem porro.
                  </p>
                </div>
              </div>
              <div className="row py-5 hidden">
                {/* contact details */}
                <div className="col-12 col-lg-6">
                  <p className="ff-grenze fs-3 pb-4">Contact Details</p>
                  <div className="d-flex gap-4 pb-4">
                    <div>
                      <p>Phone :</p>
                      <p>E-mail :</p>
                      <p>Address :</p>
                    </div>
                    <div>
                      <p>+63 928-8471-523</p>
                      <p>ejbalina@gmail.com</p>
                      <p>Batangas City, Philippines</p>
                    </div>
                  </div>
                  <p className="fs-5">
                    Check out my{" "}
                    <a href="" className="py-5 link color-scarlet">
                      Résumé.
                    </a>
                  </p>
                </div>

                {/* interests */}
                <div className="col-12 col-lg-6 py-5 py-lg-0">
                  <h1 className="ff-grenze fs-3 pb-4">
                    Interests outside of coding
                  </h1>
                  <div className="d-flex gap-3">
                    <div className="border rounded text-center p-3 w-50">
                      <i className="ri-music-ai-fill display-4"></i>
                      <p>I'm the bassist of our small, humble band Roundrbr.</p>
                    </div>
                    <div className="border rounded text-center p-3 w-50">
                      <i className="ri-gamepad-fill display-4"></i>
                      <p>I do be playing games.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />

            <section id="skills">
              <div className="py-5">
                <div className="row">
                  <div className="col-12 col-lg-6 pb-5 pb-lg-0">
                    <h1 className="ff-grenze pt-5 pt-lg-0 display-5 fw-bold pb-3">
                      My Arsenal
                    </h1>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="">
                      <Skill
                        icon="ri-bootstrap-fill"
                        iconColor="#6f42c1"
                        tool="Bootstrap 5"
                        description="Proficient in using Bootstrap 5
                        for responsive web design,
                        creating modern layouts, and
                        implementing components
                        efficiently."
                      />
                      <hr />
                      <Skill
                        icon="ri-javascript-fill"
                        iconColor="#F7DF1E"
                        tool="JavaScript"
                        description="Experienced
                        with ES6 features like arrow
                        functions, promises,
                        async/await, destructuring, and
                        modules for clean, modern
                        code."
                      />
                      <hr />
                      <Skill
                        icon="ri-reactjs-line"
                        iconColor="#61DAFB"
                        tool="React JS"
                        description="Able to utilize React.js
                        for building interactive,
                        component-based web
                        applications, including
                        experience with state
                        management, hooks, and
                        lifecycle methods."
                      />
                      <hr />
                      <div className="py-3 hidden">
                        <p className="">
                          Also basic web development tools ({" "}
                          <span style={{ color: "#E34F26" }}>HTML5</span> &{" "}
                          <span style={{ color: "#663399" }}>CSS</span> ) and a
                          bunch of libraries such as Swal2, SwiperJS, ChartJS
                          and so much more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />

            <section id="references">
              <div className="py-5">
                <h1 className="ff-grenze pt-5 pt-lg-0 display-5 fw-bold pb-3">
                  References
                </h1>
                <div className="row">
                  <div className="col-12 col-lg-6 pb-3 pb-lg-0">
                    <div className="w-100 border p-4">
                      <h2 className="ff-grenze fs-1">Walsh Villarba</h2>
                      <p className="m-0 fs-5 lead">Software Developer</p>
                      <p className="mt-1 small">
                        Utility Solutions Industries, Corp.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="w-100 border p-4">
                      <h2 className="ff-grenze fs-1">Chein Ian Paras</h2>
                      <p className="m-0 fs-5 lead">Full Stack Web Developer</p>
                      <p className="mt-1 small">
                        Utility Solutions Industries, Corp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
