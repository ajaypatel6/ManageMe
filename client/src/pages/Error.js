import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      {/* <div className="languages-container"> */}
      <h1 className="title">bad link</h1>
      <Link to="/">
        <button className="loginProfileButton">go Back</button>
      </Link>
      {/* </div> */}
    </>
  );
};

export default Error;
