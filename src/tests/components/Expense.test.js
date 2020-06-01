import { shallow } from "enzyme";
import { React } from "react";

import { Expense } from "../../components/Expense";
import expenses from "../fixtures/expenses";

test("should render Expense with expenses", () => {
  const wrapper = shallow(<Expense expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Expense with empty message", () => {
  const wrapper = shallow(<Expense expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
