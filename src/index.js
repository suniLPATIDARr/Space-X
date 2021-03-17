import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import info from "./reducer/getData.reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import * as api from "./utils/apiRequest.js";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";
const appReducer = combineReducers({
  info,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
let store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({
      api,
    }),
    logger
  )
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
