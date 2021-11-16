import React, { useState, useEffect } from "react";
// import React, { useState, useContext, useEffect } from "react";
import Timer from "./Timer";

import { Link } from "react-router-dom";

const MeditationTime = () => {

  const [meditationOn, setMeditationOn] = useState(true);

  
  // if meditation = on , return the timeLeft visible 
  if (meditationOn) {
    return (
      <div>
        {/* NUMBER SHOWING AND GOING DOWN DOWN */}
        <Timer></Timer>
      </div>
    );
  }

  return (
    <>
      
    </>
  );
};

export default MeditationTime;
