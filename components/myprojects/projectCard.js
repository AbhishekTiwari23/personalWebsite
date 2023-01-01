import React from 'react';
import Visits from '../../assets/socials/visits.svg';
import Errors from '../../assets/socials/errors.svg';
import Github from '../../assets/socials/githubwhite.svg';
import Link from 'next/link'
import Image from 'next/image';
const ProjectCard = (props)=>{
    return(
        <div className="projectCard-wrapper" >

            <div className="projectCard-middle" >
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
                .projectCard-wrapper{
                    border: 0.01rem solid black;
                            width: 70%;
                            border-radius: 20px;
                            color: black;
                            margin-left: auto;
                            margin-right: auto;
                            border: 0.01rem solid black;
                            border-radius: 1rem;
                            flex-wrap: wrap;
                            
                            background-color: #fcfcfc;
                }
                .projectCard-middle{
                    text-align: center;
                }
                .project-pic{
                    width: 100%;
                    height:auto;
                    border-radius: 1rem 1rem 0rem 0rem;
                }
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