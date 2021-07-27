import React from 'react'
import Profile1 from '../components/Profile/Profile'
function Profile(props) {
    const{
        isAuth,
        userId,
        setUserId,
        isNewUser,
        setIsNewUser
        } = props;
        
    

    return (
        <div>
            <Profile1 isAuth={isAuth} userId={userId} setUserId={setUserId} isNewUser={isNewUser} setIsNewUser={setIsNewUser}/>
        </div>
    )
}

export default Profile
