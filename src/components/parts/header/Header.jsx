import React from "react";
import { Link } from "react-router-dom";

import "components/parts/header/header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

import LogoBrand from "assets/images/logo/logoBrand.jpg";
// import flagEnglish from "assets/images/icon/flag-english.png";
// import flagIndonesia from "assets/images/icon/flag-indonesia.png";

export default function Header(props) {
  return (
    <>
      <div className="container">
        <Navbar expand="md">
          <Navbar>
            <Link to="/">
              <img
                src={LogoBrand}
                className="d-inline-block align-top logo-brand"
                alt="Cakrawala Bahasa Logo"
              />
            </Link>
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="mr-auto">
              <NavDropdown title="Menu " id="basic-nav-dropdown">
                <Link to="/our-programs"> Our Program </Link>
                <Link to="/news"> News </Link>
                <Link to="/registration"> Registration </Link>
              </NavDropdown>
              <Link to="/about-us"> About </Link>
              <Link to="/contact"> Contact </Link>
            </Nav>
            <Form className="search-insert" inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
            {/* <FontAwesomeIcon
              className="d-none d-lg-block d-sm-none"
              icon={faGlobe}
            /> */}
            <Nav className="mr-auto">
              <Link to="/sign-up">Sign In</Link>
            </Nav>
            <Nav className="mr-auto">
              {/* <NavDropdown title="Eng" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">
                  <img
                    src={flagEnglish}
                    className="d-inline-block align-top icon"
                    alt="Youtube Icon"
                  />
                  English
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  <img
                    src={flagIndonesia}
                    className="d-inline-block align-top icon"
                    alt="Youtube Icon"
                  />
                  Indonesia
                </NavDropdown.Item>
              </NavDropdown> */}
              <Link to="/sign-up">
                <Button variant="warning" className="text-light">
                  Sign Up
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
