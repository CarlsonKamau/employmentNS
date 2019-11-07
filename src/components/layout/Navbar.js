import React from "react";
import { Link } from "react-router-dom";
import LoginLink from "../body/LoginLink";
import SignUpLink from "../body/SignUpLink";

const Navbar = () => {
  return (
    <nav className="nav-wrapper light-green darken-1">
      <div className="container">
        <Link to="/Description" className="brand-logo">
          Employment Notification System
        </Link>
        <LoginLink />
        <SignUpLink />
      </div>
    </nav>
  );
};

export default Navbar;
