import React, { Component } from 'react'
import Swal from "sweetalert2";
import axios from "axios";

import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";

import Regist from "assets/images/registration/regist.png";

import "components/pages/registration/intHeroes/intHeroes.css";

export default class IntHeroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        full_name: "",
        wa_number: "",
        nationality: "",
        age: "",
        status: "",
        language_speake: "",
        language_teach: "",
        divsion: "",
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
    let errorWaNumber;
    let errorAge;
    let errorNationality;
    let errorStatus;
    let errorLanguageSpeake;
    let errorLanguageTeach;
    let errorDivsion;
    let errorIg;
    let errorAgree;
    if (this.state.errorForm.full_name) {
      errorFullName = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.full_name}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.wa_number) {
      errorWaNumber = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.wa_number}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.age) {
      errorAge = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.age}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.nationality) {
      errorNationality = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.nationality}
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
    if (this.state.errorForm.language_speake) {
      errorLanguageSpeake = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.language_speake}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.language_teach) {
      errorLanguageTeach = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.language_teach}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.divsion) {
      errorDivsion = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.divsion}
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

        <div id="int-heroes">
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
                  Int Heroes
                </li>
              </ol>
            </nav>

            <h1 className="text-center mb-5">International Heroes Registration</h1>

            <Form validated={this.state.validated} onSubmit={this.handleSubmit} className="mb-3 form-wrap mx-auto">
              <Form.Group controlId="full_name" className="mb-5">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  name="full_name"
                  type="text"
                  placeholder="Enter Text Here"
                  value={this.state.form.full_name}
                  onChange={this.handleInputChange}
                />
                {errorFullName}
              </Form.Group>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group controlId="wa_number" className="mb-5">
                    <Form.Label>Whatsapp Number</Form.Label>
                    <Form.Control
                      required
                      name="wa_number"
                      type="phone"
                      placeholder="Enter Number Here"
                      value={this.state.form.wa_number}
                      onChange={this.handleInputChange}
                    />
                    {errorWaNumber}
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group controlId="age" className="mb-5">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      required
                      name="age"
                      type="number"
                      placeholder="Enter Number Here"
                      value={this.state.form.age}
                      onChange={this.handleInputChange}
                    />
                    {errorAge}
                  </Form.Group>
                </div>
              </div>
              <Form.Group controlId="nationality" className="mb-5">
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                  required
                  name="nationality"
                  type="text"
                  placeholder="Enter Text Here"
                  value={this.state.form.nationality}
                  onChange={this.handleInputChange}
                />
                {errorNationality}
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
              <div className="row">
                <div className="col-md-6">
                  <Form.Group controlId="language_speake" className="mb-5">
                    <Form.Label>Language Speake</Form.Label>
                    <Form.Control
                      required
                      name="language_speake"
                      type="text"
                      placeholder="Enter Text Here"
                      value={this.state.form.language_speake}
                      onChange={this.handleInputChange}
                    />
                    {errorLanguageSpeake}
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group controlId="language_teach" className="mb-5">
                    <Form.Label>Language Teach</Form.Label>
                    <Form.Control
                      required
                      name="language_teach"
                      type="text"
                      placeholder="Enter Text Here"
                      value={this.state.form.language_teach}
                      onChange={this.handleInputChange}
                    />
                    {errorLanguageTeach}
                  </Form.Group>
                </div>
              </div>
              <Form.Group controlId="divsion" className="mb-5">
                <Form.Label>Divisi Pilihan Kedua</Form.Label>
                <Form.Control
                  as="select"
                  required
                  aria-label="Default select example"
                  name="divsion"
                  value={this.state.form.divsion}
                  onChange={this.handleInputChange}
                >
                  <option value="" disabled>Select Dvision</option>
                  <option value="orphans">Orphans</option>
                  <option value="local heroes">Local Heroes</option>
                </Form.Control>
                {errorDivsion}
              </Form.Group>
              <Form.Group controlId="follow_ig" className="mb-5">
                <Form.Label>Have you followed the Cakrawala Bahasa instagram?</Form.Label>
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
                <label htmlFor="gree">I agree to The Terms and Privacy Policy.</label>
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
