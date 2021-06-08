import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Account = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // const msg = useContext(UserContext);
  // CHECK in logged in

  const { user, setUser } = useContext(UserContext);
  console.log("1 log");
  console.log(user);
  // const { value, setValue } = useContext(UserContext);
  // console.log(user);
  // if (loading) {
  //   if (loggedIn) {
  //     setLoading(false);
  //   }
  return (
    <div>
      <h1>Account</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>

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
