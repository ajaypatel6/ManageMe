import React from "react";
import MeditationTime from "./MeditationTime";

const MeditatePrompt = () => {

  const meditate = (e) => {
    e.preventDefault();
    alert('Meditation has begun ');
    // turn on timer

    // show timer and turn on sounds 

    // on finish you record data
  };

  return (
    <>
      <input
            type="submit"
            value="meditate"
            className="meditateButton"
            // onClick={(e) => this.handleFormSubmit(e)}
            onClick={meditate}
          />
      {/* goes away after 1 complete session a day */}
      <MeditationTime></MeditationTime>
    </>
  );
};

export default MeditatePrompt;
