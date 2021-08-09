import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Axios from 'axios';
import "./Fuel.css";
import ErrorPage from '../../containers/ErrorPage';
import Pricing from './Pricing';

toast.configure();

function Fuel({isAuth, userId} ) {

    const [orderId, setOrderId] = useState();
    const [gallonsRequested, setGallonsRequested] = useState();
    const [USState, setUSState] = useState('');
    const[status, setStatus] = useState(false);
    const [customerStatus, setCustomerStatus] = useState("");
    const [deliveryDate, setDeliveryDate] = useState(new Date());
    const [suggestedPrice, setSuggestedPrice] = useState();
    const [totalAmount, setTotalAmount] = useState();

    const [orderList, setOrderList] = useState([]);

    const getGallons = (e) => {
        setGallonsRequested(e.target.value);
        };
    
    const handlePricing = (e) => {
        // API call to fetch address, city, and state from db
        Axios.get(`http://localhost:3001/address/${userId}`).then((response) => {
            setUSState(response.data[0].USstate);
        });
        // API call to fetch fuel history and store the orderlist array 
        Axios.get(`http://localhost:3001/fuelquotes/${userId}`).then((response) => {
            console.log(response.data);
            setOrderList(response.data);
        });
    };

    const getQuote = () => {
        if (orderList.length > 0){
            setCustomerStatus("Returning Customer");
            setStatus(true);
        } else {
            setCustomerStatus("New Customer");
            setStatus(false);
        }
        const quote = new Pricing(gallonsRequested, status, USState);
        setSuggestedPrice(quote.getPrice());
        setTotalAmount(quote.getAmount());
    };

    // add a test case to test if a instance is created for fuel quote 
    // API call to create a fuel quote and store it into the orderlist array
    const requestQuote = () => {

        Axios.post('http://localhost:3001/create',{
            userId:userId,
            orderId:orderId,
            gallonsRequested:gallonsRequested,
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
                    deliveryDate:deliveryDate.toDateString(),
                    suggestedPrice: suggestedPrice,
                    totalAmount: totalAmount.toString(),
                },
              ]);
            });
            toast("Fuel Order Placed Successfully!");
          };
          useEffect(()=> handlePricing(),[]);
          useEffect(()=> getQuote(),[]);
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
                            <h3>(Press Get Quote twice!)</h3>
                            <h3>{customerStatus}</h3>
                            <p>Gallons Requested: {gallonsRequested} gallons</p>
                            <p>Suggested Price: ${suggestedPrice} per gallon</p>
                            <p>Total Amount: ${totalAmount}</p>
                        </div>
                    </div>
                   
                    {(gallonsRequested > 0) ? ( 
                        <div>
                            <div className="btn-container" >
                                <button onClick={getQuote} className="btn-fuel">Get Quote</button> 
                            </div>
                            <div className="btn-container" >
                                <button onClick={requestQuote} className="btn-fuel">Submit A Fuel Quote</button> 
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p className="error-msg">Please Enter A Number for Gallons Requested Greater Than Zero!</p>
                            <div className="btn-container" >
                                <button className="btn-fuel-grey">Get Quote</button> 
                            </div>
                            <div className="btn-container" >
                                <button className="btn-fuel-grey">Sumbit A Fuel Quote</button> 
                            </div>
                        </div>
                    )}
                    
                </div>
            </div> 
            ) : (
                <ErrorPage />
            )}
        </div>
    )
}

export default Fuel
