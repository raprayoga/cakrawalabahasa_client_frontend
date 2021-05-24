import React, { Component } from "react";

import Header from "components/parts/header/Header";
import Hero from "assets/images/hero.png";
import "components/pages/landingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div class="jumbotron" style={{ backgroundImage: `url(${Hero})` }}>
          <h1 class="display-4">Mari Bergabung Bersama Kami</h1>
          <p class="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr class="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a class="btn btn-primary btn-lg" href="/program" role="button">
            Learn more
          </a>
        </div>
      </>
    );
  }
}
