import React, { useState, useEffect } from 'react';
import { Link,useHistory} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import './Login.css';



export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isNewUser, setIsNewUser] = useState('')
    const [loginStatus, setLoginStatus] = useState("");
    let history = useHistory();
    const {
        
        setUserId,
        isAuth,
        setIsAuth,
        
    } = props;

   const login =  () => {
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
                
                setIsAuth(true);
                getUserId(response.data[0].username);
            }
        });
    };

    const getUserId = (username) =>{
        // API call to fetch userId from db if found 
        
        Axios.get(`http://localhost:3001/userid/${username}`).then((response) => {
           setUserId(response.data[0].userId);
           
           getIsNewUser(response.data[0].userId);
        });
    }
    const getIsNewUser = (userId) => {
        
        Axios.get(`http://localhost:3001/getisnewuser/${userId}`).then((response) =>{
          setIsNewUser(response.data[0].isNewUser)
          
          
          

      })}
      useEffect(() => {pageRedirect()}, [isNewUser])
      const pageRedirect= () =>{
          
          console.log(isAuth,isNewUser)
        if(isAuth===true&&isNewUser===1){
          history.push('/client-profile')
            
             
        }
        if(isAuth===true&&isNewUser===null){
           history.push('/fuel-quote')
        }
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
                
                <div className="btn-button">
                <button onClick={login} className="btn-login" type="submit" >Login</button>
                    
                </div>
                <div className="btn-button2">
                    <Link to="/register"> <button className="btn-create" type="submit">Create an Account</button> </Link>
                    <h1>{loginStatus}</h1>
                </div>
            </div>
            
        </div >
    )
}