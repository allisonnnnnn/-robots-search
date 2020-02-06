import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//helps log which can debug easily
import { createLogger } from "redux-logger";

import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { searchRobots } from "./reducers";

// via createStore 将 reducer 转换成 store。接著你就可以開始透過 action 操作 state 了
//store.dispatch({
// type: 'INCREMENT'
// });
const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

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
