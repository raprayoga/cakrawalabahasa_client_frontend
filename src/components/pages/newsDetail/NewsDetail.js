import React, { Component } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";

import "components/pages/newsDetail/newsDetail.css";

export default class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artikel: "",
      id: this.props.match.params.id,
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
    await axios
      .get(`http://127.0.0.1:8000/api/artikel/${this.state.id}`)
      .then((resp) => {
        this.setState({ artikel: resp.data.artikel });
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

        <div className="container custom-container">
          <img
            src={
              "http://127.0.0.1:8080/img/artikel/" + this.state.artikel.image
            }
            className="img-fluid"
            alt="Contact Us"
          />
          <div
            dangerouslySetInnerHTML={{ __html: this.state.artikel.artikel }}
          />
        </div>

        <Footer {...this.props}></Footer>
      </>
    );
  }
}
