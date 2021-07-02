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
            <h1 className="head">Welcome, Please Log In!</h1>
            <form className="login-stuff" onSubmit={handleSubmit}>

                    <input 
                    className="input-style" 
                    placeholder ="Username"
                    type="text" 
                    onChange={e => setUserName(e.target.value)} 
                    />

                    <input 
                    className="input-style" 
                    placeholder="Password"
                    type="password" 
                    onChange={e => setPassword(e.target.value)} 
                    />
                    
                <div className="btn-button">
                    <button className="btn-login" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}