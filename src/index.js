import "./index.css";
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./component/context/navigation";
const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
