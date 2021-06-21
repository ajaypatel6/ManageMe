import React from "react";
import AuthService from "../services/auth.service";

const CoolInfo = () => {
  const weatherKey = "18eda1685298ff0be778b9f349d22244";

  var user = AuthService.getCurrentUser();
  var userCity = user.city;
  return (
    <>
      <div className="CoolInfo">
        <h4>Weather</h4>
        <h4>Time till dark</h4>
        <h4>interesting stats based on location/Profile</h4>
      </div>
    </>
  );
};

export default CoolInfo;
