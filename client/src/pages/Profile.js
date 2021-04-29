import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  //IF logged in return logged in Profile page

  //ELSE return this..
  return (
    <>
      <h1>Profile page</h1>

      <div>
        <h3>Signup</h3>

        <Link to="/signup" className="">
          <button className="signupProfileButton">Create an Account</button>
        </Link>
        <h3>Login to your Account</h3>
        <Link to="/login" className="">
          <button className="loginProfileButton">Login</button>
        </Link>
      </div>
    </>
  );
};

export default Profile;
