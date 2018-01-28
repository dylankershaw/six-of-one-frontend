import React from "react";

import checkmark from "../assets/checkmark.svg";
import x from "../assets/x.svg";

const EditButtons = ({ changeMode, title, handleConfirm }) => {
  return (
    <div>
      <button
        className="cancel-btn"
        onClick={() => {
          changeMode("read");
        }}
      >
        <img alt="cancel button" src={x} />
      </button>
      <button
        className={title ? "confirm-btn-active" : "confirm-btn-inactive"}
        onClick={handleConfirm}
      >
        <img alt="confirm button" src={checkmark} />
      </button>
    </div>
  );
};

export default EditButtons;
