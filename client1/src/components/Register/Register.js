
import { Link } from "react-router-dom"
import React, { useState } from "react";
import { toast } from 'react-toastify';
import Axios from 'axios'
import './Register.css';

export default function Register() {
    
    const [userId, setUserId] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(0)

    toast.configure();

    

    const register = () => {
           
        Axios.post('http://localhost:3001/register', {
            isNewUser:1,
            userId: userId,
            username: username,
            password: password,
        }).then((response) => {
            console.log("Success from fronted");
            console.log(isNewUser)
            

        });



        console.log(userId + " " + username + " " + password);
        toast("User Created Successfully");
    };

    return (

        <div className="login-wrapper2">

            <div className="login-stuff">
                <h1 className="title">Create an Account</h1>
                <div className="register-form">
                    <h1 className="register">Username</h1>
                    <input
                        className="input-style2"
                        placeholder="Enter Username"
                        type="text"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <h1 className="register">Password</h1>
                    <input
                        className="input-style2"
                        placeholder="Enter Password"
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <div className="register-loc">
                        <Link to="/login"><button onClick={register} className="register-btn" type="submit" >Sign Up</button></Link>
                    </div>
                    <div className="butt-loc">
                        <Link to="/login"><button className="acct-butt" type="submit" >Already have an account?</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );

};

