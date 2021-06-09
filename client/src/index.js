import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dashboard from "./Dashboard";
import { UserContext, UserProvider } from "./UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Dashboard />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
