import React, { Component } from "react";
import { connect } from "react-redux";

import { startAddExpense } from "../actions/expenses";
import { ExpenseForm } from "./ExpenseForm";

export class AddExpensePage extends Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="">
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
