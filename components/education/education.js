import React from 'react'
import EducationCard from './educationCard.js';
const Education = () =>{
    return(
        <>
        <div className="education w-2/5 mx-auto my-32 ">
            <div className='title font-bold text-center text-6xl'><span className='grade'>I am a Learner </span>📚</div>
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