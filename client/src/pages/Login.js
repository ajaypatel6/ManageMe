import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // context for the entire site
  if (loggedIn) {
    window.location = "/";
    // remove login
    // remove register
    // add logout
  }

  const login = (event) => {
    console.log(loggedIn);
    event.preventDefault(); // FIXES!!!!
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      // need context for loggedIn status
      console.log(response);
      // delayy, need to do twice? wtf
      if (response.data.message === "Logging") {
        console.log(loggedIn);
        setLoggedIn(true);
      }
    });
  };

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
