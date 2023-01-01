import React from "react";
import Layer5 from "../../assets/socials/layer5dark.svg";
import OpenCard from "./openSourceCard";

const OpenSource = () => {
  return (
    <>
    <div className="open-source  p-4  mx-auto my-32">
        <div className="open-title text-6xl font-bold text-center"><span className='grade' >I love to contribute</span></div>

      <div className="contribution">
      {/* <p className="open-para">Look at some of my contributions</p> */}
        <OpenCard name="Layer5" logo={Layer5} />
      </div>
      </div>
      <style jsx>
        {`
          .grade{
            font-weight: bold;
            background: -webkit-linear-gradient(-45deg, #2cadc1, #1bb08d, #264deb, #cc23d5);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;       
        }      
        `}
      </style>
      </>
      
  );
};
export default OpenSource;
