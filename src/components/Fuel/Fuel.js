import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Fuel.css";

function Fuel() {
    const [deliveryDate, setDeliveryDate] = useState(new Date());
    return (
        <div>
            <div className="form">
            <div className="img">
                <h1 className="title">Fuel Quote Form</h1>
                <div className="fuel-form">
                    <input 
                    type = "text" 
                    className="fuel"
                    placeholder="Gallons Requested"
                    autofocus required 
                    />
                    <DatePicker 
                    className="date"
                    placeholder="Delivery Date"
                    selected={deliveryDate} 
                    onChange={(date) => setDeliveryDate(date)} 
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
