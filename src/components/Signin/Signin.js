import React, { Component } from "react";
import validator from "validator";
import toastr from "toastr";
import "./toastr.css";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false,
    Auth: false
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {         
      this.setState({ Auth: true });
      this.setState({ loading: true });
      this.props.handlerFromParant(true);
      setTimeout(() => {
        this.setState({ loading: false });
        toastr.success("Successful Login!");
      }, 2500);
    }
  };

  validateForm() {
    let email = this.state.email;
    let password = this.state.password;
    let errors = [];
    let formIsValid = true;

    if (email.length == 0) {
      formIsValid = false;
      errors.push({ email: "Email cant be null" });
    }

    if (validator.isEmail(email) == false) {
      formIsValid = false;
      errors.push({ email: "Invalid Email!" });
    }

    if (password.length < 8) {
      formIsValid = false;
      errors.push({ password: "Password must contain at least 9 letters!" });
    }

    if (password.length == 0) {
      formIsValid = false;
      errors.push({ password: "Password can't be null!" });
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-6">
              <label>Email:</label>
              <input
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
              />
              <span className="help-block" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-6">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <span className="help-block" />
          </div>
          <div className="col-6">
            <button type="submit" className="btn btn-primary">
              Submit
              <div
                className={
                  this.state.loading
                    ? "spinner-border spinner-border-sm ml-2"
                    : ".d-none"
                }
                role="status"
              />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
