import React from "react";
import NavLink from "react-router-dom";

function NavBar(props) {
    return (
        <div className="row-navbar" id="navbar">
            <NavLink to="/about-me">about </NavLink>
            <NavLink to="/portfolio">portfolio </NavLink>
            <NavLink to="/contact-me">contact me </NavLink>
            <NavLink to="/resume">resume </NavLink>
        </div>
    )
}

export default NavBar;