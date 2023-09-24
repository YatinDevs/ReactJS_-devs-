import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import MyApp from "./MyApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
