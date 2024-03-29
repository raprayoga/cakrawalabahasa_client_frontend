import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";

import Hero from "assets/images/aboutUs/hero.png";
import Social from "assets/images/aboutUs/social.png";
import Economy from "assets/images/aboutUs/economy.png";
import Study from "assets/images/aboutUs/study.png";
import Risqy from "assets/images/aboutUs/risqy.png";
import Fachry from "assets/images/aboutUs/fachry.png";
import Ilham from "assets/images/aboutUs/ilham.png";
import Nura from "assets/images/aboutUs/nura.png";
import Bibit from "assets/images/aboutUs/bibit.png";
import Adilah from "assets/images/aboutUs/adilah.png";
import "components/pages/aboutUs/aboutUs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.state = {
      numberOfSlide: null,
    };
  }

  componentDidMount() {
    const numberOfSlide = this.numberOfSlidesToShow();
    this.setState({ numberOfSlide: numberOfSlide });
  }
  numberOfSlidesToShow() {
    if (window.matchMedia("(min-width: 992px)").matches) return 2;
    else return 1;
  }

  next() {
    this.slider.slickNext();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.numberOfSlide,
      slidesToScroll: 1,
    };
    return (
      <>
        <Header {...this.props}></Header>

        <div
          id="jumbotron"
          className="jumbotron d-flex align-items-center mb-5"
          style={{ backgroundImage: `url(${Hero})` }}
        ></div>

        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} />
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} className="mx-3" />
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>

          <h2 className="mb-5">Profil</h2>
          <p>
            Cakrawala Bahasa didirikan sejak tahun 2019 oleh Mahasiswa
            Universitas Indonesia, seiring perkembangan Cakrawala Bahasa
            digiatkan oleh berbagai Mahasiswa Indonesia yang menempuh studi di
            dalam dan di luar negeri untuk memberikan pendidikan dan layanan
            bahasa berkualitas sekaligus mendukung tujuan pembangunan
            berkelanjutan atau SDG's di bidang pertumbuhan ekonomi dan kualitas
            pendidikan.
          </p>
          <p>
            Cakrawala Bahasa merupakan komunitas dan platform belajar yang
            bergerak di bidang pendidikan bahasa. Melalui program-program,
            Cakrawala Bahasa menyediakan berbagai layanan belajar dan jasa
            bahasa dengan harga yang terjangkau. Selain itu, Cakrawala Bahasa
            juga mewadahi relawan yang peduli terhadap pendidikan bahasa untuk
            memberikan layanan belajar bahasa bagi yatim dan dhuafa.
          </p>

          <h2 className="my-5">Latar Belakang</h2>
          <p>
            Cakrawala Bahasa berawal dari sebua mimpi besar founder kami yaitu
            "menjembatani seluruh guru bahasa dan murid di seluruh dunia untuk
            meruntuhkan setiap batasan dalam pebelajaran bahasa baik secara
            wilayah, budaya maupun kelas sosial". Impian tersebut berlandaskan
            kepada tiga faktor yaitu sosial, pendidikan, dan ekonomi
          </p>

          <div className="row mt-5" id="pilar">
            <div className="col-sm-4 text-center">
              <img
                src={Social}
                className="img-fluid mb-4"
                alt="social factor"
              />
              <h4>Sosial</h4>
              <p>
                Potensi PendudukUsia Muda <br />
                (BPS, 2021)
              </p>
            </div>
            <div className="col-sm-4 text-center">
              <img
                src={Economy}
                className="img-fluid mb-4"
                alt="economy factor"
              />
              <h4>Ekonomi</h4>
              <p>
                Kemampuan bahasa menentukan karir (Unniversity College Londodn,
                2011)
                <br />
                Tren bahasa meningkat (BPS, 2016)
                <br />
                Ekonomi menengah meningkat (World Bank, 2020)
              </p>
            </div>
            <div className="col-sm-4 text-center">
              <img src={Study} className="img-fluid mb-4" alt="study factor" />
              <h4>Pendidikan</h4>
              <p>
                Tingkat literasi Indonesia (UNESCO, 2016)
                <br />
                Kesenjangan pendidikan di Indonesia(PISA, 2019)
              </p>
            </div>
          </div>
        </div>

        <div id="history" className="my-5 py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h2>Sejarah</h2>
              </div>
              <div className="col-md-9" id="desktop-view-histoy">
                <div className="row">
                  <div className="col-md-4">
                    <div className="circle-orange my-4">
                      <div className="line"></div>
                      <div className="circle-orange"></div>
                    </div>
                    <p>
                      Start-up penddikan bahasa yang didirikan oleh mahasiswa
                      FIB UI dan menyediakan berbagai layanan kebutuhan bahasa
                      dimulai dari Privat Bahasa
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="circle-orange my-4"></div>
                    <p>
                      Start-up pendidikan bahasa berbasis komunitas yang
                      digiatkan oleh mahasiswa Indonesia di dalam dan di luar
                      negeri, menyediakan berbagai layanan kebutuhan bahasa dan
                      juga beasiswa pendidikan bagi kalangan underprivileged
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="circle-orange my-4"></div>
                    <p>
                      Start-up pendidikan bahasa berkualitas dengan tutor
                      kompeten disertai native speaker dari berbagai negara
                      serta menyediakan berbagai layanan kebutuhan bahasa
                      sekaligus memberikan beasiswa pendidikan bagi kalangan
                      underprivileged
                    </p>
                  </div>
                </div>
              </div>
              <div id="mobile-view-histoy">
                <div className="row">
                  <div className="col-6 d-flex align-items-center">
                    <div className="circle-orange my-4">
                      <div className="line"></div>
                      <div className="circle-orange"></div>
                    </div>
                  </div>
                  <div className="col-6">
                    <p>
                      Start-up penddikan bahasa yang didirikan oleh mahasiswa
                      FIB UI dan menyediakan berbagai layanan kebutuhan bahasa
                      dimulai dari Privat Bahasa.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 d-flex align-items-center">
                    <div className="circle-orange my-4"></div>
                  </div>
                  <div className="col-6">
                    <p>
                      Start-up pendidikan bahasa berbasis komunitas yang
                      digiatkan oleh mahasiswa Indonesia di dalam dan di luar
                      negeri, menyediakan berbagai layanan kebutuhan bahasa dan
                      juga beasiswa pendidikan bagi kalangan underprivileged.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 d-flex align-items-center">
                    <div className="circle-orange my-4"></div>
                  </div>
                  <div className="col-6">
                    <p>
                      Start-up pendidikan bahasa berkualitas dengan tutor
                      kompeten disertai native speaker dari berbagai negara
                      serta menyediakan berbagai layanan kebutuhan bahasa
                      sekaligus memberikan beasiswa pendidikan bagi kalangan
                      underprivileged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5 py-5">
          <div>
            <h2 className="mb-4">Our Team</h2>
            <div className="row">
              <div className="col-11">
                <Slider ref={(c) => (this.slider = c)} {...settings}>
                  <div className="px-1 card-slider">
                    <div className="card">
                      <div className="row">
                        <img
                          className="col-6 img-fluid"
                          src={Risqy}
                          alt="Card cap"
                        />
                        <div className="col-6 card-body">
                          <h5 className="card-title">Rizqy Maulana Hakim</h5>
                          <hr />
                          <p className="card-text">
                            Founder & CEO of Cakrawala Bahasa
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 card-slider">
                    <div className="card">
                      <div className="row">
                        <img
                          className="col-6 img-fluid"
                          src={Fachry}
                          alt="Card cap"
                        />
                        <div className="col-6 card-body">
                          <h5 className="card-title">Fachry Shandikla Iman</h5>
                          <hr />
                          <p className="card-text">
                            Co-Founder & CTO of Cakrawala Bahasa
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 card-slider">
                    <div className="card">
                      <div className="row">
                        <img
                          className="col-6 img-fluid"
                          src={Ilham}
                          alt="Card cap"
                        />
                        <div className="col-6 card-body">
                          <h5 className="card-title">Ilham Taufik</h5>
                          <hr />
                          <p className="card-text">COO of Cakrawala Bahasa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 card-slider">
                    <div className="card">
                      <div className="row">
                        <img
                          className="col-6 img-fluid"
                          src={Bibit}
                          alt="Card cap"
                        />
                        <div className="col-6 card-body">
                          <h5 className="card-title">Bibit Bimantoro</h5>
                          <hr />
                          <p className="card-text">CFO of Cakrawala Bahasa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 card-slider">
                    <div className="card">
                      <div className="row">
                        <img
                          className="col-6 img-fluid"
                          src={Adilah}
                          alt="Card cap"
                        />
                        <div className="col-6 card-body">
                          <h5 className="card-title">Adilah Nurul Silmi</h5>
                          <hr />
                          <p className="card-text">CAO of Cakrawala Bahasa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 card-slider">
                    <div className="card">
                      <div className="row">
                        <img
                          className="col-6 img-fluid"
                          src={Nura}
                          alt="Card cap"
                        />
                        <div className="col-6 card-body">
                          <h5 className="card-title">Nura Amalia</h5>
                          <hr />
                          <p className="card-text">CMO of Cakrawala Bahasa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="col-1">
                <div className="btn btn-slider-next d-flex" onClick={this.next}>
                  <FontAwesomeIcon
                    className="d-flex align-self-center"
                    size="5x"
                    icon={faChevronRight}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer {...this.props}></Footer>
      </>
    );
  }
}
