import React from "react";
import "../Work/work.css";
import img1 from "../image/nogogirl.png"
import img2 from "../image/kerala.png"
import img3 from "../image/huufmn.png"
import img4 from "../image/wellness.png"


export default function Work(){
    return(
        <div>
            <p className="header poppins-bold  p-4">PROJECTS</p>
            
            <div className="work-div ">
            
            <div className="work-item item-1">
                <a href="https://harsihita.github.io/ngo-deploy/" className="img">
                    <div><img src={img1} alt="Project Image"/></div>
                    <div className="d-flex  project">
                        <p className="project-name  m-4">Charity</p>
                        <div className="d-flex project-head m-4 ">
                        <p>REACTJS</p>
                        <p>API</p>
                        <p>2024</p>
                        </div>
                        
                    </div>
                    
                </a>
            </div>
            <div className="work-item item-2">
                <a href="https://kerala-kry6.vercel.app/" className="img">
                    <div><img src={img2}/></div>
                    <div className="d-flex project">
                        <p className="project-name">Tourism Website</p>
                        <div className="d-flex project-head mx-2">
                        <p>REACTJS</p>
                        <p>HTML</p>
                        <p>2023</p>
                        </div>
                        
                    </div>
                </a>
            </div>
            <div className="work-item item-3">
                <a href="https://github.com/Harsihita/zipper-file" className="img">
                    <div><img src={img3}/></div>
                    <div className="d-flex project">
                        <p className="project-name">Huffman Algorithm</p>
                        <div className="d-flex project-head mx-2">
                        <p>PYTHON</p>
                        <p>ALGORITHM</p>
                        <p>2023</p>
                        </div>
                        
                    </div>
                </a>
            </div>
            <div className="work-item item-4">
                <a className="img" href="https://thewellnessu.com/">
                    <div><img className="img4" src={img4}/></div>
                    <div className="d-flex project">
                        <p className="project-name">WellnessU</p>
                        <div className="d-flex project-head mx-2">
                        <p>REACTJS</p>
                        <p>NODEJS</p>
                        <p>2024</p>
                        </div>
                        
                    </div>
                </a>
            </div>
            </div>
            
        </div>
    )
}