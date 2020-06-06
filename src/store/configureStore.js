import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import filtersReducer from "../reducers/filters";
import expensesReducer from "../reducers/expenses";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
