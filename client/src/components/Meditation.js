import React, { useState } from "react";
// import React, { useState, useContext, useEffect } from "react";
import MeditationTimer from "./MeditationTimer";


const Meditation = () => {
  const [meditationOn, setMeditationOn] = useState(false);

  // if meditation = on , return the timeLeft visible
  if (meditationOn) {
    return (
      // need button to turn on off.
      <div>
        <button
          className="meditationToggleButton"
          onClick={() => setMeditationOn(!meditationOn)}
        >
          Remove meditation stuff
        </button>
        {/* NUMBER SHOWING AND GOING DOWN DOWN */}
        <MeditationTimer></MeditationTimer>
      </div>
    );
  }

  return (
    <>
      <div>
        <button
          className="meditationToggleButton"
          onClick={() => setMeditationOn(!meditationOn)}
        >
          Meditate
        </button>
      </div>
    </>
  );
};

export default Meditation;
