import React from 'react';
import './App.css';
import Firstpage from "./components/Firstpage/Firstpage";
import About from './components/About/About';
import Footer from './components/Footer/Footer'
import { useRef,useEffect } from "react";
import {gsap} from "gsap";


function App() {
  const sectionRef=useRef(null);
  const firstpageRef=useRef(null);
  const aboutRef=useRef(null);

  useEffect(()=>{
    const sectionHeight = sectionRef.current.offsetHeight;
    
    gsap.timeline()
    .to(aboutRef.current, {
      y: -sectionHeight,
      ease: 'none',
      scrollTrigger: {
        trigger: firstpageRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        
      },
    });
    gsap.fromTo(".firstpage p", {
      opacity: 0,
      y:  20,
      scale:4
    }, {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      duration: 1.25,
      scale:0.5,
      
      scrollTrigger: {
        trigger: firstpageRef.current,
        start: 'top 50%', // Adjust the start position to your liking
        end: '+=100%',
        scrub: 1,
      },
    });
    
  },[])
 

  return (
    <>
    
    <div className='con' ref={sectionRef}>
      <div id="firstpage"className='firstpage chapter' ref={firstpageRef}> <Firstpage/></div>
      <div className='about-chapter' id="about" ref={aboutRef}><About /></div> 
      <Footer/> 
    </div>
    </>
  );
}

export default App;
