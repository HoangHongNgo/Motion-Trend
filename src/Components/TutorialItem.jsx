import React from "react";
import { Component } from "react";
import logolove from'../Image/like-icon.png'
import logoview from'../Image/view-icon.png'

function TutorialItem(video ,name, detail, love, view){
    return(
        <div className="tutorialItem">
            <div className="tutorialItemLeft"><video  src={video} width='157px' height='89px'controls='controls' autoPlay='false'></video></div>
            <div className="tutorialItemRight">
                <p className="tutorialItemName">{name}</p>
                <p className="tutorialItemDetail">{detail}</p>
                <div className="stutasVideo">
                    <img src={logolove} className="logoLoveTutorial"/>
                    <p id="piconlove">{love}</p>
                    <img src={logoview} className="logoViewTutorial"/>
                    <p id="piconview">{view}</p>
                </div>
            </div>
        </div>


    )
}
export default TutorialItem