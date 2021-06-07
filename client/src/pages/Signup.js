import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
// import SignupForm from "../components/SignupForm";
// import { Actions } from "../Actions";

const Signup = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    window.location = "/";
    // remove login
    // remove register
    // add logout
  }

  const register = (event) => {
    event.preventDefault(); // FIXES!!!!

    Axios.post("http://localhost:3001/register", {
      name: name,
      city: city,
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message === "Signing") {
        console.log(loggedIn);
        setLoggedIn(true);
      }
    });
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  // };

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
