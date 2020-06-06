const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_EXPENSES":
      return action.expenses;
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "EDIT_EXPENSE":
      return state.map((e) => {
        if (e.id === action.id) {
          return {
            ...e,
            ...action.updates,
          };
        } else {
          return e;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;
