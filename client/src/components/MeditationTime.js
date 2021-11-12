import React, { useState, useEffect } from "react";
// import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";

const MeditationTime = () => {

  const [meditationOn, setMeditationOn] = useState(false);

  // if meditation = on , return the timeLeft visible 
  if (meditationOn) {
    return (
      <div>
        {/* NUMBER SHOWING AND GOING DOWN DOWN */}
      </div>
    );
  }

  return (
    <>
      <h1 className="timeLeft">Time left</h1>
    </>
  );
};

export default MeditationTime;
