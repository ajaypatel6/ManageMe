import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Account = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // const msg = useContext(UserContext);
  // CHECK in logged in
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  // const { value, setValue } = useContext(UserContext);
  console.log(loggedIn);
  // if (loading) {
  //   if (loggedIn) {
  //     setLoading(false);
  //   }
  return (
    <div>
      <h1>Account</h1>
      {/* <div>{value}</div> */}

      <Link to="/Login">
        <button className="loginProfileButton">Login</button>
      </Link>
      <Link to="/Signup">
        <button className="signupProfileButton">Signup</button>
      </Link>
    </div>
  );
  // }

  // return (
  //   <>
  //     <h1>Logout</h1>
  //   </>
  // );
};

export default Account;
