import React from 'react'
import Dashboard1 from '../components/Dashboard/Dashboard'

function Dashboard( { isAuth }) {
    return (
        <div>
            <Dashboard1 isAuth={isAuth} />
        </div>
    )
}

export default Dashboard
