import React, { useState } from 'react';
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
    const [gallonsRequested, setGallonsRequested] = useState(0);
    const [USState, setUSState] = useState('');
    const[status, setStatus] = useState(false);
    const [deliveryDate, setDeliveryDate] = useState(new Date());
    const [suggestedPrice, setSuggestedPrice] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const [orderList, setOrderList] = useState([]);

 // add a test case to test this function 
    const getGallons = (e) => {
        setGallonsRequested(e.target.value);
        };
// API call to fetch address, city, and state from db
Axios.get(`http://localhost:3001/address/${userId}`).then((response) => {
    setUSState(response.data[0].USstate);
 });
 // API call to fetch fuel history and store the orderlist array 
 Axios.get(`http://localhost:3001/fuelquotes/${userId}`).then((response) => {
    setOrderList(response.data);
  });
    const getQuote = () => {
        if (orderList.length > 0){
            
            setStatus(true);
        } else {
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
                            <h4>(Press Get Quote twice!)</h4>
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
