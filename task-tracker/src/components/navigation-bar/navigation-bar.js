import React from "react";

import logo from "../img/react_36.png";
import "./navigation-bar.scss";

const NavigationBar = () => {
    return (
        <nav className="nav-app">
            <div className="logo">
                <a className="a-link" href="#">
                    <img src={logo} alt=""/>ToDo
                </a>
            </div>
            <div className="navigation-bar">
                <ul>
                    <li className="active">
                        <a href="#home">
                            <i className="material-icons">home</i>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#settings">
                        <i className="material-icons">settings</i>
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default NavigationBar;