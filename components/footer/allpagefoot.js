import React from "react";
import { useState,useEffect } from "react";
import AbhishekLogo from "../../assets/mypic/abhisheklogo.png";
import Github from "../../assets/socials/githubwhite.svg";
import LinkedIn from "../../assets/socials/linkedin.svg";
import Image from "next/image";
import Link from 'next/link'
import Twitter from "../../assets/socials/twitter.svg";
const Footerall = () => {
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
        <>
        <hr/>
        <div className="footer-links block lg:p-2 p-1">
       <div className="foot-img inline-block"> <Link href="/">
          <Image src={AbhishekLogo} alt="name" className="abhiLogo w-11 lg:w-auto" height="70"/>
        </Link></div>
        {profile.myname && (
                    <>
         
        <div className="tagline inline-block float-right text-xs lg:text-base">Made with <big>❤️</big> by {profile.myname.firstName } {profile.myname.lastName}</div>
        </>
        )}
      <div className="s ml-96 -mt-20">
        <ul className="socials hidden lg:inline-block">
        {profile.socials && (
                    <>
            
         <li className="foot-link inline-block"> <Link href={profile.socials.myGithub} target= "_blank">
            <Image src={Github} alt="Github" />
          </Link></li>
      <li className="foot-link inline-block ">    <Link href={profile.socials.myLinkedin} target= "_blank">
            <Image src={LinkedIn} alt="LinkedIn" />
          </Link></li>
      <li className="foot-link inline-block">    <Link href={profile.socials.myTwitter} target= "_blank">
            <Image src={Twitter} alt="Twitter" />
         </Link></li>
         </>
        )}
        </ul>
        </div>
      </div>
      <style jsx>
        {`
          foot-link:hover{
            transform: scale(1.09);
        }    
        `}
      </style>
      </>
    )
}
export default Footerall;