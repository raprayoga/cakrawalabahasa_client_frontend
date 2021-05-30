import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import LogoBrand from "assets/images/logoBrand.jpg";
import { Dropdown } from "react-bootstrap";

import "components/parts/footer/footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-wrap container-fluid p-3">
        <div className="row d-flex justify-content-around">
          <div className="col-6 col-md-2">
            <img
              src={LogoBrand}
              className="align-top logo-brand"
              alt="Cakrawala Bahasa Logo"
            />
            <div className="row mt-2" inline>
              <Dropdown>
                <FontAwesomeIcon icon={faGlobe} /> Eng
                <Dropdown.Toggle
                  split
                  variant="light"
                  id="dropdown-split-basic"
                  size="sm"
                />
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <Router>
              <Link className="text-decoration-none" to="/menu">
                <p className="menu text-secondary">Menu</p>
              </Link>
              <Link className="text-decoration-none" to="/our-program">
                <p className="text-secondary">Our Programs</p>
              </Link>
              <Link className="text-decoration-none" to="/news-channel">
                <p className="text-secondary">News Channel</p>
              </Link>
            </Router>
          </div>
          <div className="col-6 col-md-2">
            <Router>
              <Link className="text-decoration-none" to="/menu">
                <p className="about text-secondary">Abput</p>
              </Link>
            </Router>
          </div>
          <div className="col-6 col-md-2">
            <Router>
              <Link className="text-decoration-none" to="/menu">
                <p className="contact text-secondary">Contact</p>
              </Link>
            </Router>
          </div>
          <div className="col-6 col-md-2"></div>
          <div className="col-6 col-m-2"></div>
        </div>
      </div>
    </>
  );
}
