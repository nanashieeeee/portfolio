import React from "react";
import "../css/Project-styles.css";
import Tool from "./Tool";
import swalLogo from "../assets/swal2-logo.png";
import chartJsLogo from "../assets/chart-js-seeklogo.png";

function Sjdh() {
  return (
    <div className="container project-desc-container px-4 px-lg-0">
      <div className="hero py-5">
        <h1 className="ff-grenze fw-bold pt-5" style={{ color: "#03bd30" }}>
          SJDH-IMS
        </h1>
        <h2 className="ff-grenze">Inventory Management System</h2>
        <p className="py-3">UI Implementation, Front-end Development</p>
      </div>
      <hr />
      <div className="projdesc-intro py-5">
        <h2 className="pb-3">Introduction</h2>
        <p className="fw-light fs-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          minima accusamus expedita obcaecati vitae doloribus est aliquid magnam
          aliquam, iste sequi. Iure cupiditate rerum cum accusantium facilis
          odio nihil velit, laudantium expedita assumenda quasi obcaecati optio
          dolore unde harum! At et perspiciatis quas ut id cumque, placeat
          voluptatum officia aperiam, quidem non nostrum quisquam necessitatibus
          ad a inventore recusandae molestias. Dolor voluptatem excepturi iusto!
        </p>
      </div>
      <div className="projdesc-screenshots py-5">
        <h2 className="pb-3">Login Page</h2>
        <div className="row">
          <div className="col-6">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              rem nisi numquam? Asperiores est magnam porro excepturi voluptatem
              saepe vero perspiciatis eaque ipsa possimus pariatur quaerat,
              sequi, sunt ex? Blanditiis asperiores suscipit nesciunt vel!
            </p>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
      <div className="projdesc-tools py-5">
        <h2 className="pb-3">Tools I Used</h2>
        <div className="d-flex gap-3">
          <Tool
            name="JavaScript"
            icon="ri-javascript-fill"
            iconColor="#F7DF1E"
          />
          <Tool name="HTML 5" icon="ri-html5-fill" iconColor="#FFA500" />
          <Tool name="CSS" icon="ri-css3-fill" iconColor="#663399" />
          <Tool
            name="Bootstrap 5"
            icon="ri-bootstrap-fill"
            iconColor="#6f42c1"
          />
          <Tool name="Font Awesome" icon="ri-flag-2-fill" iconColor="#228AE6" />
          <Tool
            name="Excel JS"
            icon="ri-file-excel-2-fill"
            iconColor="#217346"
          />
          <div className="tool py-2">
            <div className="h-75 d-flex align-items-center justify-content-center">
              <img
                src={swalLogo}
                alt=""
                className="pb-0"
                style={{ maxHeight: "90%", maxWidth: "90%" }}
              />
            </div>
            <p className="my-auto">Sweet Alert 2</p>
          </div>
          <div className="tool py-2">
            <div className="h-75 d-flex align-items-center justify-content-center">
              <img
                src={chartJsLogo}
                alt=""
                className=""
                style={{ maxHeight: "90%", maxWidth: "90%" }}
              />
            </div>
            <p className="my-auto">Chart JS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sjdh;
