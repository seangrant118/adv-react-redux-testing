import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

afterEach(() => {
  wrapper.unmount();
});

it("has a textarea and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});
