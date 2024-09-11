 import React,{useState,useRef,useEffect} from "react";
 import "../Whatdo/Whatdo.css";
 import { gsap } from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger";

 export default function Whatdo(){
    const serviceUi = useRef(null)
    const heading = useRef(null)
    const body = useRef(null)
    const [openAccordion, setOpenAccordion] = useState(null);
    const handleAccordionClick = (index) => {
        if (index !== openAccordion) {
            setOpenAccordion(index);
            
         } else {
           setOpenAccordion(null);
        }
      };
      useEffect(() => {
        ScrollTrigger.create({
          trigger: serviceUi.current,
          //markers: true,
          start:"150px bottom",
          animation: gsap
            .timeline()
            .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
            .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25,stagger:1 }, 0.2),
    
          toggleActions: "play none none none",
        });
        ScrollTrigger.refresh();
    
      }, [serviceUi])
    return(
        <div className="d-flex whatodo" ref={serviceUi}>
           
            <div className=""> <p className="head-txt poppins-bold  p-4" ref={heading}>CORE TOOLS</p>
            <p className="sub-head">I focus on all things digital and web related. With each of my services, my goal is to deliver an experience that serves a great purpose.</p>
            </div>
            <div className="web-txt" ref={body}>
                 <div className={`accordion__item  ${openAccordion === 0 ? "open" : ""}`}>
                    <h2 className="main-txt" onClick={() => handleAccordionClick(0)}>
                            <span className="display-5 poppins-bold name">Javascript</span> 
                            <i className={`bx ${openAccordion === 0 ? 'bx-minus' : 'bx-plus'} one`}></i> 
                    </h2>
                    <div className="detail">
                        
                        <p>
                        I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.
                        </p>
                        
                        
                    </div>
                 </div>
                 <hr className="br-line"></hr>
                 <div className={`accordion__item  ${openAccordion === 1 ? "open" : ""}`}>
                    <h2 className="main-txt" onClick={() => handleAccordionClick(1)}>
                        
                            <span   className="display-5 poppins-bold name">Reactjs</span> 
                            <i className={`bx ${openAccordion === 1 ? 'bx-minus' : 'bx-plus'} two`}></i> 
                        
                    </h2>
                    <div className="detail">
                        
                        <p>
                        I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.
                        </p>
                       
                        
                    </div>
                 </div>
                 <hr className="br-line"></hr>
                 <div className={`accordion__item  ${openAccordion === 2 ? "open" : ""}`}>
                    <h2 className="main-txt" onClick={() => handleAccordionClick(2)}>
                        
                            <span className="display-5 poppins-bold name">Nodejs</span>  
                            <i className={`bx ${openAccordion === 2 ? 'bx-minus' : 'bx-plus'} three`}></i>
                        
                    </h2>
                    <div className="detail">
                        
                        <p>
                        I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.
                        </p>
                       
                        
                    </div>
                 </div>
                 <hr className="br-line" ></hr>
                 <div className={`accordion__item  ${openAccordion === 3 ? "open" : ""}`}>
                    <h2 className="main-txt" onClick={() => handleAccordionClick(3)}>
                        
                            <span className="display-5 poppins-bold name">Java</span>
                            <i className={`bx ${openAccordion === 3 ? 'bx-minus' : 'bx-plus'} four`}></i>  
                        
                    </h2>
                    <div className="detail">  
                        <p>
                        I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.
                        </p> 
                    </div>
                 </div>
                 <hr className="br-line" ></hr>
            </div>
            
           
        </div>
    )
 }