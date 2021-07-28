
import { Link } from "react-router-dom"
import React, { useState } from "react";
import { toast } from 'react-toastify';
import Axios from 'axios'
import './Register.css';

export default function Register(props) {
    const{
        isAuth,
        setIsAuth,
        isNewUser,
        setIsNewUser,
        
    }=props;
    const [userId, setUserId] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    toast.configure();

    const register = () => {
        
        Axios.post('http://localhost:3001/register',{ 
            userId:userId, 
            username: username, 
            password: password, 
        }).then((response) => {
            console.log("Success from fronted");
            setIsNewUser(true)
            
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
                        type="text"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <div className="register-loc">
                        <h1>{username}</h1>
                        <h1>{password}</h1>
                        <Link to="/login"><button onClick={register} className="register-btn" type="submit" >Register</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );

};

