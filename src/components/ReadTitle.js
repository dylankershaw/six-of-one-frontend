import React, { Component } from "react";

import pencil from "../assets/pencil.svg";

class ReadTitle extends Component {
  render() {
    return (
      <div>
        <button
          className="edit-btn"
          onClick={() => {
            this.props.changeMode("edit");
          }}
        >
          <img alt="edit button" src={pencil} />
        </button>
        <div className="read-title-bg">
          <h1 className="title read-title">{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export default ReadTitle;
