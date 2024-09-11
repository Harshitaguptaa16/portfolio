import React, {useEffect, useRef, useState} from "react";
import "../Firstpage/firstpage.css";
import Navbar from "../Navbar/Navbar";
import  {gsap} from "gsap";

export default function Firstpage({firstpageRef}){
    // gsap.to(".sub-hero",{
    //     scrollTrigger:{
    //         scrub:1
    //     },
    //     scale:-1,
        
    // })
    useEffect(()=>{
        function startLoader() {
            let counterElement = document.querySelector('.count');
            let currentValue = 0;
      
            function updateCounter() {
              if (currentValue === 100) {
                return;
              }
              currentValue += Math.floor(Math.random() * 10) + 1;
              if (currentValue > 100) {
                currentValue = 100;
              }
              counterElement.textContent = currentValue;
              let delay = Math.floor(Math.random() * 200) + 50;
              setTimeout(updateCounter, delay);
            }
            updateCounter();
          }
      
          startLoader();
          
          gsap.to('.count', {
            delay: 3.5,
            opacity: 0,
            duration:0.35
          });
          gsap.to('.bar', {
            delay: 3.5,
            duration:1.5,
            height: 0,
            stagger: { amount: 0.5 },
            ease: 'power4.inOut',
            onComplete: () => {
              // Hide the overlay after the animation is complete
              document.querySelector('.overlay').style.pointerEvents= 'none';
              document.querySelector('.overlay').style.zIndex = '-1';
            }
          });
          gsap.from(firstpageRef,{
            duration:1.5,
            delay:4,
            y:700,
            opacity:0,
            scale:0,
            stagger:{amount:0.5},
            ease:'power4.inOut'
          },'-=1')
    })
    return(
        <>
        <h1 className="count">0</h1>
        <div className="overlay">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <div className="hero" ref={firstpageRef}>
            <Navbar classname="nav"/>
            <div className="sub-hero" >
            <div className="main-logo poppins-bold "> 
                <p className="logo-1 lh-1 fadein">HI THERE,I'M</p>
                <p className="logo-2 fadein">HARSHITA GUPTA.</p>
            </div>
            <p  className="sub-line text-center fadein" >Frontend Developer | <span className="sub-line img"><a  href="https://docs.google.com/document/d/1R9duc3U1ijZJGHpJ69ucfFZrl7-EkjNBO0yOkQzvzTg/edit">Resume</a></span></p>
            
            </div>
            
            
        </div>
        </>
    )
}