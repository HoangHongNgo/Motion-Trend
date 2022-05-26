import React, { useState, useTransition } from "react";
import { Component } from "react";
import './Css/Components.css'
import ThemeItem from "./ThemeItem";
import data from "./data";
import iconnext from '../Image/r-red-circle-arrow.png';
import iconprev from '../Image/l-red-circle-arrow.png';

function Theme() {
    const [transform, setTransform] = useState('translateX(-1000px)')
    const [transition, setTransition] = useState("")
    const [x, setX] = useState(Number("-1000"))
    const size = 200;
    return (
        <div className="themeMain">  
            <div className="theme"
                style={{transform: transform,
                        transition: transition}}>
                {data[1].map(item => ThemeItem(item.theme) )}
            </div> 
            <div className="buttonTheme">
                <button className="next" onClick={sildernext}><img src={iconnext}></img></button>
                <button className="prev" onClick={silderprev}><img src={iconprev}></img></button>
            </div>    
        </div>
    )
    function sildernext() {
        if(x>-3320)
        {
            setTransform('translateX(' + (x-size) + 'px)');
            setX(x-size);
            setTransition('0.4s ease-in-out')
        }
    }
    function silderprev() {
        if(x<20)
        {
            setTransform('translateX(' + (x+size) + 'px)');
            setX(x+size);
            setTransition('0.4s ease-in-out')
        }
    }
}


export default Theme