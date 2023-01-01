import Image from 'next/image'
import React from 'react'
const BlogTemplate = () =>{
    return(
        <>
        <div className="blog-left">
            <div className="blog-reactions"></div>
            <div className="share-buttons"></div>
        </div>
        <div className="blogtemplate">
            <div className="blog-img"><Image/></div>
            <div className="blog-title"></div>
            <div className="blog-tags"></div>
            <div className="blog-content"></div>
            <div className="blog-comments">
                <div className="user-pic"></div>
                <div className="comment-date"></div>
                <div className="user-name"></div>
                <div className="commnet-text"></div>
            </div>
        </div>
        <div className="blog-right">
            <div className="search-bar"></div>
            <div className="latest-blogs"></div> 
            {/* same as blog font */}
        </div>
        </>
    )
}