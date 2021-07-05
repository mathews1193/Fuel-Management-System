import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Axios from 'axios';
import "./Fuel.css";

toast.configure();

function Fuel() {
    const [userId, setUserId] = useState(1);
    const [gallonsRequested, setGallonsRequested] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("988 Low Lane");
    const [deliveryDate, setDeliveryDate] = useState(new Date());
    const [suggestedPrice, setSuggestedPrice] = useState("1.95");
    const [totalAmount, setTotalAmount] = useState("2800");

    const [orderList, setOrderList] = useState([]);

    const getGallons = (e) => {
        setGallonsRequested(e.target.value);
        };

    // function to create a new fuel quote
    const requestQuote = () => {

        Axios.post('http://localhost:3001/create',{
            userId:userId,
            gallonsRequested:gallonsRequested,
            deliveryAddress:deliveryAddress,
            deliveryDate:deliveryDate,
            suggestedPrice: suggestedPrice,
            totalAmount: totalAmount,
        }).then(() => {
            setOrderList([
                ...orderList,
                {
                    userId:userId,
                    gallonsRequested:gallonsRequested,
                    deliveryAddress:deliveryAddress,
                    deliveryDate:deliveryDate,
                    suggestedPrice: suggestedPrice,
                    totalAmount: totalAmount,
                },
              ]);
            });
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
                        value={gallonsRequested}
                        autoFocus required 
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
