import React, { useEffect, useState } from "react";
import Abhishek from "../../abhishek/abhishek";
import MyPhoto from "../../assets/mypic/myphoto.jpeg";
import Image from 'next/image'; 
import Type from "./typewrite.js";

const AboutMe = () => {

  
  return (
       <div className="wrapper top-28 lg:my-60 my-10 align-center  lg:w-1/2   mx-auto  ">
      <div  className="grade borger-myblue border-solid borderl rounded-4xl p-2 font-bold text-center text-3xl lg:text-5xl">A little bit Abou Me</div>

      <Image className="myimage mx-auto  lg:my-32 m-5 border-2  rounded-4xl h-52 w-52 " src={MyPhoto} alt="my photo" />
      <span className="inile text-center lg:text-3xl text-lg font-bold text-myblue"><Type  /></span>
      {/* <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/> */}
      <style jsx>
      {`
      .grade{
        font-weight: bold;

        background: linear-gradient(-90deg,  #EE0979, #FF6A00, #fcfc8f);
       -webkit-background-clip: text;
       background-size: 200%;
       -webkit-text-fill-color: transparent; 
       animation: grading 8s ease infinite;      
    }
      

      `}
    </style>
  
    </div>
    

  );
};
export default AboutMe;
