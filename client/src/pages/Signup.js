import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import SignupForm from "../components/SignupForm";
// import { Actions } from "../Actions";

const Signup = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const insertUser = (newUser) => {};

  // function request() {
  //   fetch("http://localhost/manage-me-api/request.php", {})
  //   .then((response)=>response.json())
  //   .then()
  // }
  function request() {
    // var axios = require("axios");
    // var config = {
    //   method: "get",
    //   url: "http://localhost/manage-me-api/request.php",
    // };
    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    console.log("inside handleGetJson");
    fetch(`http://localhost/manage-me-api/request.php`, {})
      .then((response) => response.json())
      .then((messages) => {
        console.log("messages");
      });
  }

  request();

  return (
    <>
      <h1>Create an Account</h1>
      {/* create form comp */}
      {/* <form action="signup">
        <div>
          <label>First Name</label>
          <input type="text" placeholder="Name" name="Name" />
          <label>Email</label>
          <input type="text" placeholder="Enter your Email" name="Email" />
          <label>City</label>
          <input type="text" placeholder="City" name="City" />
          <label>Password</label>
          <input type="text" placeholder="Enter a password" name="password" />
          <input type="submit" value="Insert" className="loginButton" />
        </div>
      </form> */}
      <Link to="/profile" className="">
        <button>Back home</button>
      </Link>
    </>
  );
};

export default Signup;
