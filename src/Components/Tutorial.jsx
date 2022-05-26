import React from "react";
import { Component } from "react";
import video from '../Image/video.mp4'
import data from "./data";
import TutorialItem from "./TutorialItem";

function Tutorial() {
    return (
        <div className="tutorialMain">
            <div className="tutorialLeft">
                <p className="tutorial">TUTORIAL</p>
                <p className="detail">Let's look at 7 ways to use motion trend more effectively in the first tutorial.</p>
                <button className="button">watch now</button>
            </div>
            <div><video  src={video} width='526px' height='300px'controls='controls' autoPlay='false'></video></div>
            <div className="tutorialRight">
                {data[4].map(item => TutorialItem(item.video, item.name, item.detail, item.love, item.view))}
            </div>
        </div>
    )
}

export default Tutorial