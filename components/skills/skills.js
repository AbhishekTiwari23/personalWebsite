import React from "react";
 import Html from "../../assets/skills/html.svg";
import Css from "../../assets/skills/css.svg";
import Git from "../../assets/skills/git.svg";
import Xcode from "../../assets/skills/xcode.svg";
import GoogleCloud from "../../assets/skills/goglecloud.svg";
import C from "../../assets/skills/c.svg";
import Java from "../../assets/skills/java.svg";
import Scss from "../../assets/skills/scss.svg";
import BootStrap from "../../assets/skills/bootstrap.svg";
import TypeScript from "../../assets/skills/typescript.svg";
import Gatsby from "../../assets/skills/gatsby.svg";
import VsCode from "../../assets/skills/vscode.svg";
import Github from "../../assets/skills/github.svg";
import JavaScript from "../../assets/skills/javascript.svg";
import WordPress from "../../assets/skills/wordpress.svg";
import WebPack from '../../assets/skills/webpack.svg';
import Android from "../../assets/skills/android.svg";
import Kotlin from "../../assets/skills/kotlin.svg";
import Node from "../../assets/skills/nodejs.svg";
import Reac from "../../assets/skills/reactjs.svg";
import Next from "../../assets/skills/nextjs.svg";
import Flutter from "../../assets/skills/flutter.svg";
import Python from "../../assets/skills/python.svg";
import Dart from '../../assets/skills/dart.svg';
import Image from "next/image";
import Cpp from "../../assets/skills/cpp.svg";
const Skills = () => {
  return (
    <>
        <div className="skills">
      <div className="heading">
        <div className="title">
          <span className="grade">Skills that I developed over the years</span> 🛠️{" "}
        </div>
      </div>
      <div className="content">
      <div className="content-title">  <div >Programming Languages </div></div>
        <div className="box-out">

        <div className="boxes">     <Image src={Cpp} alt="" className="boxes"/></div>
        <div className="boxes"><Image src={Python} alt="" className="boxes"/></div>
        <div className="boxes"><Image src={C} alt="" className="boxes"/></div>
        <div className="boxes"><Image src={Java} alt="" className="boxes"/></div>
        </div>
        <div className="content-title"><div > Web Development</div></div>
        <div className="box-out">
         <div className="boxes"> <Image src={Html} alt="" className="boxes"/></div>
         <div className="boxes"><Image src={Css} alt="" className="boxes"/></div>
         <div className="boxes"> <Image src={JavaScript} alt="" className="boxes"/></div>
         <div className="boxes"> <Image src={Reac} alt="" className="boxes"/></div>
         <div className="boxes"> <Image src={BootStrap} alt="" className="boxes"/></div>
         <div className="boxes"><Image src={Scss} alt="" className="boxes"/></div>
         <div className="boxes"><Image src={TypeScript} alt="" className="boxes"/></div>
         <div className="boxes"> <Image src={Gatsby} alt="" className="boxes"/></div>
         <div className="boxes"> <Image src={Node} alt="" className="boxes"/></div>
         <div className="boxes"> <Image src={Next} alt="" className="boxes"/></div>
        </div>

        <div className="content-title"><div>Tools </div></div>
        <div className="boxes"> <Image src={Github} alt="" className="boxes"/></div>

        <div className="boxes"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABuklEQVRoge2YTygEUQCHP2T9KUlKSjkoF6UcXBykXLCKG2eunJYzVxy5ceXMwcFFSS6Uy0qtP6UcpJQkWavd5bDzirFj3ox57416X321h232+9XWzDywWCz/mgqF1x4ARp3Pu8Chwt+KnBXgw+WS0aIAJPkZL0wa7JIiAWTwHnAF1Birk2Ae73jhnLE6H1qAJ/wHPAOthhp/ZQP/eOG6oUZPeoA88gMKQK+RUg8OkI8XHqH2PiTNJMHjhRMGer9RB9wQfsAtUK+9+guLZaKCuqC92qENeJEI9PMVaNfcDsBWiFgvNzW30wcUIwgXFoF+XfGVwHGE8cJT59rKmVYQL5xSHd8A3CkccA80qhywrDBeqOzFpwN40zAgB3SqGLCjIV64HXX8oMZ44VBU8VVA2sCAc6A6igGzBuKFM3+NbwIeDA54BJr/MmDNYLxwNWx8F/AegwF5oDvMgL0YxAv3g8aPxyDa7ZhsfAK4iEGw22skT/VSMYj1MiUz4DIGoV5m3LHlzmWyQK3MUgNkcZ1ilHsDOtPTEoq0zJdGKB39mf67uC0Aw7JLk8AJpWdz0+E5p0U63mKxWCzSfAJHiA5JFAVAjQAAAABJRU5ErkJggg==" alt="d-it"></img></div>
        <div className="boxes"> <Image src={VsCode} alt="" className="boxes"/> </div>
        <div className="boxes"><Image src={Xcode} alt="" className="boxes"/></div>
        <div className="boxes"> <Image src={GoogleCloud} alt="" className="boxes"/></div>
        <div className="boxes"> <Image src={Git} alt="" className="boxes"/></div>
        <div className="boxes"> <Image src={Android} alt="" className="boxes"/></div>
        <div className="boxes"><Image src={WordPress} alt="" className="boxes"/></div>

        <div className="content-title"><div>App Development </div></div>
        <div className="boxes"><Image src={Kotlin} alt="" className="boxes"/></div>
        <div className="boxes"> <Image src={Flutter} alt="" className="boxes"/></div>
        <div className="boxes"><Image src={Dart} alt="" className="boxes"/></div>
        <div className="boxes"><Image src={WebPack} alt="" className="boxes"/></div>
      </div>
    </div>
    <style jsx>
      {`
      .skills{
        margin: 0rem auto;
        padding: 1rem;
        height: auto;
        width: 40%;
        text-align: center;
      }
      .heading{
        margin-bottom: 6rem;
        text-align: justify;
      }
      .title{
        // text-align: center;
        font-weight: bold;
        font-size: 3rem;
      }
      .grade{
        font-weight: bold;
        background: -webkit-linear-gradient(-45deg, #3aad85 , #196ab5);
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;   
       animation: grading 8s ease infinite;        
    }
    @keyframes grading {
      from {
        -webkit-filter: hue-rotate(0);
        -moz-filter: hue-rotate(0);
        -ms-filter: hue-rotate(0);
        filter: hue-rotate(0);
      }
      to {
        -webkit-filter: hue-rotate(360deg);
        -moz-filter: hue-rotate(360deg);
        -ms-filter: hue-rotate(360deg);
        filter: hue-rotate(360deg);
      }
    }

    .content-title{
      font-weight: bold;
            font-size: 1.5rem;
            text-align: center;
            margin: 3rem 1rem;
        

    }
  .boxes{
    background-color: aliceblue;
    z-index: 40px;
    // height: 200px;
    min-height: 18px;
    //display: flex;
    border: 0.1rem solid rgb(88, 82, 82);
    display: inline-block;
    font-size: 1.1rem;
    //overflow: hidden;
    border-radius: 10px;
    padding: 10px;
    //flex-wrap: wrap;
    text-align: center;
    margin: 1rem;
    //vertical-align: middle;
   // width: auto;
    color: black;;
    
}
.boxes:hover{
  transform: scale(1.02);
  box-shadow: 0 0 50px #fcfcfc;
  transition: 1s;
}    
      `}
    </style>
    </>
  );
};
export default Skills;
