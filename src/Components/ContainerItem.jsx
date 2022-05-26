import React from "react";
import { Component } from "react";
import './Css/Components.css'
import logolove from'../Image/like-icon.png'
import logoview from'../Image/view-icon.png'
import { useState } from "react";
import Profile from '../Components/Profile'
function ContainerItem(img, name, avatar, love, view) {
    const [active, setActive] = useState("")
    return (
        <div className="containerItem">
            <button onClick={() => setActive("profile")}><img src={img} className="imageContainerItem"/></button>
            <div className="infor">
                <div className="inforLeft">
                    <img src={avatar} className="avatar"/>
                    <p>{name}</p>
                </div>
                <div className="inforRight">
                    <img src={logolove} className="logoLove"/>
                    <p id="piconlove">{love}</p>
                    <img src={logoview} className="logoView"/>
                    <p id="piconview">{view}</p>
                </div>
                
            </div>
            {/* <div className="profilemain">{active === "profile" && <Profile/>}</div> */}
        </div>
    )
}

export default ContainerItem