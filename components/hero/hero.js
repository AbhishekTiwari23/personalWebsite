import React from 'react'
import Abhishek from '../../abhishek/abhishek';

import Image from 'next/image';


const Hero = () =>{
    return(
        <div className="hero m-1 mt-28 p-1">
            
            <div className = "greeting-text block"> <span className="text-left  font-bold text-3xl"> Hi <span className='grade '>{" < Geek / > "}</span><span className='wave'> 👋</span></span><br/> <div className='mt-4 ml-4 text-5xl inline-block text-left'> I am Abhishek <span className='grade'>Tiwari</span></div></div>
            <div className='greeting-text-para  block text-center text-9xl leading-relaxed '>turning <span className='grade'>Ideas</span><br/> into <span className='grade'>Reality</span> <br/>is my <span className='grade'>Passion</span></div>
            <style jsx>
                {
                    ` 
                      .wave {
                        animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
                        animation-duration: 2.5s;        /* Change to speed up or slow down */
                        animation-iteration-count: infinite;  /* Never stop waving :) */
                        transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
                        display: inline-block;
                      }
                      
                
                      @keyframes wave-animation {
                          0% { transform: rotate( 0.0deg) }
                         10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
                         20% { transform: rotate(-8.0deg) }
                         30% { transform: rotate(14.0deg) }
                         40% { transform: rotate(-4.0deg) }
                         50% { transform: rotate(10.0deg) }
                         60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
                        100% { transform: rotate( 0.0deg) }
                      }
                      
                      .grade{
                        font-weight: bold;

                        background: linear-gradient(-90deg,  #F85032, #E73827);
                       -webkit-background-clip: text;
                       background-size: 200%;
                       -webkit-text-fill-color: transparent; 
                       animation: grading 8s ease infinite;      
                    }
                    @keyframes grading {
                      from {
                        -webkit-filter: hue-rotate(0);
                        -moz-filter: hue-rotate(0);
                        -ms-filter: hue-rotate(0);
                        filter: hue-rotate(0);
                      }
                      to {
                        -webkit-filter: hue-rotate(360deg);
                        -moz-filter: hue-rotate(360deg);
                        -ms-filter: hue-rotate(360deg);
                        filter: hue-rotate(360deg);
                      }
                    }  

                      

                                                                   
                    `
                }
            </style>
        </div>
    )
}
export default Hero;