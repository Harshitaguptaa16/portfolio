import React, {useEffect,useRef} from "react";
import "../About/about.css";
import img1 from"../image/img3.jpeg"
import Whatdo from "../Whatdo/Whatdo";
import Work from "../Work/Work";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function About(){
    const aboutRef = useRef(null);
    const heading = useRef(null);
    const body = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
      gsap.timeline()
      .to(".aboutme",{
        opacity: 1, y: 0, ease: "power.out", duration: 1.25 ,stagger:0.5, scrollTrigger:{trigger: aboutRef.current,
          start: "top 500px",}
      })
      .to(".about-txt2",{
        opacity: 1, y: 0, ease: "power4.out", duration: 1.25 ,stagger:0.5, scrollTrigger:{trigger: aboutRef.current,
          start: "top 500px",}
      })
    })
    
    
    return(
        <div className="about" ref={aboutRef}>
            
            <div className="about-txt poppins-bold m-5 p-4"><p className="aboutme" ref={heading}>ABOUT ME</p></div>
            <div>
                <div className="rect-1 "></div>
                <div className="rect-2"></div>
            </div>
            <div>
                <img className="img-about" src={img1}/>
            </div>
            <div className="about-txt2" ref={body}>
                <p>Empowering all-scale startups with custom web experiences that are memorable and profitable. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.</p>
            </div>
            <div id="service"><Whatdo/></div>
            <div id="project"><Work/></div>
        </div>
    )
}