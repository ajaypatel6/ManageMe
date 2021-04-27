import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Error from "./pages/Error";

//components
import Header from "./components/Header";

function Dashboard() {
  return (
    <>
      <Header></Header>
    </>
  );
}

export default Dashboard;
