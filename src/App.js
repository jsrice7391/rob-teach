import React from "react";
import "./styles.css";
import { Home } from "./pages/Home.js";
import { Contact } from "./pages/Contact.js";

export default function App(props) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>{JSON.stringify(props)}</p>
      <p>This is the main App</p>
      <h2>Start editing to see some magic happen!</h2>
      <Home />
      <Contact />
    </div>
  );
}
