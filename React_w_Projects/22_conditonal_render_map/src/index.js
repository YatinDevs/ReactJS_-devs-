import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ListApp from "./ListApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ListApp />
  </React.StrictMode>
);
