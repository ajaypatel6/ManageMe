import React, { useState } from "react";
// import React, { useState, useContext } from "react";

// import { UserContext } from "../UserContext";
import AuthService from "../services/auth.service";

const Stats = () => {
  const [loading, setLoading] = useState(true);
  
  // CHECK in logged in
  const user = AuthService.getCurrentUser();
  if (user) {
    // const name = user.username;
  }
  // console.log(user);

  if (loading) {
    if (user) {
      setLoading(false);
    }
    return (
      <div>
        <h1>Login to see stats...</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Stats page</h1>
      <h4>Total time</h4>
      <h4>Total time this week/month/year.. etc</h4>
      <h4>Total tasks complete</h4>
      {/* Could have meditation stats in different component */}
      <h4>Averages</h4>
      <h2>Graph</h2>
      <h4>Range selector</h4>
      <h1>Meditation extraction test</h1>
    </>
  );
};

export default Stats;
