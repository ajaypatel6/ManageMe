import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log("yo");
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form action="submit">
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
            className="loginButton"
            // onClick={(e) => this.handleFormSubmit(e)}
            onClick={login}
          />{" "}
        </div>
      </form>
      <Link to="/profile" className="">
        <button>Back home</button>
      </Link>
    </>
  );
};

export default Login;
