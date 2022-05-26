import React from "react";
import { Component } from "react";
import './Css/Components.css'
import logo from '../Image/logo-icon.png'
import searchIcon from '../Image/white-search-icon.png'

function Header() {
    return (
        <div className="header">
            
            <div className="headerLeft"> 
                <img src={logo}></img>
                <div className="headerLeftItem">
                    <button>Discover</button>
                    <button>Job</button>
                </div>
            </div>
            <div className="headerSearch">
                <form action="">
                    <input type="text" placeholder="Search for motion trend......"></input>
                </form>
            </div>
            <div className="headerRight">
                <button><img src={searchIcon}></img></button>
                <div className="headerRightItem">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Header