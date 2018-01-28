import { withRouter } from "react-router";
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

    this.state = { mode: "read", title: "" };
  }

  // extracts slug from URL and passes it to setTitle()
  componentDidMount() {
    const slug = this.props.history.location.pathname.slice(7);
    this.setTitle(slug);
  }

  render() {
    return (
      <div className="app">
        <img className="logo" alt="six of one logo" src={logo} />
        <img className="cover" alt="mountain landscape" src={coverPhoto} />
        {this.state.mode === "read" ? (
          <ReadTitle title={this.state.title} changeMode={this.changeMode} />
        ) : (
          <EditTitle
            title={this.state.title}
            changeMode={this.changeMode}
            changeTitle={this.changeTitle}
          />
        )}
        <Description />
        <Body />
      </div>
    );
  }

  changeMode = mode => {
    this.setState({ mode });
  };

  changeTitle = title => {
    this.setState({ title });
  };

  // fetches title from API and updates state
  setTitle = slug => {
    fetch("http://localhost:3000/api/v1/posts/" + slug).then(resp =>
      resp.json().then(json => this.changeTitle(json.title))
    );
  };
}

export default withRouter(App);
