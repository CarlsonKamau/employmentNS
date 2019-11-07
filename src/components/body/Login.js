import React, { Component } from "react";
import "../body/login.css";
import { Link } from "react-router-dom";
// import { ValidateAll } from 'indicative'

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  // input fields
  render() {
    return (
      <div className="look">
        <form className="f1" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3 center">Log In</h5>
          <div className="input-field">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              class="validate"
              required
            />
          </div>
          <div className="input-field" class="center-align">
            <button className="btn green lighten-1 z-depth-0">LogIn</button>
            <br />
            <br />
            <br />
            <Link to="./SignUp" className="new" class="center-align">
              New User? Sign Up
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
