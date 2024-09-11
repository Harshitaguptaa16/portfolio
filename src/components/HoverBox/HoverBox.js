import React from "react";
import "../HoverBox/HoverBox.css";

export default function HoverBox(){
    return(
        <div className="hover-box">
        <p>Hover over me</p>
        <div className="hidden-content">
          <p>This is the hidden content that appears on hover.</p>
        </div>
      </div>
    )
}