import React from 'react'
import { useState } from 'react';
import BlogFront from '../components/blogs/blogs.front';
import GotoTop from '../components/gototop/gototop';
const Blogs = () =>{
  const [email,setemail] = useState("");
  const handlemail=(event)=>{
    setemail(event.target.value);
  
  }
    return(
        <>
        
        <div className="heading grade font-bold lg:text-6xl text-3xl lg:my-32 my-10 border-solid border-b lg:w-1/2 mx-auto text-center">I Love to write ✒️</div>
        <div className="message text-xs text-myblue p-3">These are not my blogs I have just used them to showcase my developer skills</div>
        <GotoTop/>
        <BlogFront/>
        <div className="content">Loved My Blogs, subscribe for upcoming blogs and events</div>
        <div className="email mx-auto my-6 text-center ">
        <input type="email" name="email" required className='inline focus:outline-none w-2/6 p-4   rounded-l-lg text-black 'placeholder="Email *" value={email} onChange={handlemail}/>
        <button type="submit" onClick={(event)=>handleSubmit(event)} className='font-bold bg-myblue  text-white p-4 rounded-r-lg inline' >
          Submit </button>
          </div>
        <style jsx>
            {`
            .grade{
                font-weight: bold;

                background: linear-gradient(-90deg,  #F85032, #E73827);
               -webkit-background-clip: text;
               background-size: 200%;
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
            `}
        </style>
        </>
    )
}
export default Blogs;