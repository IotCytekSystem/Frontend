import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css"; 
import store from "./store/index"
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App /> 
    </Provider>,
  document.getElementById("root"),
);
