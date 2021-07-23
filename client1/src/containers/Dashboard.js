import React from 'react'
import Dashboard1 from '../components/Dashboard/Dashboard'

function Dashboard( { isAuth, userId }) {
    return (
        <div>
            <Dashboard1 isAuth={isAuth} userId={userId} />
        </div>
    )
}

export default Dashboard
