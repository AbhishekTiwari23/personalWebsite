import '../styles/globals.css'
import Header from '../components/header/header'
import { useState, useEffect, useContext , createContext} from "react";
import useDarkMode from '../components/header/dark';
import Footerall from '../components/footer/allpagefoot'
export default function App({ Component, pageProps }) {  
  return(

    <div className='dark:bg-black dark:text-white bg-goldenyellow  -z-50 p-8'>
   {/* {showHeader && <Header/>}  */}
   <Header/>
    <Component {...pageProps} />
    <Footerall/>
    </div>
  

    )
    
}

// import '../styles/globals.css'
// import Header from '../components/header/header'
// import { useState, useEffect, useContext , createContext} from "react";


// import Footerall from '../components/footer/allpagefoot'
// const ThemeContext = createContext();
// export default function App({ Component, pageProps }) {  
//     const [toggle,settoggle] = useState(true);
//     const [theme,setTheme] = useState('');
    
    
    

//     // get os preference 
//     useEffect(
//         ()=>{
//     try {
//         if (typeof window !== 'undefined') {
//             const colorScheme = window.matchMedia('(preference-color-scheme:dark').matches ?'dark' : 'light';
//             const storagetheme = window.localStorage.getItem('theme');
//             setTheme(storagetheme || colorScheme)
//             console.log("light " +colorScheme)
//         }
//       } catch (error) {
//         // handle the error
//         console.log("error:" +error)
//       }
//     },[]
//     )
//     // const themeClass = getThemeClass(theme);

//     // change value on click
//     const toggleTheme = () => {
//         const newTheme = theme === 'light' ? 'dark' : 'light';
//         setTheme(newTheme);
//         console.log("new theme :" + theme)
//         try {
//           if (typeof window !== 'undefined') {
//             window.matchMedia(`(prefers-color-scheme: ${newTheme})`).matches
//               ? window.localStorage.setItem('theme', newTheme)
//               : window.localStorage.removeItem('theme');
//           }
//         } catch (error) {
//           // handle the error
//           console.log(error)
//         }
//       };
    
      
//   // const [scrollPosition,setscrollPosition] = useState(0);
//   // const [showHeader, setshowHeader] = useState(true);
  
//   // useEffect ( () =>{
//   //   const handlescroll = () =>{
//   //     const currentScrollPosition = window.pageYOffset;
//   //     setscrollPosition(currentScrollPosition);
//   //     if(currentScrollPosition > scrollPosition){
//   //       setshowHeader(false);
//   //     }
//   //     else{
//   //       setshowHeader(true);
//   //     }
//   //   }
//   //   window.addEventListener('scroll',handlescroll);
//   //   return() =>{
//   //     window.removeEventListener('scroll',handlescroll);
//   //   }
//   // },[scrollPosition])
  
//   return(
    
//     <>
//    {/* {showHeader && <Header/>}  */}
//    <Header />

//     <Component {...pageProps} />
//     <Footerall/>
  
//     </>
//     )
    
// }
