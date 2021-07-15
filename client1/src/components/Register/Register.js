<<<<<<< HEAD

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
=======
import React from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Register.css';

export default function SignUp() {

    toast.configure();

    const signUp = () => {
        toast("Account Created Successfully");
    };

    return (

            <div className="login-wrapper2">
                <h1 className="title">Account Creation</h1>
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

                        />
                        <h1 className="register">Password</h1>
                        <input
                            className="input-style2"
                            placeholder="Enter Password"
                            type="text"

                        />
                        <div className="register-loc">
                            <button onClick={signUp} className="register-btn" type="submit">Register</button>
                        </div>
                    </div>
                </form>
            </div>
    )
}
>>>>>>> 34a8b876b9a5af60351eab4ad4b7bede733154d5
