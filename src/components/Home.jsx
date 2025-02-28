import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home-styles.css";
import BassClef from "../assets/bass-clef.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container home-container px-4 px-lg-0">
      <h1 className="ff-grenze name center-on-sm">
        Ejay Balina
      </h1>
      <p className="m-0 py-2 center-on-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        alias, quasi minima voluptatem quia sed ducimus libero, nihil soluta,
        quos ratione facere odit omnis?
      </p>
      <div>
        <button
          type="button"
          className="btn hero-btn my-5 d-flex align-items-center justify-content-center"
          onClick={() => navigate("/about")}
        >
          Know me better
        </button>
      </div>
      <div className="d-flex align-items-center gap-3">
        <a href="" className="text-decoration-none text-light">
          <i className="ri-facebook-box-fill display-3 social"></i>
        </a>
        <a href="" className="text-decoration-none text-light">
          <i className="ri-instagram-fill display-3 social"></i>
        </a>
        <a href="" className="text-decoration-none text-light">
          <i className="ri-linkedin-box-fill display-3 social"></i>
        </a>
        <a href="" className="text-decoration-none text-light">
          <i className="ri-github-fill display-3 social"></i>
        </a>
      </div>

      <div className="home-image-container d-none d-lg-block">
        <img src={BassClef} alt="Bass Clef" draggable="false" />
      </div>
      <div className="home-image-container-sm d-block d-lg-none">
        <img src={BassClef} alt="Bass Clef" draggable="false" />
      </div>
    </div>
  );
}

export default Home;
