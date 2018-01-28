import React, { Component } from "react";
import { withRouter } from "react-router";

import pencil from "../assets/pencil.svg";

class ReadTitle extends Component {
  constructor() {
    super();

    this.state = { title: "" };
  }

  // extracts slug from URL and passes it to getTitle()
  componentDidMount() {
    const slug = this.props.history.location.pathname.slice(7);
    this.getTitle(slug);
  }

  render() {
    return (
      <div>
        <button
          className="edit-btn"
          alt="edit button"
          onClick={() => {
            this.props.changeMode("edit");
          }}
        >
          <img src={pencil} />
        </button>
        <h1 className="title">{this.state.title}</h1>
      </div>
    );
  }

  // fetches title from API and sets it to state
  getTitle = slug => {
    fetch("http://localhost:3000/api/v1/posts/" + slug).then(resp =>
      resp.json().then(json => this.setState({ title: json.title }))
    );
  };
}

export default withRouter(ReadTitle);
