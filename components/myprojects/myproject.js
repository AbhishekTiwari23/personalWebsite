import React from 'react'
import ProjectCard from './projectCard';
import Portfolio from '../../assets/mypic/portfolio.png'
const Projects=()=>{
    return(
        <>        <div className="lg:w-1/2 rounded-4xl my-20 p-4 text-center lg:my-4 mx-auto">
            <div className=" text-center">
             <div className="title font-bold text-xl lg:text-5xl text-center"><span className='grade '> Yeah,I really work hard </span><small>💼</small></div>
             <div className="lg:mb-8  lg:text-2xl p-2 text-center">Each of my project is Unique ✨</div>
             </div>
             <div className="text-center mt-4 inline rounded-4xl mx-auto">
                <ProjectCard description = "React.JS SCSS HTML" name="Portfolio" pic={Portfolio} siteLink="" github="" error="" className="text-center"/>
             </div>
        </div>
        <style jsx>
            {`
            .grade {
                font-weight: bold;
                text-align: left;
                font-weight: bold;
                background: -webkit-linear-gradient(
                  -45deg,
                  #05e6ee,
                  #e81264,
                  #99b13a,
                  #a113d1
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }      
            `}
        </style>
        </>

    )
}
export default Projects;
