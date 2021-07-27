import React from 'react'
import FuelQuote from '../components/Fuel/Fuel';

function Fuel({ isAuth, userId}) {
    return (
        <div>
            <FuelQuote isAuth={isAuth} userId={userId} />
        </div>
    )
}

export default Fuel
