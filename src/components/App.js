import React, { Component } from "react";
import coverPhoto from "../assets/cover_photo.jpg";
import logo from "../assets/logo_and_hamburger.svg";

class App extends Component {
  constructor() {
    super();

    this.state = { mode: "read" };
  }

  render() {
    return (
      <div>
        <img id="logo" alt="six of one logo" src={logo} />
        <img id="cover-photo" alt="mountain landscape" src={coverPhoto} />
      </div>
    );
  }
}

export default App;
