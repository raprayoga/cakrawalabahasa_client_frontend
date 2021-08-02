import React, { Component } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import {
  Card,
  Carousel,
  Button
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";
import HorizontalNewsCard from "components/_module/horizontalNewsCard";
import VerticalNewscard from "components/_module/verticalNewscard";
import TitleNewsLink from "components/_module/titleNewsLink";

import "components/pages/news/news.css";

function CarouselItem(props) {
  let dokumentasi = props.dokumentasi;
  const items = dokumentasi.filter((dokumen, index) => index < 5).map((dokumen, index) => 
      index === 0
      ?
      <div className="col-6 mb-3" key={index}>
        <div className="col-md-12 container">
          <Card.Img
            variant="top"
            src={`http://127.0.0.1:8080/img/dokumentasi/${dokumen.image}`}
          />
        </div>
      </div>
      :
      <div className="col-3 mb-3" key={index}>
        <div className="col-md-12 container">
          <Card.Img
            variant="top"
            src={`http://127.0.0.1:8080/img/dokumentasi/${dokumen.image}`}
          />
        </div>
      </div>
    );
  return (
    items
  );
}

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artikelKategori: [],
      artikelFeatureds: [],
      artikelLatests: [],
      dokumentasis: [],
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
    this.getDoumentasi();
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
          datas[index].artikel.linkJudul = data.artikel.judul.replace(/ /g, "-");
          datas[index].artikel.dateUpload = data.artikel.created_at.split("T")[0];
          datas[index].artikel.timeUpload = data.artikel.created_at
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
      .get(`http://127.0.0.1:8000/api/artikel`)
      .then((resp) => {
        let datas = resp.data.artikels;
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

  async getDoumentasi() {
    await axios
      .get(`http://127.0.0.1:8000/api/dokumentasi`)
      .then((resp) => {
        let datas = resp.data.dokuemntasi_batchs;
        this.setState({
          dokumentasis: datas,
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

        <div id="news-channel">
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

          <div className="container">
            <h1>News Channel</h1>
            <div className="row mb-5">
              {this.state.artikelKategori.map((kategori) => (
              <Link to={`/news-list?kategori=${kategori.artikel_kategori}&id=${kategori.id}`} key={kategori.id} className="kategori-link p-0">
                <Button variant="outline-warning" size="sm" className="kategori-button">
                  {kategori.artikel_kategori}
                </Button>
              </Link>
              ))}
            </div>

            <h2>Latest News</h2>
            <div className="row">
            {this.state.artikelLatests.map((artikelLatest, index)=> (
            index === 0
              ?
              <div className="col-12 mb-3" key={artikelLatest.id}>
                <HorizontalNewsCard
                  imageClass="col-md-7"
                  textClass="col-md-5"
                  artikelData={artikelLatest}
                />
              </div>
              :
              <div className="col-md-4 mb-3" key={artikelLatest.id}>
                <VerticalNewscard
                  artikelData={artikelLatest}
                />
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
                    <VerticalNewscard
                      artikelData={featured.artikel}
                    />
                  </div>
                ))}
                </div>
              </div>
              <div className="col-md-4">
              {this.state.artikelFeatureds.map((featured, index)=> (
                index >= 4 &&
                <TitleNewsLink
                  artikelData={featured.artikel}
                />
              ))}
              </div>
            </div>
          </div>

          <div className="dokumentasi py-3 my-5">
            <div className="container">
              <h2 className="my-4 text-light">Dokumentations</h2>
              <Carousel>
              {this.state.dokumentasis.map((dokumentasi) => (
                <Carousel.Item key={dokumentasi.id}>
                  <h5 className="text-light">{dokumentasi.judul}</h5>
                  <div className="row">
                    <CarouselItem dokumentasi={dokumentasi.dokumentasi} />
                  </div>
                </Carousel.Item>
              ))}
              </Carousel>
            </div>
          </div>
        </div>

        <Footer {...this.props}></Footer>
      </>
    )
  }
}
