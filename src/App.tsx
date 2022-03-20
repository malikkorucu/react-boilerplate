import React from "react";
import "./App.css";
import { AuthInit } from "./components/layout/AuthInit";
import { Routes } from "./router/Routes";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./setup/redux/Store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <AuthInit>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={<div>Loading ...</div>}>
              <Routes />
            </PersistGate>
          </Provider>
        </AuthInit>
      </BrowserRouter>
    </div>
  );
}

export default App;
