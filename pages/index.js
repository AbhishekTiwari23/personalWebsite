import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero/hero.js';
import Skills from '../components/skills/skills';
import Education from '../components/education/education';
import OpenSource from '../components/opensource/opensource';
import Footer from '../components/footer/footer';
import Projects from '../components/myprojects/myproject';
import Achievements from '../components/achievements/achievements';
import AboutMe from './abouMe/aboutme';
import GotoTop from '../components/gototop/gototop.js'

export default function Home() {
  return (
    <>
      <Head class="dark">
        <title>Abhishek Tiwari</title>
        <meta name="description" content="Poertfolio website developed by Abhishek Tiwari" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name ="keywords" content = "backend, portfolio, Abhishek, Abhishek Tiwari, NSUT, NEXT, next.js"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        
        <Hero/> 
      <AboutMe/>
     <Skills/>
     <Projects/>
     <Education/>
     <OpenSource/>
     <Achievements/>
     
     <GotoTop/>
     <Footer/>

      </main>
    </>
  )
}
