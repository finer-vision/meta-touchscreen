import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "@/components/app/app";
import Reset from "@/styles/reset";
import { SessionProvider } from "@/session";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Router>
    <Reset />
    <SessionProvider server="http://localhost:3000/api/save-sessions" storageKey="analytics" projectId="meta-touchscreen">
      <App />
    </SessionProvider>
  </Router>,
);
