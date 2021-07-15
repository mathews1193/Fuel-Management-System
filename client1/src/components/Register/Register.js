
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Axios from 'axios'
import './Register.css';

export default function Register() {
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');


    const register = () => {
        Axios.post('http://localhost:3001/register', { username: usernameReg, password: passwordReg }).then((response) => {
            console.log(response);
        });
    };


    return (

        <div className="login-wrapper2">

            <form className="login-stuff">
                <h1 className="title">Create an Account</h1>
                <div className="register-form">
                    <h1 className="register">First Name</h1>
                    <input
                        className="input-style2"
                        placeholder="Enter First Name"
                        type="text"

                    />
                    <h1 className="register">Last Name</h1>
                    <input
                        className="input-style2"
                        placeholder="Enter Last Name"
                        type="text"

                    />
                    <h1 className="register">Email Address</h1>
                    <input
                        className="input-style2"
                        placeholder="Enter Email Address"
                        type="text"

                    />
                    <h1 className="register">Username</h1>
                    <input
                        className="input-style2"
                        placeholder="Enter Username"
                        type="text"
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }}
                    />
                    <h1 className="register">Password</h1>
                    <input
                        className="input-style2"
                        placeholder="Enter Password"
                        type="text"
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}
                    />
                    <div className="register-loc">
                        <button onClick={register} onclassName="register-btn" type="submit" onClick >Register</button>
                    </div>
                </div>
            </form>
        </div>

    );

};
