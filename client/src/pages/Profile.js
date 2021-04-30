import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  //refresh every profile fetch
  useEffect(() => {
    // fetchProfile();
    //loggedIn
  }, []);

  //IF logged in return logged in Profile page
  if (loading) {
    if (loggedIn) {
      setLoading(false);
    }
    return (
      <div>
        <h1>Sign in to see your Profile...</h1>
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
      </div>
    );
  }

  // destructure from profile data for display
  // const { name, email } = profile;

  //ELSE return this..
  return (
    <>
      <h1>Profile page</h1>
      <h2>Name</h2>
      <h2>Email</h2>
      <h2>Country</h2>
      <h2>City</h2>
    </>
  );
};

export default Profile;
