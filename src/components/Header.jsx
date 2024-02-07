import React from "react";
import flag from "../assets/tunisia-flag-icon.svg"
export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                    <div className="title">
                        <img className="img-fluid navbar-img" src={flag}  alt="Tunisian Flag"/>
                        <h1 className="navbar-text ml-2">Places to visit in Tunisia</h1>
                    </div>
                    <ul className="navbar-ul navbar-nav">
                        <li className="nav-item active"><a className="navbar-brand navbar-link" href="#home">Home</a></li>
                        <li className="nav-item active"><a className="navbar-brand navbar-link" href="#destinations">Destinations</a></li>
                    </ul>
            </nav>
        </header>
    );
}