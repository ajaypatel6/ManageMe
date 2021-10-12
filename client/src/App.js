import React, { useEffect } from "react";
// import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//-------------------------//-------------------------//-------------------------//-------------------------
import AuthService from "./services/auth.service";
// import "bootstrap/dist/css/bootstrap.min.css";

//-------------------------//-------------------------//-------------------------//-------------------------

//pages
import Error from "./pages/Error";
import Stats from "./pages/Stats";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Meditate from "./pages/Meditate";
import Account from "./pages/Account";

//components
import Header from "./components/Header";
import TaskTimer from "./components/TaskTimer";
import Tasks from "./components/Tasks";
import MeditatePrompt from "./components/MeditatePrompt";
import CoolInfo from "./components/CoolInfo";
// the context to import, for consumption

// context
// import { Provider } from "./Context";
// import { Actions } from "./Actions";

//  Functional or class components
// seems like class is getting outdated?
// this is FUNCTIONAL

function App() {
  //-------------------------//-------------------------//-------------------------//-------------------------

  //logout state?, bind

  // function logout() {
  //   // is this right?

  //   currentUser = AuthService.logout;
  // }

  // modeerator and admin board state?
  useEffect(() => {
    console.log("start of useEffect");
    const user = AuthService.getCurrentUser();
    // console.log(AuthService.getCurrentUser() + " is the user"); // current null
    if (user) {
      console.log("There is a user");
      // check mod
      // check admin
    }
  }, []); // refresh on what? (user?)
  //-------------------------//-------------------------//-------------------------//-------------------------

  // ELSE (if canclled/ meditation done)
  return (
    <>
      <Router>
        <Header></Header>
        {/* meditation conditional? */}
        <Switch>
          <Route exact path="/">
            {/* home page? */}
            <MeditatePrompt />
            <TaskTimer />
            <Tasks />
            <CoolInfo />
          </Route>
          <Route path="/Stats">
            <Stats />
          </Route>
          {/*  */}
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Account">
            <Account />
          </Route>
          {/* {currentUser && ( */}
          {/* <Route path="/Profile">
            <Profile />
          </Route> */}
          {/* )} */}
          {/* {currentUser ? (
            // current user stuff
            // logout, correct profile, remove signup and login
          )} */}
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

export default App;
