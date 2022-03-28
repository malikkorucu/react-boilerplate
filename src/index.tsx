import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import setupAxios from "./setup/axios/SetupAxios";
import axios from "axios";
import store from "./setup/redux/Store";
import { ConfirmModal } from "./components/common/ConfirmModal/ConfirmModal";

setupAxios(axios, store);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ConfirmModal />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
