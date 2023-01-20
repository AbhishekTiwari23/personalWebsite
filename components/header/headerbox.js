import React from 'react'

const HeaderBox = ()=>{
    return(
        <div className="header-wrap dark:bg-white dark:text-black bg-black text-white border border-solid border-black rounded-3xl p-8 m-8 text-center text-3xl h-screen z-40">
            <ul className="links ">
                <li className="link font-bold text-3xl cursor-pointer my-8">Home</li>
                <li className="link font-bold text-3xl cursor-pointer my-8">Blogs</li>
                <li className="link font-bold text-3xl cursor-pointer my-8">Contact Me</li>
            </ul>
        </div>
    )
}
export default HeaderBox;