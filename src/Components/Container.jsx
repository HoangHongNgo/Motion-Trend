import React, { useState } from "react";
import { Component } from "react";
import MotionTrendPick from "./MotionTrendPick";
import Latest from "./Latest";
import Recommended from "./Recommended";
import "./Css/Components.css"

function Container() {
    const [active, setActive] = useState("MotionTrendPick")
    return (
        <div>
            <div className="menuContainer">
                <div>
                    <button className={active === "MotionTrendPick" && 'menuItemActive'} onClick={() => setActive("MotionTrendPick")}>MotionTrendPick</button>
                    <button className={active === "Latest" && 'menuItemActive'} onClick={() => setActive("Latest")}>Latest</button>
                    <button className={active === "Recommended" && 'menuItemActive'} onClick={() => setActive("Recommended")}>Recommended</button>
                </div>
                <p>Selection criteria</p>
            </div>
            <div className="mainContainer">
                {active === "MotionTrendPick" && <MotionTrendPick/>}
                {active === "Latest" && <Latest/>}
                {active === "Recommended" && <Recommended/>}
            </div>
        </div>
    )
}

export default Container