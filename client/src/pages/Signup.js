import React, { useState } from "react";
// import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
// import Axios from "axios";
// import SignupForm from "../components/SignupForm";
// import { Actions } from "../Actions";
// import { UserContext } from "../UserContext";

import AuthService from "../services/auth.service";

// all register checks
// pw length
// valid email
// required fields
// username length
// valid city?

const Signup = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [successful, setSuccesful] = useState(false);

  // it logs in after 2 clicks
  // then need to relog
  // probably a message screen for succesful registration
  const register = (e) => {
    e.preventDefault();
    AuthService.register(name, email, password, city).then(
      (response) => {
        setMessage(response.data.message);
        setSuccesful(true);
        alert('account created');
        console.log(message);
        window.location = "/Account";
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
      <h1>Create an Account</h1>
      {/* create form comp ....
       is post nec??*/}
      <form action="signup" method="POST">
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Name"
            name="Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            name="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>City</label>
          <input
            type="text"
            placeholder="City"
            name="City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter a password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            name="passwordConfirm"
          /> */}
          <input
            type="submit"
            value="Signup"
            className="loginButton"
            onClick={register}
          />
        </div>
      </form>

      <Link to="/Account" className="">
        <button>Go back</button>
      </Link>
    </>
  );
};

export default Signup;
