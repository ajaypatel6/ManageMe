import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Error from "./pages/Error";
import Stats from "./pages/Stats";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

//components
import Header from "./components/Header";

function Dashboard() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            {/* home page? */}
          </Route>
          <Route path="/Stats">
            <Stats />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Settings">
            <Settings />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Dashboard;
