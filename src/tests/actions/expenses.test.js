import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should remove an expense", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should edit an expense", () => {
  const action = editExpense("123abc", { note: "new note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "new note",
    },
  });
});

test("should add an expense with values", () => {
  const expenseData = {
    description: "Description test",
    note: "Note test",
    amount: 150000,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should add an expense without values", () => {
  const expenseData = {};
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
