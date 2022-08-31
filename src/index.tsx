import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "@/components/app/app";
import Reset from "@/styles/reset";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Router>
    <Reset />
    <App />
  </Router>
);
