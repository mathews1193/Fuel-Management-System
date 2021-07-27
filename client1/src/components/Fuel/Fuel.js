import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Axios from 'axios';
import "./Fuel.css";
import ErrorPage from '../../containers/ErrorPage';

toast.configure();

function Fuel({isAuth, userId} ) {

    const [orderId, setOrderId] = useState();
    const [gallonsRequested, setGallonsRequested] = useState(0);
    const [deliveryAddress, setDeliveryAddress] = useState("988 Low Lane");
    const [deliveryDate, setDeliveryDate] = useState(new Date());
    const [suggestedPrice, setSuggestedPrice] = useState(1.95);
    const [totalAmount, setTotalAmount] = useState(2800);

    const [orderList, setOrderList] = useState([]);

 // add a test case to test this function 
    const getGallons = (e) => {
        setGallonsRequested(e.target.value);
        };
    const getQuote = () => {
        setTotalAmount(suggestedPrice * gallonsRequested);
    };

    const getAddress = () => {
        // API call to fetch name from db if found 
    Axios.get("http://localhost:3001/address").then((response) => {
        setDeliveryAddress(response.data[0].address1);
     });
    }
    // add a test case to test if a instance is created for fuel quote 
    // API call to create a fuel quote and store it into the orderlist array
    const requestQuote = () => {

        Axios.post('http://localhost:3001/create',{
            userId:userId,
            orderId:orderId,
            gallonsRequested:gallonsRequested,
            deliveryAddress:deliveryAddress,
            deliveryDate:deliveryDate.toDateString(),
            suggestedPrice: suggestedPrice,
            totalAmount: totalAmount.toString(),
        }).then(() => {
            setOrderList([
                ...orderList,
                {
                    userId:userId,
                    orderId:orderId,
                    gallonsRequested:gallonsRequested,
                    deliveryAddress:deliveryAddress,
                    deliveryDate:deliveryDate.toDateString(),
                    suggestedPrice: suggestedPrice,
                    totalAmount: totalAmount.toString(),
                },
              ]);
            });
            toast("Fuel Order Placed Successfully!");
          };

    return (
        <div>
            { isAuth === true ? (
            <div className="form">
                <div className="img">
                    <h1 className="title">Fuel Quote Form</h1>
                    <div className="fuel-form">
                        <input 
                        type = "text" 
                        className="fuel"
                        data-testid="fuel"
                        placeholder="Gallons Requested"
                        onChange={getGallons}
                        value={gallonsRequested}
                        autoFocus required 
                        />
                        <DatePicker 
                        className="date"
                        data-testid="picker"
                        placeholder="Delivery Date"
                        selected={deliveryDate}
                        onChange={(date) => setDeliveryDate(date)} 
                        dateFormat="MMMM d, yyyy"
                        />
                        <div className="quote">
                            <h3>Fuel Quote based on factors involving gallons requested and location</h3>
                            <p>Gallons Requested: {gallonsRequested} gallons</p>
                            <p>Suggested Price: ${suggestedPrice} per gallon</p>
                            <p>Total Amount: ${totalAmount}</p>
                        </div>
                    </div>
                    <div className="btn-container" >
                        <button onClick={getQuote} className="btn-fuel">Get Quote</button> 
                    </div>
                    <div className="btn-container" >
                        <button onClick={requestQuote} className="btn-fuel">Submit A Fuel Quote</button> 
                    </div>
                </div>
            </div> 
            ) : (
                <ErrorPage />
            )}
        </div>
    )
}

export default Fuel
