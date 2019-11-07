import React, { Component } from "react";
//add Route ,switch  on the import below
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Description from "./components/body/Description";
// import SignUp from "./components/body/SignUp";
// import Login from "./components/body/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="description-body">
          <Navbar />{" "}
          {/* <Switch>
                                            {/* <Route path="/Login" component={Login} />
                                            <Route path="/SignUp" component={SignUp} /> */}{" "}
          {/* </Switch> */} <Description />
        </div>{" "}
      </BrowserRouter>
    );
  }
}

export default App;
