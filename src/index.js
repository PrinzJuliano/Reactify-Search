import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "carbon-components/css/carbon-components.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
