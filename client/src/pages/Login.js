import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import AuthService from "../services/auth.service";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  var [loggedIn, setLoggedIn] = useState(false);

  const [message, setMessage] = useState("");
  const [successful, setSuccesful] = useState(false);

  //useEffect for user?
  // side effect, when something happens..
  useEffect(() => {
    console.log("rendering");
  }, []);

  // context for the entire site
  // refreshing put name not satying
  if (loggedIn) {
    // once on account, the name goes back to guest
    // window.location = "/Account";
    // remove login
    // remove register
    // add logout
  }

  // if (user) {
  //   return (
  //     <>
  //       <div>Welcome {user}</div>
  //     </>
  //   );
  // }

  const login = (e) => {
    e.preventDefault();
    AuthService.login(name, password).then(
      (response) => {
        console.log(response.username);
        // setMessage(response.data.message);
        setSuccesful(true);
        // response.render("/profile");
        // window.location.reload();
        window.location = "/Account";
        // console.log(message);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
        setSuccesful(false);
      }
    );
  };

  return (
    <>
      <h1>Login</h1>
      <form action="login">
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
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
