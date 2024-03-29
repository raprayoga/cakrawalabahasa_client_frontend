import React, { Component } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import { Link } from "react-router-dom";
import { faChevronRight, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";
import TitleNewsLink from "components/_module/TitleNewsLink";

import FB from "assets/images/newsDetail/facebook.png";
import Share from "assets/images/newsDetail/share.png";
import Twitter from "assets/images/newsDetail/twitter.png";
import WA from "assets/images/newsDetail/whatsapp.png";

import "components/pages/news/newsDetail/newsDetail.css";

export default class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artikelPopulers: [],
      artikel: "",
      kategori: "",
      id: this.props.match.params.id,
      dateUpload: "",
      timeUpload: "",
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
    this.getArtikel();
    this.getArtikelPopuler();
  }

  UNSAFE_componentWillMount() {
    this.props.history.listen(async (location) => {
      await this.setState({
        id: location.pathname.split("/")[3],
      });
      this.getArtikel();
      this.getArtikelPopuler();
    });
  }

  async getArtikel() {
    await axios
      .get(`http://127.0.0.1:8000/api/artikel/${this.state.id}`)
      .then((resp) => {
        const artikel = resp.data.artikel
        this.setState({
          artikel: artikel,
          dateUpload: artikel.created_at.split("T")[0],
          timeUpload: artikel.created_at
            .split("T")[1]
            .split(".000000Z")[0],
          kategori: artikel.artikel_kategori
        });
      })
      .catch((error) => {
        this.Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      });
  }

  async getArtikelPopuler() {
    await axios
      .get("http://127.0.0.1:8000/api/artikel-populer")
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
          artikelPopulers: datas,
        });
      })
      .catch((error) => {
        this.Toast.fire({
          icon: "error",
          title: error.response.data.message ? error.response.data.message : error,
        });
      });
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>

        <div id="news-detail">
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
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="mx-3" />
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <Link to={`/news/list?kategori=${this.state.kategori.artikel_kategori}&id=${this.state.kategori.id}`}>
                  {this.state.kategori.artikel_kategori}
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="mx-3" />
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {this.state.artikel.judul}
                </li>
              </ol>
            </nav>
          </div>

          <div className="container">

            <div className="row">
              <div className="col-md-8">
                <div className="row mb-3">
                  <h2>{this.state.artikel.judul}</h2>
                </div>
                <div className="row share-button">
                  <img src={Share} className="img-fluid" alt="share" />
                  <a
                    target="blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    className="fb-xfbml-parse-ignore"
                  >
                    <img src={FB} className="img-fluid" alt="facebook share" />
                  </a>
                  <a
                    target="blank"
                    href={`https://twitter.com/share?ref_src=${window.location.href}`}
                    data-show-count="false"
                  >
                    <img src={Twitter} className="img-fluid" alt="twitter share" />
                  </a>
                  <a href={`whatsapp://send?text=${window.location.href}`} data-action="share/whatsapp/share">
                    <img src={WA} className="img-fluid" alt="whatsapp share" />
                  </a>
                </div>

                <div className="row mt-4 mb-3">
                  <img
                    src={
                      "http://127.0.0.1:8080/img/artikel/" + this.state.artikel.image
                    }
                    className="img-fluid"
                    alt="Contact Us"
                  />
                </div>
                <p className="author my-0"><FontAwesomeIcon icon={faUser} />  {this.state.artikel.author}</p>
                <small className="font-size-sm">
                  {this.state.dateUpload} {this.state.timeUpload}
                </small>

                <div className="row my-3">
                  <div
                    dangerouslySetInnerHTML={{ __html: this.state.artikel.artikel }}
                  />
                </div>

                <div className="row share-button">
                  <img src={Share} className="img-fluid" alt="share" />
                  <a
                    target="blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    className="fb-xfbml-parse-ignore"
                  >
                    <img src={FB} className="img-fluid" alt="facebook share" />
                  </a>
                  <a
                    target="blank"
                    href="https://twitter.com/share?ref_src=https://news.detik.com"
                    data-show-count="false"
                  >
                    <img src={Twitter} className="img-fluid" alt="twitter share" />
                  </a>
                  <a href={`whatsapp://send?text=${window.location.href}`} data-action="share/whatsapp/share">
                    <img src={WA} className="img-fluid" alt="whatsapp share" />
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <h5 className="mb-5">Artikel Terpopuler</h5>
                {this.state.artikelPopulers.map((populer)=> (
                  <TitleNewsLink
                    artikelData={populer}
                    key={populer.id}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        <Footer {...this.props}></Footer>
      </>
    );
  }
}
