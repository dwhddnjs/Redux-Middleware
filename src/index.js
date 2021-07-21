import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import myLogger from "./middlewares/myLogger";
//스토어 생성
const store = createStore(rootReducer, applyMiddleware(myLogger));

ReactDOM.render(
  //프로바이더로 감싸기
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

