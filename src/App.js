import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Description from "./components/body/Description";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="description-body">
          <Navbar />
          <Description />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
