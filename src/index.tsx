import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { AnalyticsProvider } from "fv-analytics";
import App from "@/components/app/app";
import Reset from "@/styles/reset";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Router>
    <AnalyticsProvider
      config={{
        serverUrl: "http://localhost:3000",
        storageKey: "meta-touchscreen-analytics",
        deviceId: "meta-touchscreen",
        projectId: "meta-touchscreen",
      }}
    >
      <Reset />
      <App />
    </AnalyticsProvider>
  </Router>,
);
