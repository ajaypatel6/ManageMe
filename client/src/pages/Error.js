import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      {/* <div className="languages-container"> */}
      <h1 className="title">bad link</h1>
      <Link to="/" className="btn good-btn">
        back home
      </Link>
      {/* </div> */}
    </>
  );
};

export default Error;
