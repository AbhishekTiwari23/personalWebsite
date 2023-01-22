import React from "react";
import Visits from "../../assets/socials/visits.svg";
import Errors from "../../assets/socials/errors.svg";
import Abhishek from "../../abhishek/abhishek";
import Github from "../../assets/socials/githubwhite.svg";
import Link from "next/link";
import Image from "next/image";
const ProjectCard = (props) => {
  return (
    <div className="lg:w-3/4 mx-auto  border-solid border-black border rounded-4xl text-black  bg-goldenyellow text-center">
      <div className="text-center inline">
        <Image src={props.pic} alt="" className="rounded-t-4xl" />
      </div>
      <div className="bg-white rounded-b-full p-2">
        <div className="name font-bold text-3xl">Portfolio</div>
          <ul className=" hidden lg:inline-block p-1">
            <li className=" inline-block">
              {" "}
              <Link href={Abhishek.socials.myGithub} target="_blank">
                <Image src={Github} alt="Github" />
              </Link>
            </li>
          </ul>
      </div>
      <style jsx>
        {`
          .site-link {
            margin-top: -3rem;
            text-decoration: none;
            color: black;
            font-size: 1rem;
            font-weight: bold;
          }
          .card-socials {
            margin: 1rem;
          }
          .projectCard-wrapper:hover {
            transform: scale(1.02);
            box-shadow: 0 0 60px #f8f3f3;
            transition: 2s;
          }
        `}
      </style>
    </div>
  );
};
export default ProjectCard;
