import React from "react";
import "../App.css";
// import {troll} from "/Troll Face.png";
export default function Header(){
    return(
        <nav className="header ">
            
            <img src="./Troll Face.png" alt="" className="header-image"/>
            <h1 className="header-h1"> Meme Generator</h1>
            
        </nav>
    )
}