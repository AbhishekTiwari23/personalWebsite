import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
const Card = (props) =>{
    return(
        <>
        <div className="achi-wrapper bg-goldenyellow text-black lg:w-2/3 mx-auto my-4 border-solid border-2 border-black rounded-2xl ">
<Image src={props.logoUrl} alt="" className='rounded-t-2xl h-40'/>
            <div className="name text-center font-bold lg:text-3xl ">{props.name}</div>
            <div className="content text-base m-2 lg:m-4">{props.para}</div>

        </div>
        <style jsx>
            {`
            .achi-wrapper{
                transition-delay:2000000sec transform; // ise samjho
                animation-duration: 3sec;
            }    

            .achi-wrapper:hover{
    
                transition: 2s;
                transform: scale(1.04);
                animation-duration: 1sec;
                box-shadow: 0 0 60px #1F51FF;
            }        
            `}
        </style>
        </>
    )
}
export default Card;