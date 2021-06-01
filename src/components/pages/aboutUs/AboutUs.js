import React, { Component } from "react";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";

import Hero from "assets/images/aboutUs/hero.png";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>

        <div
          id="jumbotron"
          className="jumbotron d-flex align-items-center"
          style={{ backgroundImage: `url(${Hero})` }}
        ></div>

        <Footer {...this.props}></Footer>
      </>
    );
  }
}
