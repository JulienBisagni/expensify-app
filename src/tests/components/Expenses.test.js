import { shallow } from "enzyme";
import { React } from "react";

import { Expenses } from "../../components/Expenses";
import expenses from "../fixtures/expenses";

test("should render Expenses with expenses", () => {
  const wrapper = shallow(<Expenses expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Expenses with empty message", () => {
  const wrapper = shallow(<Expenses expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
