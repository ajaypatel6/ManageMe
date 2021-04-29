import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <h1>Profile page</h1>

      <Link to="/login" className="">
        <button>Login</button>
      </Link>
    </>
  );
};

export default Profile;
