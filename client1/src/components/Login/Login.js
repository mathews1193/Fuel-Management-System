import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Login.css';

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    toast.configure();

    const handleSubmit = async e => {
        e.preventDefault();
        toast("Login Successful!");
        console.log(username + password);
    }

    return (
        <div className="login-wrapper">
            <h1 className="head">Welcome!</h1>
            <form className="login-stuff" onSubmit={handleSubmit}>
                <h1 className="head">Sign In</h1>
                <div className="input-form">
                    <p className="p1">Username</p>
                    <input
                        className="input-style"
                        placeholder="Enter Username"
                        type="text"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <p className="p1">Password</p>
                    <input
                        className="input-style"
                        placeholder="Enter Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="btn-button">
                    <button className="btn-login" type="submit">Login</button>
                </div>
                <div className="btn-button2">
                    <Link to="/register"> <button className="btn-create" type="submit">Create an Account</button> </Link>
                </div>
            </form>
        </div>
    )
}