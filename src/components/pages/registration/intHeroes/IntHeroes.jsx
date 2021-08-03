import React, { Component } from 'react'
import Swal from "sweetalert2";
import axios from "axios";

import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";

import Regist from "assets/images/registration/regist.png";

export default class IntHeroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nama_lengkap: "",
        nomor_wa: "",
        domisili: "",
        usia: "",
        status: "",
        instansi: "",
        divisi1: "",
        divisi2: "",
        link_portfolio: "",
        cv: "",
        follow_ig: "",
        agreement: false,
      },
      errorForm: {},
      busy: "d-none",
      validated: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  async submitForm() {
    this.setState({ errorForm: {}, validated: "", busy: "d-block" });
    const payload = this.state.form;
    await axios
      .post("http://127.0.0.1:8000/api/regist-local-heroes", payload)
      .then((response) => {
        this.Toast.fire({
          icon: "success",
          title: response.data.message,
        });
      })
      .catch((error) => {
        this.Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
        this.setState({
          errorForm: error.response.data.errors || error.response.data.message,
          validated: false,
        });
      });
    this.setState({ busy: "d-none" });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    let formTemp = { ...this.state.form };
    formTemp[target.name] =
      target.name !== "agreement" ? value : event.target.checked;
    this.setState({
      form: { ...formTemp },
    });
  }

  handleSubmit(event) {
    if (!this.state.form.agreement) {
      this.Toast.fire({
        icon: "error",
        title: "You must check The Terms and Privacy Policy",
      });
    } else {
      this.submitForm();
    }
    event.preventDefault();
  }

  render() {
    let errorFullName;
    let errorNoWa;
    let errorUsia;
    let errorDomisili;
    let errorStatus;
    let errorInstansi;
    let errorDivisi1;
    let errorDivisi2;
    let errorPortfolio;
    let errorCv;
    let errorIg;
    let errorAgree;
    if (this.state.errorForm.nama_lengkap) {
      errorFullName = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.nama_lengkap}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.nomor_wa) {
      errorNoWa = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.nomor_wa}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.usia) {
      errorUsia = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.usia}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.domisili) {
      errorDomisili = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.domisili}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.status) {
      errorStatus = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.status}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.instansi) {
      errorInstansi = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.instansi}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.divisi1) {
      errorDivisi1 = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.divisi1}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.divisi2) {
      errorDivisi2 = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.divisi2}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.link_portfolio) {
      errorPortfolio = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.link_portfolio}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.cv) {
      errorCv = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.cv}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.follow_ig) {
      errorIg = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.follow_ig}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.agreement) {
      errorAgree = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.agreement}
        </Form.Control.Feedback>
      );
    }

    
    return (
      <>
        <Header {...this.props}></Header>

        <div
            id="jumbotron"
            className="jumbotron d-flex align-items-center"
            style={{ backgroundImage: `url(${Regist})` }}
          >
          <div className="container text-light">
            <div className="col-lg-8">
              <h1 className="display-6">Let's Grow With Us</h1>
            </div>
          </div>
        </div>

        <div id="local-heroes">
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
                  <Link to="/registration">Registration</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="mx-3" />
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Local Heroes
                </li>
              </ol>
            </nav>

            <Form validated={this.state.validated} onSubmit={this.handleSubmit} className="mb-3 form-wrap mx-auto">
              <Form.Group controlId="nama_lengkap" className="mb-5">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  name="nama_lengkap"
                  type="text"
                  placeholder="Enter Text Here"
                  value={this.state.form.nama_lengkap}
                  onChange={this.handleInputChange}
                />
                {errorFullName}
              </Form.Group>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group controlId="nomor_wa" className="mb-5">
                    <Form.Label>No.Telp</Form.Label>
                    <Form.Control
                      required
                      name="nomor_wa"
                      type="phone"
                      placeholder="Enter Number Here"
                      value={this.state.form.nomor_wa}
                      onChange={this.handleInputChange}
                    />
                    {errorNoWa}
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group controlId="usia" className="mb-5">
                    <Form.Label>Usia</Form.Label>
                    <Form.Control
                      required
                      name="usia"
                      type="number"
                      placeholder="Enter Number Here"
                      value={this.state.form.usia}
                      onChange={this.handleInputChange}
                    />
                    {errorUsia}
                  </Form.Group>
                </div>
              </div>
              <Form.Group controlId="domisili" className="mb-5">
                <Form.Label>Domisili</Form.Label>
                <Form.Control
                  required
                  name="domisili"
                  type="text"
                  placeholder="Enter Text Here"
                  value={this.state.form.domisili}
                  onChange={this.handleInputChange}
                />
                {errorDomisili}
              </Form.Group>
              <Form.Group controlId="status" className="mb-5">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  required
                  aria-label="Default select example"
                  name="status"
                  value={this.state.form.status}
                  onChange={this.handleInputChange}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="pelajar">Pelajar</option>
                  <option value="mahasiswa">Mahasiswa</option>
                  <option value="pekerja">Pekerja</option>
                  <option value="lainnya">Lainnya</option>
                </Form.Control>
                {errorStatus}
              </Form.Group>
              <Form.Group controlId="instansi" className="mb-5">
                <Form.Label>Instansi</Form.Label>
                <Form.Control
                  required
                  name="instansi"
                  type="text"
                  placeholder="Enter Text Here"
                  value={this.state.form.instansi}
                  onChange={this.handleInputChange}
                />
                {errorInstansi}
              </Form.Group>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group controlId="divisi1" className="mb-5">
                    <Form.Label>Divisi Pilihan Pertama</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      aria-label="Default select example"
                      name="divisi1"
                      value={this.state.form.divisi1}
                      onChange={this.handleInputChange}
                    >
                      <option value="" disabled>Select Dvisi</option>
                      <option value="Pengajar Bule">Pengajar Bule</option>
                      <option value="Fasilitator">Fasilitator</option>
                      <option value="Operasional">Operasional</option>
                      <option value="Media Sosial">Media Sosial</option>
                      <option value="Media Publikasi">Media Publikasi</option>
                      <option value="Desain Grafis">Desain Grafis</option>
                      <option value="Video Grafis">Video Grafis</option>
                    </Form.Control>
                    {errorDivisi1}
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group controlId="divisi2" className="mb-5">
                    <Form.Label>Divisi Pilihan Kedua</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      aria-label="Default select example"
                      name="divisi2"
                      value={this.state.form.divisi2}
                      onChange={this.handleInputChange}
                    >
                      <option value="" disabled>Select Dvisi</option>
                      <option value="Pengajar Bule">Pengajar Bule</option>
                      <option value="Fasilitator">Fasilitator</option>
                      <option value="Operasional">Operasional</option>
                      <option value="Media Sosial">Media Sosial</option>
                      <option value="Media Publikasi">Media Publikasi</option>
                      <option value="Desain Grafis">Desain Grafis</option>
                      <option value="Video Grafis">Video Grafis</option>
                    </Form.Control>
                    {errorDivisi2}
                  </Form.Group>
                </div>
              </div>
              <Form.Group controlId="link_portfolio" className="mb-5">
                <Form.Label>Link Portfolio (jika ada)</Form.Label>
                <Form.Control
                  name="link_portfolio"
                  type="text"
                  placeholder="Enter Text Here"
                  value={this.state.form.link_portfolio}
                  onChange={this.handleInputChange}
                />
                {errorPortfolio}
              </Form.Group>
              <Form.Group controlId="cv" className="mb-5">
                <Form.Label>Link CV</Form.Label>
                <Form.Control
                  required
                  name="cv"
                  type="text"
                  placeholder="Enter Text Here"
                  value={this.state.form.cv}
                  onChange={this.handleInputChange}
                />
                {errorCv}
              </Form.Group>
              <Form.Group controlId="follow_ig" className="mb-5">
                <Form.Label>Sudah Follow Instagram Cakrawala Bahasa</Form.Label>
                <Form.Control
                  as="select"
                  required
                  aria-label="Default select example"
                  name="follow_ig"
                  value={this.state.form.follow_ig}
                  onChange={this.handleInputChange}
                >
                  <option value="n">Belum</option>
                  <option value="y">Sudah</option>
                </Form.Control>
                {errorIg}
              </Form.Group>
              <div className="d-flex align-items-start">
                <input
                type="checkbox"
                name="agreement"
                id="gree"
                className="mr-3"
                checked={this.state.agreement}
                onChange={this.handleInputChange}/>
                <label for="gree">I agree to The Terms and Privacy Policy.</label>
              </div>
              {errorAgree}
              <Button
                variant="warning"
                type="submit"
                className="text-light mt-5 m-auto d-flex text-center w-100"
              >
                <span
                  className={`spinner-border text-light ${this.state.busy}`}
                  role="status"
                  aria-hidden="true"
                  style={{ marginRight: "20px" }}
                ></span>
                <span className="m-auto">Submit</span>
              </Button>
            </Form>
          </div>
        </div>

        <Footer {...this.props}></Footer>
      </> 
    )
  }
}
