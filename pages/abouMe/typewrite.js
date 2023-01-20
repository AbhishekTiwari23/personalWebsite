import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings : [" I am Abhishek Tiwari", " I am a Coder", " I am a Developer"],
        autoStart:true,
        loop:true,
        pauseFor : 1200,
        cursor:'_',
        deleteSpeed:100,
      }}
    />
  );
}

export default Type;
