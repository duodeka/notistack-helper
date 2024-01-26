import { NotistackProvider } from "@duodeka/notistack-helper";
import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotistackProvider>
      <App />
    </NotistackProvider>
  </React.StrictMode>
);
