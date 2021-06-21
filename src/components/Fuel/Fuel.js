import React from 'react';
import "./Fuel.css";

function Fuel() {
    return (
        <div>
            <div className="form">
            <div className="img">
                <div className="fuel-form">
                    <input 
                    type = "text" 
                    className="fuel"
                    placeholder="Gallons Requested"
                    autofocus required 
                    />
                    <input 
                    type = "text" 
                    className="fuel"
                    placeholder="Delivery Date"
                    autofocus required 
                    />
                </div>
                <div className="btn-container" >
                    <button className="btn-fuel">Request A Fuel Quote</button>
                </div>
            </div>
            </div> 
        </div>
        
    )
}

export default Fuel
