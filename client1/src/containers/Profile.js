import React from 'react'
import Profile1 from '../components/Profile/Profile'
function Profile(props) {
    const{
        isAuth,
        userId,
        setUserId
        } = props;
        
    

    return (
        <div>
            <Profile1 isAuth={isAuth} userId={userId} setUserId={setUserId}/>
        </div>
    )
}

export default Profile
