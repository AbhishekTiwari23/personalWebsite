import React from "react";
import { useState,useEffect } from "react";
import Link from 'next/link'

const Footer = () => {
  const [profile,setProfile] = useState({});
  useEffect(() => {
    fetch('./api/user')
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      })
      .catch(error => console.error(error));
  }, []);   
  return (

    <div className="footer block">
      <div className="content lg:m-4 m-1 lg:mb-12 lg:ml-20">
        <div className="title font-bold lg:text-5xl text-2xl">
          <span className="grade">Dont be a stranger! </span>
          <span className="wave">👋</span>
        </div>
        <div className="links">
          <div className="link-content lg:text-2xl font-bold lg:mt-8">Connet with me on socials 🥂</div>
          <ul className="content-socials m-2 lg:m-4">
          {profile.socials && (
                    <>
           <li className="social-link lg:m-4 inline-block m-2"> <Link href={profile.socials.myGithub} target= "_blank" className="social-link lg:text-4xl text-base">
              🐙GH 
            </Link></li>
            <li className="social-link lg:m-4 inline-block m-2 ">  <Link href={profile.socials.myLinkedin} target= "_blank" className="social-link lg:text-4xl text-base">
              🐦TW
            </Link></li>
            <li className="social-link lg:m-4 inline-block m-2 "> <Link href={profile.socials.myTwitter} target= "_blank" className="social-link lg:text-4xl text-base">
              📸IN

            </Link></li>
            <li className="social-link text-base lg:m-4 inline-block lg:text-4xl m-2"><Link href='/contactme' classname="text-base">
            📬IL
            </Link></li>
            </>
          )}
          </ul>
        </div>
        
      </div>
     
      <style jsx>
        {`
        .grade {
          font-weight: bold;
          background: -webkit-linear-gradient(
            -45deg,
            #ee582a,
            #b01b54,
            #264deb,
            #23d5ab
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .wave {
          animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
          animation-duration: 2.5s; /* Change to speed up or slow down */
          animation-iteration-count: infinite; /* Never stop waving :) */
          transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
          display: inline-block;
        }
        @keyframes wave-animation {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          } /* The following five values can be played with to make the waving more or less extreme */
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          } /* Reset for the last half to pause */
          100% {
            transform: rotate(0deg);
          }
        }


        `}
      </style>
    </div>
  );
};
export default Footer;
