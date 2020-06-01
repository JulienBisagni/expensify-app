import React, { Component } from "react";
import { connect } from "react-redux";
import { ExpenseForm } from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export const EditExpensePage = ({ dispatch, history, expense }) => {
  const onSubmit = (expense) => {
    dispatch(editExpense(props.expense.id, expense));
    history.push("/");
  };
  const handleRemoveExpense = () => {
    const id = expense.id;
    dispatch(removeExpense({ id }));
    history.push("/");
  };

  return (
    <div>
      <ExpenseForm expense={expense} onSubmit={onSubmit} />
      <button onClick={handleRemoveExpense}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

export default connect(mapStateToProps)(EditExpensePage);
