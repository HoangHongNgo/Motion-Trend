import React from "react";
import { Component } from "react";
import { useState } from "react";

function ThemeItem(theme) {
    const [color, setColor] = useState("#070707")
    return (
        <div className="themeItem">
            <p>{theme}</p>
        </div>
    )
    function check(){
        if(theme == "Experimental")
            {return true}
        else{
            return false
        }
    }
}

export default ThemeItem