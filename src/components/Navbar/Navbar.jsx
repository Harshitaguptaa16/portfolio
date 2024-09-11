import React from "react";
import "../Navbar/Navbar.css"

export default function Navbar(){
    return(
        <div className="nav-bar ">
            <div className=" d-inline-block ">harshita</div>
            <ul className="m-4 ">
                <li className="m-2 d-inline-block"><a href="#about">About,</a></li>
                <li className="m-2 d-inline-block"><a href="#service">Services,</a></li>
                <li className="m-2  d-inline-block"><a href="#project">Projects,</a></li>
                <li className="m-2 d-inline-block"><a href="#footer">Contacts</a></li>
            </ul>
        </div>
    )
}