import React, { useState, useEffect } from "react";
// need this or crash
import Sound from "react-sound";
import natureSound from "../sounds/nature.mp3";
import AuthService from "../services/auth.service";

import MeditationService from "../services/meditation.service";
// This class gonna be pretty loaded lols
// has time, sound and save to db for meditaition

const MeditationTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  //
  const [email, setEmail] = useState("");

  const [playSound, setPlaySound] = useState(0);

  var user = AuthService.getCurrentUser();

  // console.log(user.email);
  // if (user) {
  //   setEmail(user.email);
  // }
  // For user with specific id, create new meditation entry and save the seconds..
  // meditation id(+1) , meditition length (/60 for mins), email?

  const saveMeditation = (e) => {
    e.preventDefault();
    // DataService?
    setEmail(user.email);

    setCurrentSeconds(seconds);
    MeditationService.saveMeditation(email, currentSeconds).then(
      (response) => {
        console.log(response.email);
        // setMessage(response.data.message);
        // setSuccesful(true);
        // response.render("/profile");
        // window.location.reload();
        console.log("saved");

        reset();

        window.location = "/Dashboard";
        // console.log(message);
      },
      (error) => {
        // const resMessage =
        //   (error.response &&
        //     error.response.data &&
        //     error.response.data.message) ||
        //   error.message ||
        //   error.toString();
        // setMessage(resMessage);
        // setSuccesful(false);
      }
    );
  };

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    console.log("med reset");
    // currentSeconds = seconds;
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    window.soundManager.setup({ debugMode: false });
    console.log(email);
    console.log(currentSeconds);
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
          <button className="saveMeditateButton" onClick={saveMeditation}>
            Save Meditation
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default MeditationTimer;
