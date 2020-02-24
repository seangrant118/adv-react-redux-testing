import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "fetch 1" }, { name: "fetch 2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  wrapper.find(".fetch-comments").simulate("click");
  // introduce a pause
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find("li").length).toEqual(2);

    done();
    wrapper.unmount();
  });
});
