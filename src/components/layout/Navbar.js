import React, { Component } from "react";
import SignedOutLinks from "./SignedOutlinks";

export class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper grey darken-3 ">
        <div className="container">
          Employement Notification System
          <SignedOutLinks />
        </div>
      </nav>
    );
  }
}
export default Navbar;
