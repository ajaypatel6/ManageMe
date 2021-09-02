import React from "react";
import ReactDOM from "react-dom";
// adding bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import App from "./App";
import { UserProvider } from "./UserContext";
// import { UserContext, UserProvider } from "./UserContext";


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
