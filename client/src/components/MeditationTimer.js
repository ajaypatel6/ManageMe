import React, { useState, useEffect } from "react";
import Sound from "react-sound";
import natureSound from "../sounds/nature.mp3";
import AuthService from "../services/auth.service";

// This class gonna be pretty loaded lols
// has time, sound and save to db for meditaition

const MeditationTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  //
  const [playSound, setPlaySound] = useState(0);

  var user = AuthService.getCurrentUser();

  console.log(user.email);

  // For user with specific id, create new meditation entry and save the seconds..
  // meditation id(+1) , meditition length (/60 for mins), email?

  const saveMeditation = (e) => {
    e.preventDefault();
    // // DataService?
    // AuthService.login(name, password).then(
    //   (response) => {
    //     console.log(response.username);
    //     // setMessage(response.data.message);
    //     // setSuccesful(true);
    //     // response.render("/profile");
    //     // window.location.reload();
    //     window.location = "/Dashboard";
    //     // console.log(message);
    //   },
    //   (error) => {
    //     // const resMessage =
    //     //   (error.response &&
    //     //     error.response.data &&
    //     //     error.response.data.message) ||
    //     //   error.message ||
    //     //   error.toString();
    //     // setMessage(resMessage);
    //     // setSuccesful(false);
    //   }
    // );
  };

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <div className="timer">
        <div>
          <button onClick={() => setPlaySound(!playSound)}>
            Toggle meditation sound
          </button>
          {playSound ? <audio src={natureSound} autoPlay /> : null}
        </div>
        <div className="time">{seconds}s</div>
        <div className="row">
          <button
            className={`meditateButton meditateButton meditateButton-${
              isActive ? "active" : "inactive"
            }`}
            onClick={toggle}
          >
            {isActive ? "Pause Meditation" : "Start Meditation"}
          </button>
          {/* diff color obs , save and redirect to dashboard*/}
          <button className="saveMeditateButton">Save Meditation</button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default MeditationTimer;
