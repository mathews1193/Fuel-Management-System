import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
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
                    <button className="btn-login" type="submit">Submit</button>
                </div>
                <div className="btn-button2">
                    <button className="btn-create" type="submit">Create an Account</button>
                </div>
            </form>
        </div>
    )
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}