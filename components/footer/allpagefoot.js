import React from "react";
import Abhishek from "../../abhishek/abhishek";
import AbhishekLogo from "../../assets/mypic/abhisheklogo.png";
import Github from "../../assets/socials/githubwhite.svg";
import LinkedIn from "../../assets/socials/linkedin.svg";
import Image from "next/image";
import Link from 'next/link'
import Twitter from "../../assets/socials/twitter.svg";
const Footerall = () => {
    return (
        <>
        <hr/>
        <div className="footer-links block p-2">
       <div className="foot-img inline-block"> <Link href="/">
          <Image src={AbhishekLogo} alt="name" className="abhiLogo" height="70"/>
          {/* <div className = "footername">{Abhishek.myname.firstName} <span>{Abhishek.myname.lastName}</span></div> */}
        </Link></div>
        <div className="tagline inline-block float-right">Made with <big>❤️</big> by {Abhishek.myname.firstName } {Abhishek.myname.lastName}</div>
      <div className="s ml-96 -mt-20">
        <ul className="socials inline-block">
         <li className="foot-link inline-block"> <Link href={Abhishek.socials.myGithub} target= "_blank">
            <Image src={Github} alt="Github" />
          </Link></li>
      <li className="foot-link inline-block ">    <Link href={Abhishek.socials.myLinkedin} target= "_blank">
            <Image src={LinkedIn} alt="LinkedIn" />
          </Link></li>
      <li className="foot-link inline-block">    <Link href={Abhishek.socials.myTwitter} target= "_blank">
            <Image src={Twitter} alt="Twitter" />
         </Link></li>
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