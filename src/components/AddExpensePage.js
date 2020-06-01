import React, { Component } from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import { ExpenseForm } from "./ExpenseForm";

export const AddExpensePage = ({ dispatch, history }) => {
  const onSubmit = (expense) => {
    dispatch(addExpense(expense));
    history.push("/");
  };
  return (
    <div className="">
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect()(AddExpensePage);
