import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import AuthService from "../services/auth.service";

const Account = () => {
  // logout function
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
      <h1>Logout</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Account;
