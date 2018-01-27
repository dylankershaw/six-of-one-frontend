import React, { Component } from "react";

import Navbar from "./Navbar";

class App extends Component {
  constructor() {
    super();

    this.state = { mode: "read" };
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
