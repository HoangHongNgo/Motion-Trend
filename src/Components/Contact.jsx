import React from "react";
import { Component } from "react";
import sns1 from '../Image/sns-icon-1.png'
import sns2 from '../Image/sns-icon-2.png'
import sns3 from '../Image/sns-icon-3.png'
import './Css/Components.css'
import logo from '../Image/black-logo-icon.png'

function Contact() {
    return (
        <div>
            <div className="contact">
                <div className="contactLeft">
                    <p className="contacttext">Contact</p>
                    <p className="gmail">motiontrend@test.com</p>
                </div>
                <div className="contactRight">
                    <p className="right">@ Motiontrend. All rights reserved.</p>
                    <img src={sns1}></img>
                    <img src={sns2}></img>
                    <img src={sns3}></img>
                </div>
            </div>
            <div className="contact2">
                <div className="contact2Left">
                    <div className="item">Introduction</div>
                    <div className="item">Terms of Service</div>
                    <div className="item">Language</div>
                    <div className="item">Customer Service</div>
                </div>
                <img src={logo}></img>
            </div>
        </div>
    )
}

export default Contact