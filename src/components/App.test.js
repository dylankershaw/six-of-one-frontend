import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initializes the `state` in read mode", () => {
    expect(app.state().mode).toEqual("read");
  });
});
