import React from "react";
import { NavLink, Link } from "react-router-dom";
import blackLogo from "../images/logo/10KG BLACK trimmed.png";
import personIcon from "../images/icons/person-fill.svg";
import cartIcon from "../images/icons/cart-fill.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={blackLogo} height="30" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fs-5 fw-medium">
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  className="nav-link"
                  to="/Shop"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  className="nav-link"
                  to="/About"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarIcon">
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <img
                    src={personIcon}
                    alt="Bootstrap"
                    width="24"
                    height="24"
                  />
                </NavLink>
              </li>
              <li className="nav-item ms-1">
                <NavLink to="/" className="nav-link">
                  <img src={cartIcon} alt="Bootstrap" width="24" height="24" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
