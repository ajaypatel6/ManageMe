import React, { useState, useEffect } from "react";
import useSound from 'react-sound';
import natureSound from '../sounds/nature.mp3';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Timer;
