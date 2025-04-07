import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import App from "@/components/app/app";
import Reset from "@/styles/reset";
import { SessionProvider } from "@/session";

const updateSW = registerSW({
  async onNeedRefresh() {
    await updateSW(true);
  },
});

const root = document.querySelector("#root");

if (root === null) {
  throw new Error("Root element not found");
}

let server = "http://localhost:3000/api/save-sessions";
if (process.env.NODE_ENV === "production") {
  server = "https://analytics-server.finervision.com/api/save-sessions";
}

ReactDOM.createRoot(root).render(
  <Router>
    <Reset />
    <SessionProvider server={server} storageKey="meta-touchscreen" projectId="meta-touchscreen">
      <App />
    </SessionProvider>
  </Router>,
);
