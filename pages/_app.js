import '../styles/globals.css'
import Header from '../components/header/header'
import { useState, useEffect, useContext , createContext} from "react";
import useDarkMode from '../components/header/dark';
import Footerall from '../components/footer/allpagefoot'
export default function App({ Component, pageProps }) {  
  return(

    <div className='dark:bg-black dark:text-white bg-goldenyellow  -z-50 p-8'>
   <Header/>
    <Component {...pageProps} />
    <Footerall/>
    </div>
  

    )
    
}