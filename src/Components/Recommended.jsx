import React from "react";
import { Component } from "react";
import data from "./data";
import './Css/Components.css'
import ContainerItem from "./ContainerItem";
function Recommended() {
    return (
        <div>
               <div className="motionTrendPick">
            {data[2].map(item => ContainerItem(item.image, item.name, item.avatar, item.love, item.view) )}
        </div>
        </div>
    )
}

export default Recommended