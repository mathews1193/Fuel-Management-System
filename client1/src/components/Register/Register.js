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
