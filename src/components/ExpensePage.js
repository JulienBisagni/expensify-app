import React from "react";
import Expenses from "./Expenses";
import Filters from "./Filters";
import ExpensesSummary from "./ExpensesSummary";

const ExpensePage = () => (
  <div className="">
    <Filters />
    <Expenses />
    <ExpensesSummary />
  </div>
);
export default ExpensePage;
