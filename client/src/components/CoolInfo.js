import React, { useState, useEffect } from "react";
// import AuthService from "../services/auth.service";
import DataService from "../services/data.service";
import AuthService from "../services/auth.service";

const CoolInfo = () => {
  // const weatherKey = "18eda1685298ff0be778b9f349d22244";
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  // const [weather, setWeather] = useState("");

  var user = AuthService.getCurrentUser();
  // var currentWeather = DataService.getWeather(city);

  //useEffect for weather, on reload
  useEffect(() => {
    console.log("rendering");
    if(user){
    const user = AuthService.getCurrentUser();

    setCity(user.city);

    var currentWeather = DataService.getWeather(city);
    console.log(JSON.stringify(currentWeather) + " in the city of " + city);
    }
  }, [city]); //?? remove or update on city change? shouldnt tho

  if (loading) {
    if (user) {
      setLoading(false);
    }
    return (
      <div>
        <h1>Login to see more...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="CoolInfo">
        <h4>Weather in <b>{city}</b> is </h4>
        <h4>interesting stats based on location/Profile</h4>
      </div>
    </>
  );
};

export default CoolInfo;