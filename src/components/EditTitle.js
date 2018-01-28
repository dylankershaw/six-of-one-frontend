import React, { Component } from "react";

import checkmark from "../assets/checkmark.svg";
import x from "../assets/x.svg";

class EditTitle extends Component {
  constructor() {
    super();

    this.state = { slug: "" };
  }

  render() {
    return (
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
            this.state.slug ? "confirm-btn-active" : "confirm-btn-inactive"
          }
          onClick={() => {
            this.props.changeMode("read");
          }}
        >
          <img alt="confirm button" src={checkmark} />
        </button>
      </div>
    );
  }
}

export default EditTitle;
