import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App name="Justin" state="MA" />
  </React.StrictMode>,
  rootElement
);
