import React from 'react'
import EducationCard from './educationCard.js';
const Education = () =>{
    return(
        <>
        <div className="education lg:w-2/5 w-11/12 mx-auto lg:my-32 my-20 ">
            <div className='title font-bold text-center lg:text-6xl text-4xl '><span className='grade'>I am a Learner </span>📚</div>
            <EducationCard alink= "http://www.nsit.ac.in/"/>

        </div>
        <style jsx>
            {`

            .grade{
                font-weight: bold;
                background: -webkit-linear-gradient(-45deg, #25a4b5, #b01b95, #264deb, #23d5ab);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;       
            }                    
            `}
        </style>
        </>
    )
}
export default Education;