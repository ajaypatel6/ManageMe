import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "../UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var [loggedIn, setLoggedIn] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const handleNameInput = (e) => {
    setEmail(e.target.value);
  };

  //useEffect for user?
  // side effect, when something happens..
  useEffect(() => {
    console.log("rendering");
  }, []);

  console.log(user.name);
  // console.log("first log");
  // console.log(user);

  if (user.name != "Guest") {
    loggedIn = true;
  }

  // context for the entire site
  // refreshing put name not satying
  if (loggedIn) {
    // once on account, the name goes back to guest
    // window.location = "/Account";
    // remove login
    // remove register
    // add logout
  }

  const login = (event) => {
    console.log(loggedIn + " logged in");
    event.preventDefault(); // FIXES!!!!
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      // need context for loggedIn status
      // console.log(response);
      // delayy, need to do twice? wtf
      if (response.data.message === "Logging") {
        // console.log(loggedIn);
        // setUser()
        console.log("logged in?");
        // need to get name from db

        // console.log(email);
        // setUser(email);
        console.log(user.name + " pre set");
        setUser({ name: email });
        // setUser("yea mayn");
        // not setting until click again? : o
        console.log(user.name + " post set");
      }
      console.log("not logged in?");
    });
  };

  // if (user) {
  //   return (
  //     <>
  //       <div>Welcome {user}</div>
  //     </>
  //   );
  // }

  return (
    <>
      <h1>Login</h1>
      <form action="login">
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Login"
            className="loginButton "
            // onClick={(e) => this.handleFormSubmit(e)}
            onClick={login}
          />
        </div>
      </form>
      <Link to="/Account" className="">
        <button>Go back</button>
      </Link>
    </>
  );
};

export default Login;
