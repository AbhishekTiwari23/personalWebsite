import React, { useContext, useEffect, useState } from "react";
import ToggleButton from "./togglebutton";
import useDarkMode from "./dark";
import AbhishekLogo from "../../assets/mypic/abhisheklogo.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const theme = useDarkMode();
  return (


    <>
    <div className="header border dark:text-white text-black rounded-4xl border-myblue border-solid w-8/12 px-3.5 py-4 mx-auto " >
      <div className="name-logo inline-block  ">
        <Link href="/" className="logo">
            <Image src={AbhishekLogo} alt="logo" className="abhiLogo inline" height="70" />
        </Link>
      </div>
        <div className="menu-item inline-block float-right m-4 ">
          <ul className="kk inline  mt-6 text-white">
            <li className="aa inline m-4 p-1.5 cursor-pointer text-black dark:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="aa inline m-4 p-1.5 cursor-pointer text-black dark:text-white">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="aa inline m-4 p-1.5 cursor-pointer text-black dark:text-white">
              <Link href="/contactme">Contact Me</Link>
            </li>
            <li className="aat  float-right inline m-0 p-0 cursor-pointer" >
              <ToggleButton className="inline bg-pink" />
            </li>
          </ul>

        <div
          className="hamburger-open"
          onClick={() => {
            setshow(true);
          }}
        >
          <img src="data:image/png;base64,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"></img>
        </div>
      </div>
      </div>

      {/* <div className="hambeurger-close">
          <Image src={Close} alt="hamburger-close" />
        </div> */}
        <style jsx>
          {`





            .aa:hover{
              border:1px solid #1F51FF;
              border-radius: 2rem;
              
              transition: 1.7s;
              color: #1F51FF;

            }
            .hamburger-open{
              display:none;
            }

          `}
        </style>
      
      </>
  );
};

export default Header;

