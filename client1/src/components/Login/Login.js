import React, { useState } from 'react';
import { Link, useHistory} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import './Login.css';



export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    
    const history = useHistory();
    const { 
        setUserId,
        isAuth,
        setIsAuth,
        isNewUser
    } = props;

    const login = () => {
        Axios.post("http://localhost:3001/login", {
        username: username, 
        password: password 
        }).then((response) => {
            // user not found
            if (response.data.message) {
                setLoginStatus(response.data.message)
                
            }
            else {
                //user found redirect to client profile 
                // user is authenticated
                setLoginStatus(response.data[0].username);
                console.log(setLoginStatus(response.data[0].username));
                setIsAuth(!isAuth);
                getUserId(response.data[0].username);
                history.push('/dashboard');
            }
        });
    };

    const getUserId = (username) =>{
        // API call to fetch userId from db if found 
        Axios.get(`http://localhost:3001/userid/${username}`).then((response) => {
           setUserId(response.data[0].userId);
           console.log(response.data[0].userId);
        });
    }

    toast.configure();

    return (
        <div className="login-wrapper">

            <div className="login-stuff">
                <h1 className="head">Sign In</h1>
                <div className="input-form">
                    <p className="p1">Username</p>
                    <input
                        className="input-style"
                        placeholder="Enter Username"
                        type="text"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <p className="p1">Password</p>
                    <input
                        className="input-style"
                        placeholder="Enter Password"
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                {(isNewUser===true)?(
                <div className="btn-button">
                    <Link to= "/client-profile"><button onClick={login} className="btn-login" type="submit" >Login</button></Link> 
                </div>):(<Link to= "/dashboard"><button onClick={login} className="btn-login" type="submit" >Login</button></Link>)}
                <div className="btn-button2">
                    <Link to="/register"> <button className="btn-create" type="submit">Create an Account</button> </Link>
                    <h1>{loginStatus}</h1>
                </div>
            </div>
            
        </div >
    )
}