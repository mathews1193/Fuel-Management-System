import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../assets/img/logo.png";

function NavBar(props) {
    const{
        isAuth,
        setIsAuth,
        setIsNewUser
    } = props;

    const handleSignOut = (e) =>{
        setIsAuth(false)
        setIsNewUser(false)
    }

    return (
        <div>
            <nav className='navbar'>
                <ul className='list'>
                    <img className="logo" src={Logo} alt="Logo" width="170" height="120" />
                    <Link to="/" className="nav">Home</Link>
                    <Link to="/dashboard" className="nav">Dashboard</Link>
                    <Link to="/fuel-quote" className="nav">Fuel Quotes</Link>
                    <Link to="/client-profile" className="nav">Profile</Link>
                    <Link to="/about-us" className="nav">About Us</Link>
                    {(isAuth === true)?(
                        <Link to="/login"><button className="btn-signin" onClick={handleSignOut}>Sign Out</button></Link>
                    ): (
                        <div>
                    <Link to="/login"> <button className="btn-signin">Sign In</button> </Link>
                    <Link to="/register"> <button className="btn-register">Registration</button> </Link>
                    </div>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
