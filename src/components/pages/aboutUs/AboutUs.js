import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";

import Hero from "assets/images/aboutUs/hero.png";
import Social from "assets/images/aboutUs/social.png";
import Economy from "assets/images/aboutUs/economy.png";
import Study from "assets/images/aboutUs/study.png";
import "components/pages/aboutUs/aboutUs.css";

export default class AboutUs extends Component {
  render() {
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
            <ol class="breadcrumb">
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} />
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} className="mx-3" />
              </li>
              <li class="breadcrumb-item active" aria-current="page">
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

        <Footer {...this.props}></Footer>
      </>
    );
  }
}
