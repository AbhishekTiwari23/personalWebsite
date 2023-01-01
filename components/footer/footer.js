import React from "react";
import Abhishek from "../../abhishek/abhishek";
import Link from 'next/link'

const Footer = () => {
  return (

    <div className="footer block">
      <div className="content">
        <div className="title">
          <span className="grade">Dont be a stranger! </span>
          <span className="wave">👋</span>
        </div>
        <div className="links">
          <div className="link-content">Connet with me on socials 🥂</div>
          <ul className="content-socials">
           <li className="social-link"> <Link href={Abhishek.socials.myGithub} target= "_blank" className="social-link">
              🐙GH 
            </Link></li>
            <li className="social-link">  <Link href={Abhishek.socials.myLinkedin} target= "_blank" className="social-link">
              🐦TW
            </Link></li>
            <li className="social-link"> <Link href={Abhishek.socials.myTwitter} target= "_blank" className="social-link">
              📸IN

            </Link></li>
            <li className="social-link"><Link href='/contactme'>
            📬IL
            </Link></li>
          </ul>
        </div>
        
      </div>
     
      <style jsx>
        {`
        .content{
          margin: 1rem;
          margin-bottom: 3rem;
          // margin-top: -30rem;
          margin-left: 8%;
        }
        .title{
          font-weight: bold;
          font-size: 3rem;
        }
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
        .link-content{
          font-weight: bold;
          margin: 2rem 0rem;
          font-size: 1.5rem;
        }
        .content-socials{
          text-decoration: none;
          // color: aliceblue;
          font-weight: bold;
          padding: 2rem;
          font-size: 2rem;
          margin-top: 2rem;
          word-spacing: in-between;
        }
        .social-link{
          margin:1rem;
          padding:1px;
          display: inline-block;
        }
        .abhiLogo{
          margin:1rem;
          borger-radius:32px;
        }
        .tagline{
          display: inline-block;
          text-align: center;
          font-weight: bold;
          margin: 1rem;
          float: right;
        }
        .socials{
            // float: right;
            text-align: center;
            margin-top: -4rem;
        }
        .foot-link{
          display:inline-block;
        }
        foot-link:hover{
          transform: scale(1.09);
      }    
        `}
      </style>
    </div>
  );
};
export default Footer;
