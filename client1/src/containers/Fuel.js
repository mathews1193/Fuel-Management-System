import React from 'react'
import FuelQuote from '../components/Fuel/Fuel';

function Fuel({ isAuth}) {
    return (
        <div>
            <FuelQuote isAuth={isAuth} />
        </div>
    )
}

export default Fuel
