import React from 'react'
import ProjectCard from './projectCard';
import Portfolio from '../../assets/mypic/portfolio.png'
const Projects=()=>{
    return(
        <>        <div className="project-wrapper lg:w-1/2 rounded-4xl p-4 my-4 mx-auto mt-24 ">
            <div className="content mb-24 text-center">
             <div className="title font-bold text-xl lg:text-4xl text-center"><span className='grade '> Yeah,I really work hard </span><small>💼</small></div>
             <div className="project-content lg:mb-8  lg:text-3xl text-center">Each of my project is Unique ✨</div>
             </div>
             <div className="allprojectCard-wrapper text-center inline rounded-4xl p-4 mx-auto">
                <ProjectCard description = "React.JS SCSS HTML" name="Portfolio" pic={Portfolio} siteLink="" github="" error="" />
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
