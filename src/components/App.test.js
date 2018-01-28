import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router";

import App from "./App";
import ReadTitle from "./ReadTitle";

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initializes the state in read mode", () => {
    expect(app.state().mode).toEqual("read");
  });

  //// MAKE THESE UNIT TESTS
  // describe("clicking the edit button", () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={["/posts/knowledge-is-power"]}>
  //       <ReadTitle />
  //     </MemoryRouter>
  //   );

  //   it("changes app state to edit mode", () => {
  //     wrapper.find(".edit-btn").simulate("click");
  //     expect(app.state().mode).toEqual("edit");
  //   });
  // });
});
