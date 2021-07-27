import React from 'react'
import Register1 from '../components/Register/Register';

function Register(props) {
    const {
        isAuth,
        setIsAuth,
        isNewUser,
        setIsNewUser
    }=props;
    return (
        <div>
            <Register1 isAuth={isAuth} setIsAuth={setIsAuth} isNewUser={isNewUser} setIsNewUser={setIsNewUser}/>
        </div>
    )
}

export default Register
