import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // CHECK in logged in

  if (loading) {
    if (loggedIn) {
      setLoading(false);
    }
    return (
      <div>
        <h1>Account</h1>
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
    </>
  );
};

export default Account;
