import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
// import SignupForm from "../components/SignupForm";
// import { Actions } from "../Actions";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      name: name,
      city: city,
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  // };

  return (
    <>
      <h1>Create an Account</h1>
      {/* create form comp */}
      <form action="signup">
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Name"
            name="Name"
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
            type="text"
            placeholder="Enter a password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Signup"
            className="loginButton"
            onClick={register}
          />
        </div>
      </form>

      <Link to="/profile" className="">
        <button>Back home</button>
      </Link>
    </>
  );
};

export default Signup;
