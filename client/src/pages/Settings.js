import React, { useState, useEffect } from "react";

// combine with profile?
const Settings = () => {
  //If not logged in, say to log in
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // CHECK in logged in

  if (loading) {
    if (loggedIn) {
      setLoading(false);
    }
    return (
      <div>
        <h1>Login to change settings...</h1>
      </div>
    );
  }
  //If logged in
  return (
    <>
      <h1>Settings page</h1>
      <h4>Disable Meditation</h4>
      <h4>reset stats</h4>
      <h4>Change password</h4>
      <h4>Change Email</h4>

      <h4>Notifications</h4>
      <h4>Sounds</h4>

      <h4>Google intergration for schedule</h4>

      <h4>Language</h4>
      <h4>Time format</h4>
    </>
  );
};

export default Settings;
