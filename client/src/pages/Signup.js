import React from "react";
import { Link } from "react-router-dom";
// import SignupForm from "../components/SignupForm";
// import { Actions } from "../Actions";

const Signup = () => {
  return (
    <>
      <h1>Create an Account</h1>
      {/* create form component */}
      {/* <form action="signup">
        <div>
          <label>First Name</label>
          <input type="text" placeholder="Name" name="Name" />
          <label>Email</label>
          <input type="text" placeholder="Enter your Email" name="Email" />
          <label>Country</label>
          <input type="text" placeholder="Country" name="Country" />
          <label>City</label>
          <input type="text" placeholder="City" name="City" />
          <label>Password</label>
          <input type="text" placeholder="Enter a password" name="password" />
          // <button className="loginButton">Sign-up</button>
          <input type="submit" value="Insert" />
        </div>
      </form> */}
      <Link to="/profile" className="">
        <button>Back home</button>
      </Link>
    </>
  );
};

export default Signup;
