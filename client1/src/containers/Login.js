import React from 'react'
import Login1 from '../components/Login/Login';

function Login(props) {

    const { 
        setUserId,
        isAuth,
        setIsAuth
    } = props;

    return (
        <div>
            <Login1 isAuth={isAuth} setIsAuth={setIsAuth} setUserId={setUserId} />
        </div>
    )
}

export default Login
