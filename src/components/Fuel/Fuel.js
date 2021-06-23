import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import "./Fuel.css";

toast.configure();

function Fuel(props) {
    const [gallons, setGallons] = useState("");
    const [deliveryDate, setDeliveryDate] = useState(new Date());

    const getGallons = (e) => {
        setGallons(e.target.value);
        };

    const requestQuote = () => {
        const quote = {
            gallons,
            deliveryDate,
            };
        
            toast("Fuel Quote Request Placed Successfully");
        };

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
                    onChange={getGallons}
                    value={gallons}
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
                    <button onClick={requestQuote} className="btn-fuel">Request A Fuel Quote</button>
                </div>
            </div>
            </div> 
        </div>
        
    )
}

export default Fuel
