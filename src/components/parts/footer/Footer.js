import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import LogoBrand from "assets/images/logo/logoBrand.jpg";
import { Dropdown } from "react-bootstrap";

import "components/parts/footer/footer.css";

import facebookIcon from "assets/images/icon/facebookIcon.png";
import instagramIcon from "assets/images/icon/instagramIcon.png";
import linkedinIcon from "assets/images/icon/linkedinIcon.png";
import youtubeIcon from "assets/images/icon/youtubeIcon.png";
import flagEnglish from "assets/images/icon/flag-english.png";
import flagIndonesia from "assets/images/icon/flag-indonesia.png";

export default function Footer() {
  return (
    <>
      <div className="footer-wrap container-fluid p-3 pt-5">
        <div className="row d-flex justify-content-around">
          <div className="col-6 col-md-2">
            <img
              src={LogoBrand}
              className="align-top logo-brand"
              alt="Cakrawala Bahasa Logo"
            />
            <div className="row mt-2" inline="true">
              <Dropdown>
                <FontAwesomeIcon icon={faGlobe} /> Eng
                <Dropdown.Toggle
                  split
                  variant="light"
                  id="dropdown-split-basic"
                  size="sm"
                  style={{ backgroundColor: "#fff" }}
                />
                <Dropdown.Menu>
                  <Dropdown.Item href="/">
                    <img
                      src={flagEnglish}
                      className="d-inline-block align-top icon"
                      alt="Youtube Icon"
                    />
                    English
                  </Dropdown.Item>
                  <Dropdown.Item href="/">
                    <img
                      src={flagIndonesia}
                      className="d-inline-block align-top icon"
                      alt="Youtube Icon"
                    />
                    Indonesia
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <Link className="text-decoration-none" to="/menu">
              <p className="menu text-secondary">Menu</p>
            </Link>
            <Link className="text-decoration-none" to="/our-program">
              <p className="text-secondary">Our Programs</p>
            </Link>
            <Link className="text-decoration-none" to="/news-channel">
              <p className="text-secondary">News Channel</p>
            </Link>
          </div>
          <div className="col-6 col-md-2 mt-3 mt-md-0">
            <Link className="text-decoration-none" to="/about-us">
              <p className="about text-secondary">About</p>
            </Link>
          </div>
          <div className="col-6 col-md-2 mt-3 mt-md-0">
            <Link className="text-decoration-none" to="/contact">
              <p className="contact text-secondary">Contact</p>
            </Link>
          </div>
          <div className="col-8 col-md-2 offset-md-2">
            <p className="follow-us text-secondary">Follow us:</p>
            <div className="row">
              <a
                href="https://mobile.facebook.com/cakrawalabahasaofficial/"
                className="text-decoration-none col-3"
                target="blank"
              >
                <img
                  src={facebookIcon}
                  className="d-inline-block align-top icon"
                  alt="facebook Icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/cakrawala-bahasa/"
                className="text-decoration-none col-3"
                target="blank"
              >
                <img
                  src={linkedinIcon}
                  className="d-inline-block align-top icon"
                  alt="LinkedIn Icon"
                />
              </a>
              <a
                href="https://www.instagram.com/cakrawalabahasa/"
                className="text-decoration-none col-3"
                target="blank"
              >
                <img
                  src={instagramIcon}
                  className="d-inline-block align-top icon"
                  alt="Instagram Icon"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCI3WvtmgNv2ifWBdiAGdWYA"
                className="text-decoration-none col-3"
                target="blank"
              >
                <img
                  src={youtubeIcon}
                  className="d-inline-block align-top icon"
                  alt="Youtube Icon"
                />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6 col-md-2">
            <small>Cakrawala Bahasa @2021</small>
          </div>
          <div className="col-6 col-md-2">
            <small>Terms and Privacy</small>
          </div>
        </div>
      </div>
    </>
  );
}
