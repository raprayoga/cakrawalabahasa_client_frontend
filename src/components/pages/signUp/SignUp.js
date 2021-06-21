import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

import SignUpImage from "assets/images/signUp/signUp.png";

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
        passoword_confirmation: "",
        agreement: "",
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
      .post("http://127.0.0.1:8000/api/sign-up", payload)
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

  render() {
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
    if (this.state.errorForm.passoword_confirmation) {
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
        <div className="row signup-row">
          <div className="col-md-4 d-none d-md-block">
            <img src={SignUpImage} className="img-fluid" alt="signup" />
          </div>
          <div className="col-md-8 p-5">
            <h1 className="signup-title">Sign Up</h1>
            <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
              <Form.Group controlId="name" className="mb-5">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
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
                {errorPassword}
              </Form.Group>
              <Form.Group controlId="passoword_confirmation" className="mb-5">
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control
                  required
                  name="passoword_confirmation"
                  type="password"
                  placeholder="Enter Text Here"
                  value={this.state.form.passoword_confirmation}
                  onChange={this.handleInputChange}
                />
                {errorPasswordConfirm}
              </Form.Group>
              <Form.Check
                label="I agree to The Terms and Privacy Policy."
                name="agreement"
                type="checkbox"
                id="gree"
                value="true"
                onChange={this.handleInputChange}
              />
              {errorAgree}
              <Button
                variant="warning"
                type="submit"
                className="text-light mt-5 m-auto d-flex"
                value="submit"
                stlyle={{ width: "100%" }}
              >
                <span
                  className={`spinner-border text-light ${this.state.busy}`}
                  role="status"
                  aria-hidden="true"
                  style={{ marginRight: "20px" }}
                ></span>
                <span>Sign Up</span>
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}
