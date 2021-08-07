import React from 'react'
import Login1 from '../components/Login/Login';

function Login(props) {

    const { 
        userId,
        setUserId,
        isAuth,
        setIsAuth,
        isNewUser
    } = props;

    return (
        <div>
            <Login1 isAuth={isAuth} setIsAuth={setIsAuth} userId= {userId} setUserId={setUserId} isNewUser={isNewUser}/>
        </div>
    )
}

export default Login
