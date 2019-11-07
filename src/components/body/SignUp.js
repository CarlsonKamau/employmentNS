import React, { Component } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      usertype: ""
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 5 &&
      this.state.password.length === this.state.confirmpassword
    );
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    // console.log("email: " + this.state.email);
    // console.log("password: " + this.state.password);
    // console.log("confirmpassword: " + this.state.confirmpassword);
    // console.log("usertype: " + this.state.usertype);
    e.preventDefault();
    e.target.reset();

    // const body = {
    //   email: +this.state.email,
    //   password: +this.state.password,
    //   confrimpassword: +this.state.confirmpassword,
    //   usertype: +this.state.usertype
    // };
  };

  // input fields
  render() {
    return (
      <div className="look">
        <form className="f1" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3 center">Sign Up</h5>
          <div className="input-field">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.handleChange}
              class="validate"
              required
            />
          </div>
          <div className="input-field">
            {/* <label htmlFor="confirmpassword">Confirm Password</label> */}
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmpassword"
              onChange={this.handleChange}
              class="validate"
              required
            />
          </div>
          <div className="input-field">
            <select
              className="browser-default"
              id="usertype"
              onChange={this.handleChange}
              required
            >
              <option value="" defaultValue>
                Choose User
              </option>
              <option value=" 1 ">Job Seeker</option>
              <option value=" 2 ">Employer</option>
            </select>
          </div>

          <br />
          <div className="input-field" class="center-align">
            <button className="btn green lighten-1 z-depth-0 ">Sign Up</button>
            <br />
            <br />
            <Link to="./Login" className="new" class="center-align">
              Already have an account? Log In
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
