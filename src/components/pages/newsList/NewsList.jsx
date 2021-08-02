import React, { Component } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import { Link } from "react-router-dom";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HorizontalNewsCard from "components/_module/horizontalNewsCard";
// import VerticalNewscard from "components/_module/verticalNewscard";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";

export default class NewsList extends Component {
  constructor(props) {
    super(props);
    const queryParams = this.props.location.search
    this.state = {
      artikels: [],
      kategoriId: queryParams.split("=")[2],
      kategori: "",
      perPage: 10,
      currentPage: 1, 
      totalPage: ''
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
          kategori: resp.data.kategori.artikel_kategori
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
            <div className="row">
              <div className="col-md-9">
              {this.state.artikels.map((artikel)=> (
                <div className="col-12 mb-3" key={artikel.id}>
                  <HorizontalNewsCard
                    imageClass="col-md-5"
                    textClass="col-md-7"
                    artikelData={artikel}
                  />
                </div>
              ))}
              </div>
            </div>
            <div className="col-md-3">

            </div>
          </div>
        </div>

        <Footer {...this.props}></Footer>
      </>
    );
  }
}
