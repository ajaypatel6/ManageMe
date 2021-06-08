import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";

const Stats = () => {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  // CHECK in logged in

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
      <h4>Averages</h4>
      <h2>Graph</h2>
      <h4>Range selector</h4>
    </>
  );
};

export default Stats;
