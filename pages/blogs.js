import React from 'react'
import BlogFront from '../components/blogs/blogs.front';
import GotoTop from '../components/gototop/gototop';
const Blogs = () =>{
    return(
        <>
        
        <div className="heading grade font-bold lg:text-6xl text-3xl lg:my-32 my-10 border-solid border-b lg:w-1/2 mx-auto text-center">I Love to write ✒️</div>
        <div className="message text-xs text-myblue p-3">These are not my blogs I have just used them to showcase my developer skills</div>
        <GotoTop/>
        <BlogFront/>
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