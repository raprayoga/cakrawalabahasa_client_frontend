import React, { Component } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import {
  Card
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";

import "components/pages/news/news.css";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artikelKategori: [],
      artikelFeatureds: [],
      artikelLatests: [],
    };

    this.Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  }

  componentDidMount() {
    this.getArtikelKategori();
    this.getArtikelFeatured();
    this.getArtikelLatest();
  }

  async getArtikelKategori() {
    await axios
      .get(`http://127.0.0.1:8000/api/artikel-kategori`)
      .then((resp) => {
        this.setState({
          artikelKategori: resp.data.artikel_kategori,
        });
      })
      .catch((error) => {
        this.Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      });
  }

  async getArtikelFeatured() {
    await axios
      .get(`http://127.0.0.1:8000/api/artikel-featured`)
      .then((resp) => {
        let datas = resp.data.artikel_featureds;
        datas.map((data, index) => {
          datas[index].linkJudul = data.artikel.judul.replace(/ /g, "-");
          datas[index].dateUpload = data.artikel.created_at.split("T")[0];
          datas[index].timeUpload = data.artikel.created_at
            .split("T")[1]
            .split(".000000Z")[0];
        });
        this.setState({
          artikelFeatureds: datas,
        });
      })
      .catch((error) => {
        this.Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      });
  }

  async getArtikelLatest() {
    await axios
      .get(`http://127.0.0.1:8000/api/artikel-latest`)
      .then((resp) => {
        let datas = resp.data.artikel_latests;
        datas.map((data, index) => {
          datas[index].linkJudul = data.judul.replace(/ /g, "-");
          datas[index].dateUpload = data.created_at.split("T")[0];
          datas[index].timeUpload = data.created_at
            .split("T")[1]
            .split(".000000Z")[0];
        });
        this.setState({
          artikelLatests: datas,
        });
      })
      .catch((error) => {
        this.Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      });
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>

        <div className="container mt-3">
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
              <li className="breadcrumb-item" aria-current="page">
                <p>News</p>
              </li>
            </ol>
          </nav>
        </div>

        <div className="container news-container">
          <h1>News Channel</h1>
          <div className="row mb-5">
            {this.state.artikelKategori.map((kategori) => (
            <Link to={`/news/${kategori.artikel_kategori}`} key={kategori.id} className="btn btn-outline-warning btn-sm kategori-button">
              {kategori.artikel_kategori}
            </Link>
            ))}
          </div>

          <h2>Latest News</h2>
          <div className="row">
          {this.state.artikelLatests.map((artikelLatest, index)=> (
          index === 0
            ?
            <div className="col-12 mb-3" key={artikelLatest.id}>
              <div className="row align-items-center">
                <div className="col-md-7">
                  <Card.Img
                    variant="top"
                    src={`http://127.0.0.1:8080/img/artikel/${artikelLatest.image}`}
                  />
                </div>
                <div className="col-md-4">
                  <Link
                    to={`/news-detail/${artikelLatest.id}/${artikelLatest.linkJudul}`}
                    style={{ textDecoration: "none" }}
                    className="text-secondary"
                  >
                    <h4>{artikelLatest.judul}</h4>
                  </Link>
                  <small className="font-size-sm">
                    {artikelLatest.dateUpload} {artikelLatest.timeUpload}
                  </small>
                  <p>{artikelLatest.text_lead}</p>
                </div>
              </div>
            </div>
            :
            <div className="col-md-4 mb-3" key={artikelLatest.id}>
              <Card.Img
                variant="top"
                src={`http://127.0.0.1:8080/img/artikel/${artikelLatest.image}`}
              />
              <Link
                to={`/news-detail/${artikelLatest.id}/${artikelLatest.linkJudul}`}
                style={{ textDecoration: "none" }}
                className="text-secondary"
              >
                <h4>{artikelLatest.judul}</h4>
              </Link>
              <small className="font-size-sm">
                {artikelLatest.dateUpload} {artikelLatest.timeUpload}
              </small>
              <p>{artikelLatest.text_lead}</p>
            </div>
          ))}
          </div>

          <h2>Featured</h2>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
              {this.state.artikelFeatureds.map((featured, index)=> (
                index < 4 &&
                <div className="col-md-6 mb-3" key={featured.artikel.id}>
                  <Card.Img
                    variant="top"
                    src={`http://127.0.0.1:8080/img/artikel/${featured.artikel.image}`}
                  />
                  <Link
                    to={`/news-detail/${featured.artikel.id}/${featured.linkJudul}`}
                    style={{ textDecoration: "none" }}
                    className="text-secondary"
                  >
                    <h4>{featured.artikel.judul}</h4>
                  </Link>
                  <small className="font-size-sm">
                    {featured.dateUpload} {featured.timeUpload}
                  </small>
                  <p>{featured.artikel.text_lead}</p>
                </div>
              ))}
              </div>
            </div>
            <div className="col-md-4">
            {this.state.artikelFeatureds.map((featured, index)=> (
              index >= 4 &&
              <div className="mb-4" key={featured.artikel.id}>
                <Link
                  to={`/news-detail/${featured.artikel.id}/${featured.linkJudul}`}
                  style={{ textDecoration: "none" }}
                  className="text-secondary"
                >
                  <h4>{featured.artikel.judul}</h4>
                </Link>
                <small className="font-size-sm">
                  {featured.dateUpload} {featured.timeUpload}
                </small>
              </div>
            ))}
            </div>
          </div>
        </div>

        <Footer {...this.props}></Footer>
      </>
    )
  }
}
