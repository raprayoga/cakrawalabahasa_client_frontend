import React, { Component } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Pagination from "react-js-pagination";

import {
  Button
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";
import HorizontalNewsCard from "components/_module/horizontalNewsCard";
import TitleNewsLink from "components/_module/titleNewsLink";

import "components/pages/newsList/newsList.css";

export default class NewsList extends Component {
  constructor(props) {
    super(props);
    const queryParams = this.props.location.search
    this.state = {
      artikelPopulers: [],
      artikels: [],
      kategoriId: queryParams.split("=")[2],
      kategori: "",
      perPage: 10,
      currentPage: 1,
      totalItem: 0,
      artikelKategori: []
    };
    this.handleKategoriChange = this.handleKategoriChange.bind(this);    

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
    this.getArtikelKategori();
  }

  async handleKategoriChange(event) {
    const target = event.target;
    const id = target.dataset.id;
    await this.setState({
      kategoriId: id,
    });
    this.getArtikel();
    this.getArtikelKategori();
  }
  
  async handlePageChange(pageNumber) {
    await this.setState({
      currentPage: pageNumber,
    });
    this.getArtikel();
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  async getArtikelKategori() {
    await axios
      .get(`http://127.0.0.1:8000/api/artikel-kategori`)
      .then((resp) => {
        const kategori = resp.data.artikel_kategori.filter((kategori) => kategori.id == this.state.kategoriId)
        console.log(kategori)
        this.setState({
          artikelKategori: resp.data.artikel_kategori,
          kategori: kategori[0].artikel_kategori
        });
      })
      .catch((error) => {
        this.Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      });
  }

  async getArtikel() {
    const payload = {
      per_page: this.state.perPage,
      current_page: this.state.currentPage,
      kategori: this.state.kategoriId
    }
    await axios
      .post("http://127.0.0.1:8000/api/artikel-list", payload)
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
          artikels: datas,
          perPage: resp.data.per_page,
          currentPage: resp.data.current_page,
          totalItem: resp.data.total,
        });
      })
      .catch((error) => {
        this.Toast.fire({
          icon: "error",
          title: error.response.data.message ? error.response.data.message : error,
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

        <div id="news-list">
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
                <li className="breadcrumb-item active" aria-current="page">
                  {this.state.kategori.charAt(0).toUpperCase() + this.state.kategori.slice(1)}
                </li>
              </ol>
            </nav>

            <div className="row mb-5">
              {this.state.artikelKategori.map((kategori) => (
              <Link to={`/all-news?kategori=${kategori.artikel_kategori}&id=${kategori.id}`} key={kategori.id} className="kategori-link p-0">
                <Button variant="outline-warning" size="sm" className="kategori-button"
                  active={kategori.id == this.state.kategoriId}
                  data-id={kategori.id}
                  onClick={this.handleKategoriChange}
                >
                  {kategori.artikel_kategori}
                </Button>
              </Link>
              ))}
            </div>

            <div className="text-center my-5">
              <p>All posts in:</p>
              <h1>{this.state.kategori.charAt(0).toUpperCase() + this.state.kategori.slice(1)}</h1>
            </div>

            <div className="row">
              <div className="col-md-8">
              {this.state.artikels.map((artikel)=> (
                <div className="col-12 mb-3" key={artikel.id}>
                  <HorizontalNewsCard
                    imageClass="col-md-5"
                    textClass="col-md-7"
                    artikelData={artikel}
                  />
                </div>
              ))}
                <div className="col-12 mt-5">
                  <Pagination
                    activePage={this.state.currentPage}
                    itemsCountPerPage={this.state.perPage}
                    totalItemsCount={this.state.totalItem}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                    itemClass="page-item"
                    linkClass="page-link"
                    innerClass="pagination justify-content-center"
                  />
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
