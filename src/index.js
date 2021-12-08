import React from "react";
import ReactDOM from "react-dom";

//react-redux - вспомогательная библиотека к redux, которая используется только с react
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";

//используем Provider для связи приложения с хранилищем состояний (аналог Context)
//передаем ему хранилище
//обренуть в Provider можно или здесь, или в App
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
