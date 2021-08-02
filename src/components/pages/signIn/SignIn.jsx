import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";

import SignInImage from "assets/images/sign/signIn.png";

import "components/pages/signUp/signUp.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        akun: "",
        password: "",
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
      .post("http://127.0.0.1:8000/api/sign-in", payload)
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
    this.submitForm();
    event.preventDefault();
  }

  render() {
    let errorAkun;
    let errorPassword;
    if (this.state.errorForm.username) {
      errorAkun = (
        <Form.Control.Feedback type="invalid">
          {this.state.errorForm.username}
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

    return (
      <>
        <div className="row d-flex align-items-center">
          <div className="col-md-4 d-none d-md-block">
            <img src={SignInImage} className="img-fluid " alt="signup" />
          </div>
          <div className="col-md-6 offset-md-1 p-5">
            <h1 className="signup-title">Sign In</h1>
            <Form validated={this.state.validated} onSubmit={this.handleSubmit} className="my-3">
              <Form.Group controlId="akun" className="mb-5">
                <Form.Label>Email/Username</Form.Label>
                <Form.Control
                  required
                  name="akun"
                  type="text"
                  placeholder="Enter Text Here"
                  value={this.state.form.akun}
                  onChange={this.handleInputChange}
                />
                {errorAkun}
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
            <small>Belum punya akun ? <Link to="/sign-up"> Sign up </Link></small>
          </div>
        </div>
      </>
    );
  }
}
