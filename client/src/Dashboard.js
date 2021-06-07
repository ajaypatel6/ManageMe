import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Error from "./pages/Error";
import Stats from "./pages/Stats";
// import Profile from "./pages/Profile";
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
import { UserContext } from "./UserContext";

// context
// import { Provider } from "./Context";
// import { Actions } from "./Actions";

function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [value, setValue] = useState("hello from dash");

  // Meditation preface if not meditate

  // ELSE (if canclled/ meditation done)
  return (
    <>
      <Router>
        <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
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
            {/* <Route path="/Profile">
            <Profile />
          </Route> */}
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
            <Route path="/Account">
              <Account />
            </Route>
            <Route path="/Settings">
              <Settings />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default Dashboard;
