import React, { useEffect, useState } from "react";
import Abhishek from "../../abhishek/abhishek";
import MyPhoto from "../../assets/mypic/myphoto.jpeg";
import Image from 'next/image'; 
import Typewriter from "./typewrite";

const AboutMe = () => {

  
  return (
       <div className="wrapper top-28 my-60 align-center  w-1/2 bg-transparent  mx-auto  ">
      <div  className="grade borger-myblue border-solid borderl rounded-4xl p-2 font-bold text-center text-5xl">A little bit Abou Me</div>

      <Image className="myimage mx-auto  my-32 border-2  rounded-4xl h-52 w-52 " src={MyPhoto} alt="my photo" />

      <div className="content-wrap">
        
        <div className="content">
          <Typewriter/>
        </div>
      </div>
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
