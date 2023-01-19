import React from 'react';
import Visits from '../../assets/socials/visits.svg';
import Errors from '../../assets/socials/errors.svg';
import Github from '../../assets/socials/githubwhite.svg';
import Link from 'next/link'
import Image from 'next/image';
const ProjectCard = (props)=>{
    return(
        <div className="projectCard-wrapper lg:w-3/4 w-11/12 border-solid border-black border rounded-4xl text-black  bg-goldenyellow" >

            <div className="projectCard-middle text-center" >
                <Image src={props.pic} alt="" className='project-pic rounded-t-2xl' />
            </div>
            <div className="projectCard-right">
                <Link href="/" className="name">{props.name}</Link>
                <div className="card-socials">
                    <Link href="/">
                        <Image src={Github} alt="Github Link" className="github inline-block" />
                        <Image src={Visits} alt = "visits-count" className='visits inline-block' />
                        <Image src={Errors} alt = "errors" className='errors inline-block' />
                    </Link>
                </div>
            </div>
            <style jsx>
                {`
                .projectCard-middle:hover .back{
                    display: inline;
                }
                .projectCard-middle:hover.front{
                    display: none;
                    z-index: 99;
                }
                .projectCard-right{
                    //margin: 2rem;
                    //bottom: 0%;
                    padding-top: 1rem;
                }
                .name{
                    // display: block;
                     font-weight: bold;
                     text-decoration: none;
                     color: black;
                     font-size: 2rem;
                 }
                 .site-link{
                     margin-top: -3rem;
                     text-decoration: none;
                     color: black;
                     font-size: 1rem;
                     font-weight: bold;
                 }
                 .card-socials{
                     margin: 1rem ;
                     
                 }
                .projectCard-wrapper:hover{
                    transform: scale(1.02);
                    box-shadow: 0 0 60px #f8f3f3;
                    transition: 2s;
                }
                                                       
                `}
            </style>
        </div>
    )
}
export default ProjectCard;