import React, { Component } from "react";

import logo from "../assets/logo_and_hamburger.svg";
import coverPhoto from "../assets/cover_photo.jpg";
import Description from "./Description";
import ReadTitle from "./ReadTitle";
import EditTitle from "./EditTitle";
import Body from "./Body";

class App extends Component {
  constructor() {
    super();

    this.state = { mode: "read" };
  }

  render() {
    return (
      <div>
        <img className="logo" alt="six of one logo" src={logo} />
        <img
          className="cover-photo"
          alt="mountain landscape"
          src={coverPhoto}
        />
        {this.state.mode === "read" ? (
          <ReadTitle changeMode={this.changeMode} />
        ) : (
          <EditTitle changeMode={this.changeMode} />
        )}
        <Description />
        <Body />
      </div>
    );
  }

  changeMode = mode => {
    this.setState({ mode });
  };
}

export default App;
