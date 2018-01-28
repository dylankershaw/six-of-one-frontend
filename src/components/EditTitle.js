import React, { Component } from "react";
import { withRouter } from "react-router";

import checkmark from "../assets/checkmark.svg";
import x from "../assets/x.svg";

class EditTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      slug: ""
    };
  }

  componentDidMount() {
    this.setState({
      slug: this.slugify(this.state.title) + this.randomChars()
    });
  }

  render() {
    return (
      <div>
        <div>
          <button
            className="cancel-btn"
            onClick={() => {
              this.props.changeMode("read");
            }}
          >
            <img alt="cancel button" src={x} />
          </button>
          <button
            className={
              this.state.title ? "confirm-btn-active" : "confirm-btn-inactive"
            }
            onClick={this.handleConfirm}
          >
            <img alt="confirm button" src={checkmark} />
          </button>
        </div>
        <div>
          <input
            className="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Slug:{" "}
          {this.state.slug ? this.state.slug : "please enter a post title"}
        </div>
      </div>
    );
  }

  handleConfirm = () => {
    if (this.state.title) {
      this.createTitle();
      this.props.history.push("/posts/" + this.state.slug);
      this.props.changeTitle(this.state.title);
      this.props.changeMode("read");
    }
  };

  createTitle = () => {
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

  handleChange = ev => {
    this.setSlug(ev.target.value);
    this.setState({ title: ev.target.value });
  };

  setSlug = title => {
    if (!title) return this.setState({ slug: "" });

    let slug = this.slugify(title);

    return fetch("http://localhost:3000/api/v1/posts/" + slug).then(resp =>
      resp.json().then(json => {
        if (json) slug += this.randomChars();
        this.setState({ slug });
      })
    );
  };

  randomChars = () => {
    return (
      "-" +
      Math.random()
        .toString(36)
        .substr(2, 5)
    );
  };

  slugify = text => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-"); // Replace multiple - with single -
  };
}

export default withRouter(EditTitle);
