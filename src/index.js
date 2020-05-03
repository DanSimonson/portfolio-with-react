import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import BlogReducer from "./Reducers/BlogReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(BlogReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
