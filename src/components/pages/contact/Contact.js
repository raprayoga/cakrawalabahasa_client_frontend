import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

import Header from "components/parts/header/Header";
import Footer from "components/parts/footer/Footer";

import ContactImage from "assets/images/contact/contactImage.png";

import "components/pages/contact/contact.css";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nama: "",
        phone: "",
        email: "",
        pesan: "",
        metode: "",
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

  handleInputChange(event) {
    const target = event.target;
    const value = event.target.value;
    let formTemp = { ...this.state.form };
    formTemp[target.name] = value;
    this.setState({
      form: { ...formTemp },
    });
  }

  handleSubmit(event) {
    this.submitForm();
    event.preventDefault();
  }

  async submitForm() {
    this.setState({ errorForm: {}, validated: "", busy: "d-block" });
    const payload = this.state.form;
    await axios
      .post("http://127.0.0.1:8000/api/contact-us", payload)
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
          errorForm: error.response.data.errors,
          validated: false,
        });
      });
    this.setState({ busy: "d-none" });
  }

  render() {
    let errorName;
    let errorPhone;
    let errorEmail;
    let errorPesan;
    let errorMetode;
    if (this.state.errorForm.nama) {
      errorName = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.nama}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.phone) {
      errorPhone = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.phone}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.email) {
      errorEmail = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.email}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.pesan) {
      errorPesan = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.pesan}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.metode) {
      errorMetode = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.metode}
        </Form.Control.Feedback>
      );
    }

    return (
      <>
        <Header {...this.props}></Header>

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
                Contact
              </li>
            </ol>
          </nav>

          <h1>Contact Us</h1>

          <div className="row my-5 d-flex align-items-center">
            <div className="col-md-6">
              <img src={ContactImage} className="img-fluid" alt="Contact Us" />
            </div>
            <div className="col-md-6">
              <Card body>
                <Form
                  validated={this.state.validated}
                  onSubmit={this.handleSubmit}
                >
                  <Form.Group controlId="nama" className="mb-5">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      name="nama"
                      type="text"
                      placeholder="Enter Text Here"
                      value={this.state.form.nama}
                      onChange={this.handleInputChange}
                      invalid={true}
                    />
                    {errorName}
                  </Form.Group>
                  <Form.Group controlId="phone" className="mb-5">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      name="phone"
                      type="number"
                      placeholder="Enter Text Here"
                      value={this.state.form.phone}
                      onChange={this.handleInputChange}
                    />
                    {errorPhone}
                  </Form.Group>
                  <Form.Group controlId="email" className="mb-5">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter Text Here"
                      value={this.state.form.email}
                      onChange={this.handleInputChange}
                    />
                    {errorEmail}
                  </Form.Group>
                  <Form.Group controlId="pesan" className="mb-5">
                    <Form.Label>pesan</Form.Label>
                    <Form.Control
                      name="pesan"
                      as="textarea"
                      placeholder="Enter Text Here"
                      value={this.state.form.pesan}
                      onChange={this.handleInputChange}
                      rows={5}
                    />
                    {errorPesan}
                  </Form.Group>
                  <Form.Check
                    label="Hubungi via email"
                    name="metode"
                    type="radio"
                    id="via-email"
                    value="email"
                    onChange={this.handleInputChange}
                  />
                  <Form.Check
                    label="Hubungi via WA"
                    name="metode"
                    type="radio"
                    id="via-wa"
                    value="phone"
                    onChange={this.handleInputChange}
                  />
                  {errorMetode}
                  <Button
                    variant="warning"
                    type="submit"
                    className="text-light mt-5 m-auto d-flex"
                    value="submit"
                  >
                    <span
                      className={`spinner-border text-light ${this.state.busy}`}
                      role="status"
                      aria-hidden="true"
                      style={{ marginRight: "20px" }}
                    ></span>
                    <span>Send Message</span>
                  </Button>
                </Form>
              </Card>
            </div>
          </div>
        </div>

        <Footer {...this.props}></Footer>
      </>
    );
  }
}
