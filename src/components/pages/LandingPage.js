import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Header from "components/parts/header/Header";
import Hero from "assets/images/hero.png";
import Program1 from "assets/images/our_program1.png";
import Program2 from "assets/images/our_program2.png";
import Program3 from "assets/images/our_program3.png";
import "components/pages/landingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>

        <div
          id="jumbotron"
          className="jumbotron d-flex align-items-center"
          style={{ backgroundImage: `url(${Hero})` }}
        >
          <div className="container text-light">
            <div className="col-lg-8">
              <h1 className="display-5">Mari Bergabung Bersama Kami!</h1>
            </div>
            <div className="col-lg-5 mt-5">
              <p>
                Selamat datang di situs resmi Cakrawala Bahasa! Temukan layanan
                bahasa sesuai kebutuhanmu.
              </p>
            </div>
            <a
              className="btn btn-warning text-light mt-3"
              href="/registration"
              role="button"
            >
              Registration
            </a>
          </div>
        </div>

        <div className="our-program">
          <div className="container">
            <h2 className="mb-4">Our Program</h2>
            <div className="row program-list text-light">
              <div className="col-12 col-md-8">
                <div className="image-program p-2">
                  <img
                    src={Program1}
                    className="program"
                    alt="React Bootstrap logo"
                  />
                  <div className="overlay"></div>
                  <div className="caption">
                    <h3>Fluid jumbotron</h3>
                    <p>
                      This is a modified jumbotron that occupies the entire
                      horizontal space of its parent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="row pb-2">
                  <div className="col-12">
                    <div className="image-program p-2">
                      <img
                        src={Program2}
                        className="img-fluid program"
                        alt="React Bootstrap logo"
                      />
                      <div className="overlay"></div>
                      <div className="caption">
                        <h3>Fluid jumbotron</h3>
                        <p>
                          This is a modified jumbotron that occupies the entire
                          horizontal space of its parent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-12">
                    <div className="image-program p-2">
                      <img
                        src={Program3}
                        className="img-fluid program"
                        alt="React Bootstrap logo"
                      />
                      <div className="overlay"></div>
                      <div className="caption">
                        <h3>Fluid jumbotron</h3>
                        <p>
                          This is a modified jumbotron that occupies the entire
                          horizontal space of its parent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-2 mt-md-4">
              <div className="col-12 program-more">
                <Router>
                  <Link to="/our-program">
                    Show More <FontAwesomeIcon icon={faCaretRight} />
                  </Link>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
