import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form action="submit">
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            name="password"
          />
          <button className="loginButton">Login</button>
        </div>
        Google stuff
      </form>
      <Link to="/profile" className="">
        <button>Back home</button>
      </Link>
    </>
  );
};

export default Login;
