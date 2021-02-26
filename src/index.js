import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { App } from "./App";
import bankingReducer from "./banking";
import "./index.css";
import auth from "./auth";

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStore(
        combineReducers({ bankingReducer, auth }),
        composeWithDevTools()
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
