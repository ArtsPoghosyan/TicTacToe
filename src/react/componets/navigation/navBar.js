import React from "react";
import logo from "../../../images/logo.png";
import {useNavigate} from "react-router-dom";
import "../../../scss/style.scss";

function NavBar({path}){
    const navigate = useNavigate();
    return (
        <div className="navBar">
            <div onClick={()=>{navigate("/")}} id={path === "3x3" ? "navBlock" : ""}>
                <img src={logo}></img>
                <span>3X3</span>
            </div>
            <div onClick={()=>{navigate("/4x4")}} id={path === "4x4" ? "navBlock" : ""}>
                <img src={logo}></img>
                <span>4X4</span>
            </div>
            <div onClick={()=>{navigate("/5x5")}} id={path === "5x5" ? "navBlock" : ""}>
                <img src={logo}></img>
                <span>5X5</span>
            </div>
        </div>
    )
}

export default NavBar;