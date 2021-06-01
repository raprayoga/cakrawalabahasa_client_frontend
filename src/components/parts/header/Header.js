import React from "react";
import "components/parts/header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

import LogoBrand from "assets/images/logo/logoBrand.jpg";
import flagEnglish from "assets/images/icon/flag-english.png";
import flagIndonesia from "assets/images/icon/flag-indonesia.png";

export default function Header(props) {
  return (
    <>
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img
              src={LogoBrand}
              className="d-inline-block align-top logo-brand"
              alt="Cakrawala Bahasa Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="mr-auto">
              <NavDropdown title="Menu " id="basic-nav-dropdown">
                <NavDropdown.Item href="/our-programs">
                  Our Programs
                </NavDropdown.Item>
                <NavDropdown.Item href="/news">News</NavDropdown.Item>
                <NavDropdown.Item href="/registration">
                  Registration
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about-us"> About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Form className="search-insert" inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
            <FontAwesomeIcon className="d-none d-md-block" icon={faGlobe} />
            <Nav className="mr-auto">
              <NavDropdown title="Eng" id="basic-nav-dropdown">
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
              </NavDropdown>
              <Button variant="warning" className="text-light">
                Sign In
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
