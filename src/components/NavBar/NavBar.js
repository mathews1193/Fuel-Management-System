import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../assets/img/logo.png";

function NavBar(props) {
    return (
        <div>
            <nav className='navbar'>
                <ul className='list'>
                        <img className="logo"src={Logo} alt="Logo" width="170" height="120"/>
                        <Link to ="/" className="nav">Home</Link>
                        <Link to = "/dashboard" className="nav">Dashboard</Link>
                        <Link to ="/fuel-quote" className="nav">Fuel Quotes</Link>
                        <Link to = "/profile" className="nav">Profile</Link>
                        <Link to ="about"className="nav">About Us</Link>
                        <Link to ="/login"> <button className="btn-signin">Sign Out</button> </Link>
                </ul>
                <h1>Fuel Quote</h1>
            </nav>
        </div>
    )
}

export default NavBar
