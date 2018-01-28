import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import "./index.css";

render(
  <BrowserRouter>
    <Route exact path="/posts/:slug" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
