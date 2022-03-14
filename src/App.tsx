import React from "react";
import "./App.css";
import { AuthInit } from "./components/layout/AuthInit";
import { Routes } from "./router/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthInit>
          <Routes />
        </AuthInit>
      </BrowserRouter>
    </div>
  );
}

export default App;
