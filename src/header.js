import React from "react";
import "./header.css"
import global from "./img/global.png"

export default function Header(){
    return(
        <header className="app__header">
            <img className="logo" src={global} alt="logo"></img>
            <p className="header__title">my travel journal.</p>


        </header>


    )
}