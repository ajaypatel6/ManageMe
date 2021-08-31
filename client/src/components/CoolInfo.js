import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import DataService from "../services/data.service";

const CoolInfo = () => {
  const weatherKey = "18eda1685298ff0be778b9f349d22244";
  const [city, setCity] = useState("");

  const [weather, setWeather] = useState("");

  var user = AuthService.getCurrentUser();
  var currentWeather = DataService.getWeather();

  //useEffect for weather, on reload
  useEffect(() => {
    console.log("rendering");
    // setCity(user.city);

    // console.log("the city is " + city);
    // var currentWeather = DataService.getWeather(city);
    // console.log(currentWeather + " in the city of " + city);
  }, []);

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
