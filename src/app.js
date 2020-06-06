import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import { startSetExpenses } from "./actions/expenses";

import "./firebase/firebase";
import "./firebase/promises";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
