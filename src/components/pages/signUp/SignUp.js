import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import { Redirect } from "react-router-dom";

import SignUpImage from "assets/images/sign/signUp.png";

import "components/pages/signUp/signUp.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
        agreement: false,
      },
      errorForm: {},
      busy: "d-none",
      validated: "",
      redirect: false,
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
      .post("http://127.0.0.1:8000/api/sign-up", payload)
      .then((response) => {
        this.Toast.fire({
          icon: "success",
          title: response.data.message,
        });
        this.setState({
          redirect: true,
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
    const value = event.target.value;
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
    if (this.state.redirect) {
      return <Redirect to="/sign-in" />;
    }

    let errorFullName;
    let errorUserName;
    let errorPhone;
    let errorEmail;
    let errorPassword;
    let errorPasswordConfirm;
    let errorAgree;
    if (this.state.errorForm.name) {
      errorFullName = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.name}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.username) {
      errorUserName = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.username}
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
    if (this.state.errorForm.password) {
      errorPassword = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.password}
        </Form.Control.Feedback>
      );
    }
    if (this.state.errorForm.password_confirmation) {
      errorPasswordConfirm = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.passoword_confirm}
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
        <div className="row signup-row d-flex align-items-center">
          <div className="col-md-4 d-none d-md-block">
            <img src={SignUpImage} className="img-fluid " alt="signup" />
          </div>
          <div className="col-md-8 p-5">
            <h1 className="signup-title">Sign Up</h1>
            <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
              <Form.Group controlId="name" className="mb-5">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  name="name"
                  type="text"
                  placeholder="Enter Text Here"
                  value={this.state.form.name}
                  onChange={this.handleInputChange}
                />
                {errorFullName}
              </Form.Group>
              <div className="row">
                <div className="col-sm-6">
                  <Form.Group controlId="username" className="mb-5">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      required
                      name="username"
                      type="text"
                      placeholder="Enter Text Here"
                      value={this.state.form.username}
                      onChange={this.handleInputChange}
                    />
                    {errorUserName}
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="phone" className="mb-5">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      required
                      name="phone"
                      type="number"
                      placeholder="Enter Text Here"
                      value={this.state.form.phone}
                      onChange={this.handleInputChange}
                    />
                    {errorPhone}
                  </Form.Group>
                </div>
              </div>
              <Form.Group controlId="email" className="mb-5">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  name="email"
                  type="email"
                  placeholder="Enter Text Here"
                  value={this.state.form.email}
                  onChange={this.handleInputChange}
                />
                {errorEmail}
              </Form.Group>
              <Form.Group controlId="password" className="mb-5">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  type="password"
                  placeholder="Enter Text Here"
                  value={this.state.form.password}
                  onChange={this.handleInputChange}
                />
                <small>
                  Password terdiri dari minimal 8 karakter kombinasi huruf
                  besar-kecil dan angka/simbol
                </small>
                {errorPassword}
              </Form.Group>
              <Form.Group controlId="password_confirmation" className="mb-5">
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control
                  required
                  name="password_confirmation"
                  type="password"
                  placeholder="Enter Text Here"
                  value={this.state.form.password_confirmation}
                  onChange={this.handleInputChange}
                />
                {errorPasswordConfirm}
              </Form.Group>
              <Form.Check
                label="I agree to The Terms and Privacy Policy."
                name="agreement"
                type="checkbox"
                id="gree"
                checked={this.state.agreement}
                onChange={this.handleInputChange}
              />
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
                <span className="m-auto">Sign Up</span>
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}
