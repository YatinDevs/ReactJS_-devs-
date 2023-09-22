import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StrictMode } from "react";

function MyApp() {
  return (
    <div>
      <h1> My App </h1>
    </div>
  );
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  childern: "Click me to visit google",
};

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const variable = "another variable";

// Evaluated Expression :
const reactElement = React.createElement(
  "a",
  { href: "https://facebook.com", target: "_blank" },
  "Click Me",
  variable
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
