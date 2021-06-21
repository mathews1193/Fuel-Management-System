import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../assets/img/logo.png";

function NavBar({title}) {
    return (
        <div>
            <nav className='navbar'>
                <ul className='list'>
                        <img className="logo"src={Logo} alt="Logo" width="200" height="150"/>
                        <Link to ="/" className="nav">Home</Link>
                        <Link to = "/dashboard" className="nav">Dashboard</Link>
                        <Link to ="/fuel-quote" className="nav">Fuel Quotes</Link>
                        <Link to = "/profile" className="nav">Profile</Link>
                        <Link to ="about"className="nav">About Us</Link>
                        <Link to ="/login"> <button className="btn-signin">Sign In</button> </Link>
                </ul>
                <h1>{title}</h1>
            </nav>
        </div>
    )
}

export default NavBar
