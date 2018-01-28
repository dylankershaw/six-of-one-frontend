import React, { Component } from "react";
import { withRouter } from "react-router";

import EditButtons from "./EditButtons";
import Slug from "./Slug";

class EditTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      slug: ""
    };
  }

  render() {
    return (
      <div>
        <EditButtons
          changeMode={this.props.changeMode}
          handleConfirm={this.handleConfirm}
          title={this.state.title}
        />
        <input
          className="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Slug
          slug={this.state.slug}
          title={this.state.title}
          changeSlug={this.changeSlug}
        />
      </div>
    );
  }

  changeSlug = slug => {
    this.setState({ slug });
  };

  handleChange = ev => {
    this.setState({ title: ev.target.value });
  };

  handleConfirm = () => {
    if (this.state.title) {
      this.createPost();
      this.props.history.push("/posts/" + this.state.slug);
      this.props.changeTitle(this.state.title);
      this.props.changeMode("read");
    }
  };

  createPost = () => {
    fetch("http://localhost:3000/api/v1/posts/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        slug: this.state.slug
      })
    });
  };
}

export default withRouter(EditTitle);
