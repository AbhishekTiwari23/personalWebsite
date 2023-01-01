import React from 'react'
import BlogFront from '../components/blogs/blogs.front';
import GotoTop from '../components/gototop/gototop';
const Blogs = () =>{
    return(
        <>
        <div className="heading grade font-bold text-6xl my-32 border-solid border-b w-1/2 mx-auto text-center">I Love to write ✒️</div>
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