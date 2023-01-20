import Link from 'next/link';
import React, { useEffect, useState } from 'react'
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
            <div className=" lg:w-2/3 mx-auto cursor-pointer my-4 border border-solid border-black rounded-2xl dark:bg-goldenyellow bg-black dark:text-black text-white " name= {article.id} >
            <img src={article.social_image} alt={article.title} className="article-img rounded-tl-2xl rounded-tr-2xl "/>
            <div className='font-light m-2 text-xs '>{article.published_at.substring(0,10)}</div>
            <div className='font-light m-2 text-xs'>{"Reading Time : " + article.reading_time_minutes}</div>
            <div className='font-light m-2 text-xs'>{article.tag_list.map(
                tag=>(
                    <div className='tags inline-block m-1 p-2 border-solid border-white border rounded-2xl dark:border-black'>{tag}</div>
                )
                    
            )}</div>
            <div className='name text-center font-bold lg:text-3xl p-3 '>{article.title}</div>
            <div className='content m-4 lg:text-base'>{article.description}</div>
            
            
            </div>
          </div>
          </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </>
  );
  
}
export default BlogFront;