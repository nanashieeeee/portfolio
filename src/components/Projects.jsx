import React from "react";
import { useNavigate } from "react-router-dom";
import sjdhShowcase from "../assets/sjdh-ims.gif";
import hoodEpcShowcase from "../assets/hood-epc-showcase_1.gif";
import hoodEpcVid from "../assets/hood-epc-vid.mp4"
import "../css/Project-styles.css";

function Project() {
  const navigate = useNavigate();
  return (
    <div className="container" id="projectContainer">
      <div className="py-5">
        <h1 className="ff-grenze display-2 fw-semibold color-scarlet">
          Projects
        </h1>
      </div>

      <div className="row py-5">
        <div className="col-12 col-lg-6">
          <img
            src={sjdhShowcase}
            alt="sjdh-ims-showcase"
            className="border"
            style={{ height: "350px" }}
          />
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center">
          <div className="py-2 px-1">
            <h3 className="fw-semibold fs-2">UI implementation for SJDH-IMS</h3>
            <p className="lead">
              San Jose District Hospital Inventory Management System
            </p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui labore inventore quasi magnam saepe, neque voluptatibus totam
              amet, iste debitis reiciendis ipsa, beatae harum assumenda.
              Voluptates perspiciatis asperiores soluta possimus cumque quidem
              quo mollitia quia accusantium, magni enim a debitis labore dolorum
              impedit repudiandae consequatur molestiae repellendus corporis
              provident?
            </p>
            <button
              className="btn project-button"
              onClick={() => navigate("/sjdh")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row py-5">
        <div className="col-12 col-lg-6 d-flex align-items-center">
          <div className="py-2 px-1">
            <h3 className="fw-semibold fs-2">Landing page for Hood-EPC</h3>
            <p className="lead">Landing page for a construction company</p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui labore inventore quasi magnam saepe, neque voluptatibus totam
              amet, iste debitis reiciendis ipsa, beatae harum assumenda.
              Voluptates perspiciatis asperiores soluta possimus cumque quidem
              quo mollitia quia accusantium, magni enim a debitis labore dolorum
              impedit repudiandae consequatur molestiae repellendus corporis
              provident?
            </p>
            <button className="btn project-button">Learn More</button>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          
          <img
            src={hoodEpcShowcase}
            alt="hood-epc-showcase"
            className="border"
            style={{ height: "350px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
