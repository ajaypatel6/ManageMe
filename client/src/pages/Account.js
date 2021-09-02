// import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

const Account = () => {
  // logout function

  var user = AuthService.getCurrentUser();

  const logout = (event) => {
    console.log("test");
    AuthService.logout();
    window.location = "/Account";
  };

  if (!AuthService.getCurrentUser()) {
    return (
      <div>
        <h1>Account</h1>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        {/* <pre>{user.name}</pre> */}
        <Link to="/Login">
          <button className="loginProfileButton">Login</button>
        </Link>
        <Link to="/Signup">
          <button className="signupProfileButton">Signup</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <button onClick={logout} className="loginProfileButton">
        Logout
      </button>
      <h3>
        <u>Username: </u>
        {user.username}
      </h3>
      <h3>
        <u>City: </u>
        {user.city}
      </h3>
      <h3>
        <u>Email: </u>
        {user.email}
      </h3>
    </>
  );
};

export default Account;
