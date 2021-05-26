import React, { Component } from "react";

import Header from "components/parts/header/Header";
import Hero from "assets/images/hero.png";
import "components/pages/landingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className="jumbotron" style={{ backgroundImage: `url(${Hero})` }}>
          <div className="container text-light pt-5">
            <div className="col-lg-8">
              <h1 className="display-5">Mari Bergabung Bersama Kami!</h1>
            </div>
            <div className="col-lg-5 mt-5">
              <p>
                Selamat datang di situs resmi Cakrawala Bahasa!
                Temukan layanan bahasa sesuai kebutuhanmu. 
              </p>
            </div>
              <a className="btn btn-primary text-light  mt-3" href="/registration" role="button">
                Registration
              </a>
          </div>
        </div>
      </>
    );
  }
}
