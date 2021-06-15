import React, { useState, useMemo, useContext } from "react";
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
// the context to import, for consumption
import { UserContext } from "./UserContext";

// context
// import { Provider } from "./Context";
// import { Actions } from "./Actions";

//  Functional or class components
// seems like class is getting outdated?
// this is FUNCTIONAL
function App() {
  // const [user, setUser] = useState(null);

  // const { user } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  console.log(user.name);
  //prevent value to change unless setvalue,value change
  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  // Meditation preface if not meditate

  console.log("dashboard user");
  // console.log(user);

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
      </Router>
    </>
  );
}

export default App;
