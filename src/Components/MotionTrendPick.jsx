import React from "react";
import { Component } from "react";
import ContainerItem from "./ContainerItem";
import data from "./data"

function MotionTrendPick() {
    return (
        <div className="motionTrendPick">
            {data[0].map(item => ContainerItem(item.image, item.name, item.avatar, item.love, item.view) )}
        </div>
    )
}


export default MotionTrendPick