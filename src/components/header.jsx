import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg p-3 px-5"
      
    >
      <div className="container">
        <a className="navbar-brand text-light fs-2 ff-grenze" href="#">
          Ejay Balina
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="ri-menu-line text-light fs-1 burger"></i>
        </button>
        <div className="collapse navbar-collapse py-3 py-lg-0" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
            <Link className="nav-link text-light" to="/about">
              About
            </Link>
            <Link className="nav-link text-light" to="/projects">
              Projects
            </Link>
            <Link className="nav-link text-light" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
