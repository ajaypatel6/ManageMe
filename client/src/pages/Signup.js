import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <h1>Create an Account</h1>
      <form action="signup">
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
          <button className="loginButton">Sign-up</button>
        </div>
        Google stuff
      </form>
      <Link to="/profile" className="">
        <button>Back home</button>
      </Link>
    </>
  );
};

export default Signup;
