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
      <div className="gutters">
        <div className="row navbar">
          <div className="col-6" />
          <img className="logo col-2" alt="logo" src={logo} />
        </div>
        <div className="row">
          <img className="cover col-8" alt="background" src={coverPhoto} />
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-5">
            {/* renders ReadTitle or EditTitle depending on current mode */}
            {this.state.mode === "read" ? (
              <ReadTitle
                title={this.state.title}
                changeMode={this.changeMode}
              />
            ) : (
              <EditTitle
                title={this.state.title}
                changeMode={this.changeMode}
                changeTitle={this.changeTitle}
              />
            )}
          </div>
          <div className="col-2" />
        </div>
        <div className="row content">
          <div className="col-1" />
          <div className="col-2">
            <Description />
          </div>
          <div className="col-4">
            <Body />
          </div>
          <div className="col-1" />
        </div>
      </div>
    );
  }

  changeMode = mode => {
    this.setState({ mode });
  };

  changeTitle = title => {
    this.setState({ title });
  };

  // fetches title from API and puts it in state
  setTitle = slug => {
    fetch("http://six-of-one-api.herokuapp.com/api/v1/posts/" + slug).then(
      resp => resp.json().then(json => this.changeTitle(json.title))
    );
  };
}

export default withRouter(App);
