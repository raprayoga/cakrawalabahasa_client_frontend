import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";

import Hero from "assets/images/landingPage/hero.png";
import Program1 from "assets/images/landingPage/our_program1.png";
import Program2 from "assets/images/landingPage/our_program2.png";
import Program3 from "assets/images/landingPage/our_program3.png";
import "components/pages/landingPage/landingPage.css";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artikels: [],
    };
  }

  componentDidMount() {
    this.getArtikel();
  }

  async getArtikel() {
    await axios.get("http://127.0.0.1:8000/api/artikel").then((resp) => {
      let datas = resp.data.artikels;
      datas.map((data, index) => {
        datas[index].linkJudul = data.judul.replace(/ /g, "-");
      });
      this.setState({ artikels: datas });
    });
  }

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
                  <img src={Program1} className="img-program" alt="Program 1" />
                  <div className="overlay"></div>
                  <div className="caption">
                    <h3>Privat Bahasa</h3>
                    <p>
                      Belajar bahasa secara privat secara online atau offline
                      dengan berbagai pilihan paket dan sesi yang memudahkan
                      pembelajaran.
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
                        className="img-fluid img-program"
                        alt="Program 2"
                      />
                      <div className="overlay"></div>
                      <div className="caption">
                        <h3>Kelas Reguler</h3>
                        <p>
                          Program kelas bahasa secara online selama 8 kali
                          pertemuan dalam satu bulan.
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
                        className="img-fluid img-program"
                        alt="Program 3"
                      />
                      <div className="overlay"></div>
                      <div className="caption">
                        <h3>Membership Program</h3>
                        <p>
                          Kami menyediakan berbagai kegiatan menarik melalui
                          Membership Program Cakrawala Bahasa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-2 mt-md-4">
              <div className="col-12 link-more">
                <Link to="/our-programs">
                  Show More <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="news pt-4">
          <div className="container">
            <h2 className="my-4 text-light">News</h2>
            <div className="row">
              {this.state.artikels.map((artikel) => (
                <div className="col-md-4 mb-3" key={artikel.id}>
                  <Card style={{ backgroundColor: "#1D2951" }} text="white">
                    <Card.Img
                      variant="top"
                      src={"http://127.0.0.1:8080/img/artikel/" + artikel.image}
                    />
                    <Card.Body>
                      <Link
                        to={`/news-detail/${artikel.id}/${artikel.linkJudul}`}
                        style={{ textDecoration: "none" }}
                        className="text-light"
                      >
                        <Card.Title>{artikel.judul}</Card.Title>
                      </Link>

                      <Card.Text>{artikel.text_lead}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            <div className="row mt-2 mt-md-4">
              <div className="col-12 link-more">
                <Link to="/news">
                  Show More <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer {...this.props}></Footer>
      </>
    );
  }
}
