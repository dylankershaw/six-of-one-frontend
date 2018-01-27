import React, { Component } from "react";
import logo from "../assets/logo_and_hamburger.svg";

class App extends Component {
  constructor() {
    super();

    this.state = { mode: "read" };
  }

  render() {
    return (
      <div>
        <img alt="six of one logo" src={logo} />
      </div>
    );
  }
}

export default App;
