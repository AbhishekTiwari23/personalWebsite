import Image from 'next/image'
import Link from 'next/link';
import Search from '../../assets/socials/searchicon.svg'
import React, { useEffect, useState } from 'react'

import MyPhoto from "../../assets/mypic/myphoto.jpeg";
const BlogFront = () =>{
const [articlesList,setarticlesList] = useState(null);

const [loading,setLoading] = useState(null);
const [error,seterror] = useState(null);

useEffect(
    ()=>{
    const fetchArticles= async()=>{

        setLoading(true);
        try{
            const response = await fetch("https://dev.to/api/articles?username=saminarp")
            const result = await response.json();
            setarticlesList(result);
            // articlesList.forEach(article =>{
            //     const title= article.title;
            //     console.log('title:' + title )
            //     const description = article.description
            //     console.log('title:' + description )
            //     const publishDate = article.published_at
            //     console.log('title:' + publishDate )
            //     const coverImage = article.cover_image
            //     console.log('title:' + coverImage )
                
            // })
            
        }
        catch(error){
            seterror(error.message)
        }
        setLoading(false);
    }
    fetchArticles();
},[]
)
if(loading){
    return <div className="loading">Still Loadiing</div>
   }
   if(error){
    <div className="error">Got error</div>
   }
   return (
    <>
    <div>
      {articlesList ? (
        articlesList.map(article => (
            <Link href={article.url} target= "_blank">
          <div key={article.id}>
            <div className="container" name= {article.id} >
            <img src={article.social_image} alt={article.title} className="article-img"/>
            <div className='artic-date'>{article.published_at.substring(0,10)}</div>
            <div className='artic-date'>{"Reading Time : " + article.reading_time_minutes}</div>
            <div className='artic-date'>{article.tag_list.map(
                tag=>(
                    <div className='tags'>{tag}</div>
                )
                    
            )}</div>
            <div className='name'>{article.title}</div>
            <div className='content'>{article.description}</div>
            
            
            </div>
          </div>
          </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
    <style jsx>
        {`
        .container{
            width: 60%;
            height: auto;
            margin-left: auto;
            cursor: pointer;
            margin-right: auto;
            margin-top: 1rem;
            margin-bottom: 1rem;
            //padding: 1rem;
            border: 0.03rem solid black;
            border-radius: 1rem;
            background-color: #fcfcfc;
            color:black;
            transition-delay:2000000sec transform; // ise samjho
            animation-duration: 3sec;
           
        }
        .article-img{
            height : auto;
        width: 100%;
        text-align: center;
        border-radius: 1rem 1rem 0rem 0rem;
        }
        .name{
            text-align: center;
            font-weight: bold;
            font-size: 2rem;
            text-align: center;
        }
        .content{
            font-size: 1rem;
            margin: 1rem;
        }
        .tags{
            display: inline-block;
            margin:0.2rem;
            // background-color:red;
            padding:0.3rem;
            border: 0.1rem solid black;
            border-radius:1rem;
        }
        .artic-date{
            font-weight: lighter;
            // text-align: center;
            margin:0.2rem;
            font-size:small;
        }
        `}
    </style>
    </>
  );
  
    // return(
    //     <>
    //     {articlesList.forEach(article=>{
    //         `<h1>hello</h1>`
    //         console.log("k");
    //     })}
    //     <h1>hello</h1>
    //     <div className="blogsfront">
    //         <div className="blogs-left">
    //             <div className="search-bar">
    //                 <form action="search" >
    //                     {/* <Image src={Search} /> */}
    //                     <input type="text" name='search'id='search' placeholder='search...'/>

    //                 </form>
    //             </div>
    //             <div className="blog-handles">
    //                 <div className="handle-div">
    //                     <div className="mini-head">Read More </div>
    //                 <ul>
    //                     <li><Link href="/">Dev.to➚</Link></li>
    //                     <li><Link href="/">Medium➚</Link></li>
    //                     <li><Link href="/">StackOverFlow➚</Link></li>
    //                 </ul>

    //                 </div>
    //             </div>
    //             <div className="mailForletters">
    //             <form action="submit" >
    //                     <input type="email"  name='email' placeholder='Email' />
    //                     <button className="submit-btn" typeof='submit'>Submit</button>
    //                 </form>
    //             </div>
    //         </div>
    //         <div className="blogs-middle">
    //             <div className="main-body">
    //                 {/* <div className="blog-img"> <Image className="myimage" src={MyPhoto} alt="my photo" width="300" height="2000"/></div> */}
    //                 <div className="midcontent">
    //                     <div className="blog-title">Abhisek ki jang</div>
    //                     <div className="blog-tags">
    //                         <ul>
    //                             <li><span></span></li>
    //                             <li><span></span></li>
    //                             <li><span></span></li>
    //                             <li><span></span></li>
    //                             <li><span></span></li>

    //                         </ul>
    //                     </div>
    //                     <div className="reactions"></div>
    //                     <div className="share-buttons"></div>
    //                     <div className="comments"></div>
    //                 </div>
    //             </div>
    //         </div>
    //      <div className="blogs-right">
    //             <div className="latest-blogs-heading">Latest Blogs</div>
    //             <div className="latest-blog">
    //             <div className="lates-blog-titles">Hello Blog</div>
    //             <div className="blog-tags"></div>
    //             <div className="blog-reactions"></div>
    //             </div>
    //         </div> 
    //     </div>
    //     <style jsx>
    //         {`
    //         input[type=text] {
    //             width: 20%;
    //             box-sizing: border-box;
    //             border: 2px solid #ccc;
    //             border-radius: 4px;
    //             font-size: 16px;
    //             background-color: white;
    //             padding: 12px 20px 12px 40px;
    //             transition: width 0.4s ease-in-out;
    //           }
    //           input[type=text]:focus {
    //             width: 100%;
    //           }
    //           submit-btn{
    //             background-color: rgb(96, 42, 96);
    //             border: 2rem solid black;
    //             color: aqua
    //           }
    //           .blog-handles{
    //             background-color: rgb(96, 42, 96);
    //             width: 15%;
    //             margin: 1rem;
    //             padding: 1rem;
    //             text-align: center;
    //             border-radius: 20px;
    //           }
    //           input[type=email] {
    //             width: 80%;
    //             box-sizing: border-box;
    //             border: 2px solid #ccc;
    //             border-radius: 4px;
    //             font-size: 16px;
    //             background-color: white;
    //             padding: 1rem;
    //             transition: width 0.4s ease-in-out;
    //           }
    //           .blogs-left{
    //             background-color: aqua;
    //             height:2000px;
    //             display:inline-block;
    //             width:20%;
    //             margin-top:-9rem;

    //           }
    //           .blogs-middle{
    //             background-color: rgb(9, 42, 96);
    //             height:100%;
    //             width:60%;
    //             padding:2rem;
    //             align-items:center;
    //             display:inline-block;
    //           }
    //           .blogs-right{
    //             width:20%;
    //             background-color: rgb(90, 42, 96);
    //             display:inline-block;
    //           }

    //         `}
    //     </style>
    //     </>
    // )
}
export default BlogFront;