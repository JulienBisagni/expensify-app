import React, { Component } from "react";
import { connect } from "react-redux";

import Expense from "./Expense";
import getVisibleExpenses from "../selectors/expenses";

export const Expenses = ({ expenses }) => (
  <div>
    <h1>Expense List</h1>
    {expenses.map((e, i) => {
      return <Expense key={i} {...e} />;
    })}
  </div>
);

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Expenses);
