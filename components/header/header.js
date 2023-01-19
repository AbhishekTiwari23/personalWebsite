import React, { useContext, useEffect, useState } from "react";
import ToggleButton from "./togglebutton";
import useDarkMode from "./dark";
import AbhishekLogo from "../../assets/mypic/abhisheklogo.png";
import Gear from "../../assets/socials/moon.svg";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const theme = useDarkMode();
  return (


    <>
    <div className="header border dark:text-white text-black rounded-4xl border-myblue border-solid  w-80 lg:w-8/12 px-3.5 py-4 mx-auto " >
      <div className="name-logo inline-block  ">
        <Link href="/" className="logo">
            <Image src={AbhishekLogo} alt="logo" className="abhiLogo inline w-24 lg:w-auto" height="70" />
        </Link>
      </div>
        <div className="menu-item lg:inline-block float-right hidden lg:m-4 ">
          <ul className="kk inline  lg:mt-6 text-white">
            <li className="inline lg:m-4 lg:p-1.5 cursor-pointer text-black dark:text-white hover:border hover:border-solid hover:border-myblue hover:rounded-4xl hover:duration-1000 hover:text-myblue">
              <Link href="/">Home</Link>
            </li>
            <li className="inline lg:m-4 lg:p-1.5 cursor-pointer text-black dark:text-white hover:border hover:border-solid hover:border-myblue hover:rounded-4xl hover:duration-1000 hover:text-myblue">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="inline lg:m-4 lg:p-1.5 cursor-pointer text-black dark:text-white hover:border hover:border-solid hover:border-myblue hover:rounded-4xl hover:duration-1000 hover:text-myblue">
              <Link href="/contactme">Contact Me</Link>
            </li>
            <li className="aat  float-right inline m-0 p-0 cursor-pointer" >
              <ToggleButton className="inline bg-pink" />
            </li>
          </ul>
      </div>
      <div
          className="hamburger-open lg:hidden inline"
          onClick={() => {
            setshow(true);
          }}
        >
          <Image src={Gear} alt="hamburger" height="25" className="inline float-right"/>
        </div>
      </div>
      
      </>
  );
};

export default Header;

